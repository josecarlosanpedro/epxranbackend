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
  let querys = `SELECT [ChaNum]
  ,[UserNum]
  ,[ChaName]
  ,[ChaLevel]
  ,[ChaMoney]
  ,[ChaPower]
  ,[ChaStrong]
  ,[ChaStrength]
  ,[ChaSpirit]
  ,[ChaDex]
  ,[ChaIntel]
  ,[ChaStRemain]
  ,[ChaPower]+[ChaStrong]+[ChaStrength]+[ChaSpirit]+[ChaDex]+[ChaIntel]+[ChaStRemain] as ChaStatTotal
  FROM [RanGame1].[dbo].[ChaInfo] where [ChaPower]+[ChaStrong]+[ChaStrength]+[ChaSpirit]+[ChaDex]+[ChaIntel]+[ChaStRemain] > 13100
  and (ChaNum != 1111 and ChaNum != 180 and ChaNum != 127 and ChaNum != 1035 and ChaNum != 186)
  order by ChaStatTotal
  `

  let test = await sql.query(`${querys}`)
  let boom = []
  await Promise.all(await test.recordset.map(async item => {
    let querys = `Update [RanUser].[dbo].[UserInfo] set UserAvailable = 0, BannedReason = 'Stat Manipulation' where UserNum = '${item.UserNum}'`
    let res = await sql.query(`${querys}`)
    boom.push(res)
  }))
  return handleSuccess({
    boom,
    test
  })
}
// async function encrypt(message: string,key: string ): Promise<string> {
//   return Crypto.AES.encrypt(message, key).toString();
// }
// async function decrypt(encrypted: string,key: string ): Promise<string> {
//   return Crypto.AES.decrypt(encrypted, key).toString(Crypto.enc.Utf8);
// }