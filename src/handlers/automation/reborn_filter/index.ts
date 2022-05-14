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
      password: 'passwordepxsql',
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
    let querys = `SELECT 
    [RanGame1].[dbo].[ChaInfo].ChaName, 
    [RanGame1].[dbo].[ChaInfo].ChaReborn, 
    [RanGame1].[dbo].[ChaInfo].UserNum, 
    [RanGame1].[dbo].[ChaInfo].ChaNum, 
    [RanUser].[dbo].[UserInfo].UserName,
    [RanUser].[dbo].[UserInfo].IpAddress
     FROM [RanGame1].[dbo].[ChaInfo] join 
     [RanUser].[dbo].[UserInfo] on [RanGame1].[dbo].[ChaInfo].UserNum = [RanUser].[dbo].[UserInfo].UserNum
     where [RanUser].[dbo].[UserInfo].UserType = 1 and [RanUser].[dbo].[UserInfo].UserAvailable = 1`

    const char = await sql.query(`${querys}`)
    
    // return handleSuccess({
    //   char
    // })
    let hack_account = []
    await Promise.all(await char?.recordset?.map(async item => {
      let rebirthcheck = `SELECT COUNT(1) as count
      FROM [RanGame1].[dbo].[ChaRebirth_list] where ChaNum = ${item.ChaNum}`
      const rebirthcount = await sql.query(`${rebirthcheck}`)
      if(item.ChaReborn !== rebirthcount.recordset[0].count) {
        let rebirthbannedquery = `UPDATE [RanUser].[dbo].[UserInfo] set 
        UserAvailable = 0, BannedReason = 'Rebirth Manipulation'
        where UserNum = ${item.UserNum}`
        const rebirthbanned = await sql.query(`${rebirthbannedquery}`)
        hack_account.push({
          ChaName: item.ChaName,
          ChaReborn: item.ChaReborn,
          IpAddress: item.IpAddress,
          Count: rebirthcount.recordset[0].count,
          rebirthbanned
        })
      }
    }))

    // console.log("querys", querys)
    // const users = await sql.query(`${querys}`)
    // if(users.recordset.length === 1) {
    //   const data = {
    //     ...users.recordset[0],
    //     user_type: "USER"
    //   }
    //   const token = await encrypt(JSON.stringify(data), "EPXBOSSRAN")
    //   const d = await decrypt(token, "EPXBOSSRAN")
    //   return handleSuccess({
    //     token,
    //     d
    //   })
    // }
    // let adminquery = `SELECT *
    // FROM [RanUser].[dbo].[Account] where adminname = '${body.username}' and pwd = '${body.password}' `
    // console.log("querys", adminquery)
    // const admin = await sql.query(`${adminquery}`)
    // if(admin.recordset.length === 1) {
    //   const data = {
    //     ...admin.recordset[0],
    //     user_type: "ADMIN"
    //   }
    //   const token = await encrypt(JSON.stringify(data), "EPXBOSSRAN")
      
    //   return handleSuccess({
    //     token
    //   })
    // }
    // if(users.recordset.length === 0) {
    //   return handleUnauthorized({
    //     message: "Incorrect username/password"
    //   })
    // }

    return handleSuccess({
      count: hack_account.length,
      hack_account
    })
}
// async function encrypt(message: string,key: string ): Promise<string> {
//   return Crypto.AES.encrypt(message, key).toString();
// }
// async function decrypt(encrypted: string,key: string ): Promise<string> {
//   return Crypto.AES.decrypt(encrypted, key).toString(Crypto.enc.Utf8);
// }