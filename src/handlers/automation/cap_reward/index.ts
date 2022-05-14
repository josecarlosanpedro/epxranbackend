import {
    handleCreated,
    handleError,
    handleConflict,
    handleUnauthorized,
    handleUnprocessable,
    handleSuccess,
} from "../../../utils/responses";
import sql from "mssql"
import uniqBy from "lodash/uniqBy"
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
     where [RanUser].[dbo].[UserInfo].UserType = 1 and [RanUser].[dbo].[UserInfo].UserAvailable = 1
     and ([RanUser].[dbo].[UserInfo].CapReward != 1 or [RanUser].[dbo].[UserInfo].CapReward is null) and ChaReborn = 200`
    let test = await sql.query(`${querys}`)
    test = test.recordset
    let char: any = uniqBy(test, "UserName");

    await Promise.all(await char.map(async item => {
      let querys = `Update [RanUser].[dbo].[UserInfo] set UserPoint = UserPoint + 20000, CapReward = 1 where UserName = '${item.UserName}'`
      let test = await sql.query(`${querys}`)
      let queryinsert = `INSERT INTO [RanUser].[dbo].[EPointLogs]  (user_id, points, type, created_date) VALUES ('${item.UserName}', 20000, 'cap_reward',  GETDATE()) `
      const userloginsert = await sql.query(`${queryinsert}`)
    }))
    return handleSuccess({
      char
    })
}
// async function encrypt(message: string,key: string ): Promise<string> {
//   return Crypto.AES.encrypt(message, key).toString();
// }
// async function decrypt(encrypted: string,key: string ): Promise<string> {
//   return Crypto.AES.decrypt(encrypted, key).toString(Crypto.enc.Utf8);
// }