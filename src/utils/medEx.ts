import { insert, mysqlconnect, queryRawValue } from "../controllers/sql";
import Tables from "../database/tables";
import {originConfigurationDetails} from "./origin"
import { base64Decrypt } from "./crypto";

export const medExToken =async (origin: string) => {
    const sql = mysqlconnect();
    const origin_details: any = await originConfigurationDetails(sql, origin)
    const medex_params = {
        sql,
        query: `SELECT * from ${Tables.MedExTokens} WHERE origin = "${origin}" AND expires >= NOW() AND is_deleted = ?`,
        queryValue: [
            false,
        ]
    };

    const medex_tokens: any = await queryRawValue(medex_params);

    let token = ""
    if(medex_tokens.length !== 0) {
       token = medex_tokens[0]?.access_token
    }
    if(medex_tokens.length === 0) {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
        'grant_type': 'password',
        'username': base64Decrypt(origin_details.med_express_key),
        'password': base64Decrypt(origin_details.med_express_secret)
        });
        var config = {
        method: 'post',
        url: `${process.env.MED_EXPRESS_URL}token`,
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
                    },
        data : data
        };

        await axios(config)
        .then(async function (response) {
        const { data } = response
        const issued = new Date(data[".issued"])
        const expires = new Date(data[".expires"])
        token= data.access_token

        const value = {
            access_token: data.access_token,
            token_type: data.token_type,
            expires_in: data.expires_in,
            userName: data.userName,
            issued: issued,
            origin,
            expires: expires,
        }

        const medex_tokens_insert = {
            sql,
            table: Tables.MedExTokens,
            fields: Object.keys(value),
            values: Object.values(value),
        }

        await insert(medex_tokens_insert);
    })
    .catch(function (error) {
        console.log(error);
    });

    }
    sql.destroy();

    return token
}