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
    let querys = `SELECT *
      FROM [RanGame1].[dbo].[GuildRegion]`
    let test = await sql.query(`${querys}`)
    test = test.recordset
    await Promise.all(await test.map(async item => {
        let insertguild= `INSERT INTO [RanGame1].[dbo].[GuildWarWinner] (guild_id,created_date,cw_date,room) values (${item.GuNum}, GETDATE(),CONVERT(DATE, GETDATE()),${item.RegionID})`
        insertguild = await sql.query(`${insertguild}`)
    
        //   let checker: any = `SELECT * FROM [ RanGame1].[dbo].[GuildCWBetResult]
    //   where bet_date = CONVERT(DATE, GETDATE()) AND room = ${item.RegionID}`
    //   checker = await sql.query(`${checker}`)
    //   checker = checker.recordset
    //   console.log("checker.length", checker.length)
    //   if(checker.length > 0 ){
    //     // if(checker[0].refund === 1) {
    //     //   return 'refund'
    //     // }
    //     console.log('[existing]')
    //      return "exist"
    //   }
     
    //   let lossersumbet = `SELECT SUM(bet) as bet  FROM [RanGame1].[dbo].[GuildCWBet]
    //   where bet_date = CONVERT(DATE, GETDATE()) and guild_id != ${item.GuNum} and room = ${item.RegionID}`
    //   let losserbet = await sql.query(`${lossersumbet}`)
    //   losserbet = losserbet.recordset
    //   losserbet = losserbet[0]
  
    //   let winnersumbet = `SELECT SUM(bet) as bet  FROM [RanGame1].[dbo].[GuildCWBet]
    //   where bet_date = CONVERT(DATE, GETDATE()) and guild_id = ${item.GuNum} and room = ${item.RegionID}`
    //   let winnersbet = await sql.query(`${winnersumbet}`)
    //   winnersbet = winnersbet.recordset
    //   console.log("winnersbet",winnersbet)
    //   if(winnersbet[0].bet === null) {
    //     let betresult = `INSERT INTO [RanGame1].[dbo].[GuildCWBetResult] (total_bet, winner_bet, losser_bet,
    //     winner_bet_result, winner_percent_bet, guild_fee,epx_fee, bet_date, guild_redeem, created_date, room, guild_id) VALUES
    //     (${Number(losserbet.bet)},0, ${Number(losserbet.bet)}, 0,
    //     0,${Number(losserbet.bet) * 0.5}, ${Number(losserbet.bet) * 0.5},  CONVERT(DATE, GETDATE()), 0, GETDATE(),  ${item.RegionID}, ${item.GuNum} )`
    //     console.log("betresult",betresult)
    //     let nowinner = await sql.query(`${betresult}`)
    //     console.log("dasdas",nowinner)
    //     let cwnowinnerbetlosserupdate = `UPDATE [RanGame1].[dbo].[GuildCWBet] set bet_result = (bet * -1), bet_result_percent = -100,
    //     result = 'LOSS', is_redeem = 1, is_bet_done = 1
    //     where bet_date = CONVERT(DATE, GETDATE()) and guild_id != ${item.GuNum}  and room = ${item.RegionID} and (is_redeem != 1 or is_redeem is null)`
    //     console.error('cwnowinnerbetlosserupdate',cwnowinnerbetlosserupdate)
    //     let nowinner1 = await sql.query(`${cwnowinnerbetlosserupdate}`)
    //     nowinner1 = nowinner1.recordset
    //     console.log(nowinner1)

    //     let updatecombank = `UPDATE [RanUser].[dbo].[CommunityBank] set gold = gold + ${Number(losserbet.bet) * 0.5}, updated_date = GETDATE()`;
    //     updatecombank = await sql.query(`${updatecombank}`)
    //     let insertcombank = `INSERT INTO [RanUser].[dbo].[CommunityBankLogs] (type, cost, event, created_date, description) VALUES 
    //     ('GOLD', ${Number(losserbet.bet) * 0.5}, 'CW Bet', GETDATE(), CAST(CONVERT(DATE, GETDATE()) AS VARCHAR) + '-${item.RegionID}/${item.GuNum}')`;
    //     insertcombank = await sql.query(`${insertcombank}`)
    //     return handleSuccess("no winner")
    //   }
    //   winnersbet = winnersbet[0]
  
  
  
  
  
    //   let userpercent = (Number(losserbet.bet) / Number(winnersbet.bet)) * 80
    //   let guildpercent = (Number(losserbet.bet) / Number(winnersbet.bet)) * 15
    //   let feepercent = (Number(losserbet.bet) / Number(winnersbet.bet)) * 5
  
    //   let cwbetwinnerupdate = `UPDATE [RanGame1].[dbo].[GuildCWBet] set bet_result = (bet + (bet *  ${Number(userpercent) / 100})), bet_result_percent = ${userpercent},
    //   result = 'WIN', is_redeem = 0, is_bet_done = 1
    //   where bet_date = CONVERT(DATE, GETDATE()) and guild_id = ${Number(item.GuNum)}  and room = ${item.RegionID}  and  (is_redeem != 1 or is_redeem is null)`
    //   console.log(cwbetwinnerupdate)
    //   let test2 = await sql.query(`${cwbetwinnerupdate}`)
    //   test2 = test2.recordset
    //   let cwbetlosserupdate = `UPDATE [RanGame1].[dbo].[GuildCWBet] set bet_result = (bet * -1), bet_result_percent = -100,
    //   result = 'LOSS', is_redeem = 1, is_bet_done = 1
    //   where bet_date = CONVERT(DATE, GETDATE()) and guild_id != ${item.GuNum}  and room = ${item.RegionID}  and  (is_redeem != 1 or is_redeem is null)`
    //   let test3 = await sql.query(`${cwbetlosserupdate}`)
    //   test3 = test3.recordset
  
    //   let betresult = `INSERT INTO [RanGame1].[dbo].[GuildCWBetResult] (total_bet, winner_bet, losser_bet,
    //   winner_bet_result, winner_percent_bet, guild_fee,epx_fee, bet_date, guild_redeem, created_date, room, guild_id) VALUES
    //   (${Number(winnersbet.bet) + Number(losserbet.bet)}, ${Number(winnersbet.bet)}, ${Number(losserbet.bet)}, ${Number(winnersbet.bet) * (Number(userpercent) / 100)},
    //   ${Number(userpercent)},${Number(winnersbet.bet) * (Number(guildpercent) / 100)}, ${Number(winnersbet.bet) * (Number(feepercent) / 100)},  CONVERT(DATE, GETDATE()), 0, GETDATE(),  ${item.RegionID},  ${item.GuNum} )`
    //   let test4 = await sql.query(`${betresult}`)
      
    //   let updatecombank = `UPDATE [RanUser].[dbo].[CommunityBank] set gold = gold +${Number(winnersbet.bet) * (Number(feepercent) / 100)}, updated_date = GETDATE()`;
    //   updatecombank = await sql.query(`${updatecombank}`)
    //   let insertcombank = `INSERT INTO [RanUser].[dbo].[CommunityBankLogs] (type, cost, event, created_date, description) VALUES 
    //   ('GOLD', ${Number(winnersbet.bet) * (Number(feepercent) / 100)}, 'CW Bet', GETDATE(), CAST(CONVERT(DATE, GETDATE()) AS VARCHAR) + '-${item.RegionID}/${item.GuNum}')`;
    //   insertcombank = await sql.query(`${insertcombank}`)

    //   test4 = test4.recordset
  
    }))

    
    return handleSuccess({
      test,
      // test2,
      // test3,
      // test4
    })
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