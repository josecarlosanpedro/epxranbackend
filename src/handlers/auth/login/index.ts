import {
    handleCreated,
    handleError,
    handleConflict,
    handleUnauthorized,
    handleUnprocessable,
    handleSuccess,
} from "../../../utils/responses";
import sql from "mssql"
import * as Crypto from 'crypto-js';

export const handler = async (event) => {
    const body = JSON.parse(event.body)
    console.log(body)
    const sqlConfig = {
      user: 'sa',
      password: '-=3PXepx-b055r4n=-',
      server: 'localhost', 
      // database: "RanGame1",
      "dialect":"mssql",
      "port":1433,
      "options": {
          encrypt: false,
          enableArithAbort: false
      },
      dialectOptions: {
          instanceName: "MSSQLSERVER"
      },
    
    }
    await sql.connect(sqlConfig)
    let querys = `SELECT *
    FROM [RanUser].[dbo].[UserInfo] where UserName = '${body.username}' and UserPass = '${body.password}' `
    console.log("querys", querys)
    const users = await sql.query(`${querys}`)
    if(users.recordset.length === 1) {
      const data = {
        ...users.recordset[0],
        user_type: "USER"
      }
      const token = await encrypt(JSON.stringify(data), "EPXBOSSRAN")
      const d = await decrypt(token, "EPXBOSSRAN")
      return handleSuccess({
        token,
        d
      })
    }
    let adminquery = `SELECT *
    FROM [RanUser].[dbo].[Account] where adminname = '${body.username}' and pwd = '${body.password}' `
    console.log("querys", adminquery)
    const admin = await sql.query(`${adminquery}`)
    if(admin.recordset.length === 1) {
      const data = {
        ...admin.recordset[0],
        user_type: "ADMIN"
      }
      const token = await encrypt(JSON.stringify(data), "EPXBOSSRAN")
      
      return handleSuccess({
        token
      })
    }
    // if(users.recordset.length === 0) {
    //   return handleUnauthorized({
    //     message: "Incorrect username/password"
    //   })
    // }

    return handleUnauthorized({
        message: "Incorrect username/password"
    })
}
async function encrypt(message: string,key: string ): Promise<string> {
  return Crypto.AES.encrypt(message, key).toString();
}
async function decrypt(encrypted: string,key: string ): Promise<string> {
  return Crypto.AES.decrypt(encrypted, key).toString(Crypto.enc.Utf8);
}