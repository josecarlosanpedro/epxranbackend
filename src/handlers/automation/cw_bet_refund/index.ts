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
import { isEmpty } from "lodash";

export const handler = async (event) => {
    const body = JSON.parse(event.body)
    
const { region } = event.pathParameters
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
  //   let querys = `SELECT *
  //   FROM [RanGame1].[dbo].[GuildRegion]`
  // let test = await sql.query(`${querys}`)
  // test = test.recordset
  // await Promise.all(await test.map(async item => {
     let refundinsert = `INSERT INTO [RanGame1].[dbo].[GuildCWBetResult] (total_bet, winner_bet, losser_bet,
      winner_bet_result, winner_percent_bet, guild_fee,epx_fee, bet_date, guild_redeem, created_date, room, guild_id, refund) VALUES
      (0,0,0,0,0,0,0,CONVERT(DATE, GETDATE()), 0, GETDATE(),  ${region},0, 1 )`
      console.log("refundinsert",refundinsert)
      let refund = await sql.query(`${refundinsert}`)
      let refundbet = `UPDATE [RanGame1].[dbo].[GuildCWBet] set refund = 1 where bet_date = CONVERT(DATE, GETDATE()) and room = ${region}`
        console.log("refundbet",refundbet)
        let refundbetq = await sql.query(`${refundbet}`)
  // }))
    return handleSuccess(
      "test")
      // test2,
      // test3,
      // test4)
}


/****** Script for SelectTopNRows command from SSMS  ******/
// SELECT TOP 50000 [id]
//       ,[total_bet]
//       ,[winner_bet]
//       ,[losser_bet]
//       ,[winner_bet_result]
//       ,[guild_fee]
//       ,[epx_fee]
//       ,[bet_date]
//       ,[guild_redeem]
//       ,[guild_redeemer]
//       ,[created_date]
//   FROM [RanGame1].[dbo].[GuildCWBetResult]
// async function encrypt(message: string,key: string ): Promise<string> {
//   return Crypto.AES.encrypt(message, key).toString();
// }
// async function decrypt(encrypted: string,key: string ): Promise<string> {
//   return Crypto.AES.decrypt(encrypted, key).toString(Crypto.enc.Utf8);
// }