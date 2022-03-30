import {originConfigurationDetails} from "./origin"
import { base64Decrypt } from "./crypto";

export const smartMessaging = async ( sql: any,  origin: string, number: string, message: string) => {
    const origin_details: any = await originConfigurationDetails(sql, origin)
    const axios = require('axios')
    return new Promise(function (resolve, reject) {
        console.log(process.env)
        console.log("origin", origin_details)
      axios
        .post(
          base64Decrypt(origin_details.sms_url), {
                "mssageType":  "sms",
                "destination": number,
                "text": message
          }, {
            auth: {
              username: base64Decrypt(origin_details.sms_key),
              password: base64Decrypt(origin_details.sms_secret)
            }
          }
        )
        .then(function (response) {
          console.log(response.data)
          resolve(response.data)
        })
        .catch(function (error) {
          console.log(error)
          resolve(error)
        })
    })
  }