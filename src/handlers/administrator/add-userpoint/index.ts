import {
    handleCreated,
    handleError,
    handleConflict,
    handleUnauthorizedOrigin,
    handleUnprocessable,
    handleSuccess,
} from "../../../utils/responses";
import sql from "mssql"
import { isEmpty } from "lodash";

export const handler = async (event) => {
    console.log(event)
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
    FROM [RanUser].[dbo].[UserInfo] where UserName = '${body.username}' `
    console.log("querys", querys)
    const users = await sql.query(`${querys}`)
    if(users.recordset.length === 0) {
      return handleError({
        message: "Incorrect username"
      })
    }

    const user = users.recordset[0]
    let userpoint = Number(user.UserPoint) + Number(body.userpoint)
    let queryupdate = `UPDATE [RanUser].[dbo].[UserInfo] set UserPoint = ${userpoint} where UserName = '${body.username}' `
    const userupdate = await sql.query(`${queryupdate}`)
    console.log("(body.type.toLowerCase().includes('donate') === 'donate'", (body.type.toLowerCase().includes('donate')))
    let message = ""
    let is_errom_key_get = false
    if(body.type.toLowerCase().includes('donate')) {
      // if(user.UserVIP === 0) {
      //   message = "Need to upgrade user token to donor token"
      // }
      let is_key = `select * from RanShop.dbo.ShopPurchase where UserUID = '${body.username}' and ProductNum = 15278`
      let key_query = await sql.query(`${is_key}`)
      console.log("key_query",key_query)
      if(!isEmpty(key_query.recordset)) {
        is_errom_key_get = true
        key_query = key_query.recordset[0]
        if(key_query.PurFlag === 0) {
          message = "Need to upgrade user token to donor token in the bank"
        } else {
          message = "Need to upgrade user token to donor token in the inventory"
        }
      } else {
        message = "No Need to upgrade user token to donor token because key is not yet receive"
      }
      let queryupdate2 = `UPDATE [RanUser].[dbo].[UserInfo] set UserVIP = 1 where UserName = '${body.username}' `
      const userupdate2 = await sql.query(`${queryupdate2}`)
      console.log("userupdate2", userupdate2)
    }
    let queryinsert = `INSERT INTO [RanUser].[dbo].[EPointLogs]  (user_id, points, type, created_date) VALUES ('${body.username}', ${Number(body.userpoint)}, '${body.type}',  GETDATE()) `
    
    
    const userloginsert = await sql.query(`${queryinsert}`)

    
    if(body.type.toLowerCase().includes('donate')) {
      let referralinsert = `INSERT INTO [RanUser].[dbo].[EPointLogs]  (user_id, points, type, created_date, description) VALUES ('${user.Referral}', ${Number(body.userpoint) * .05}, 'Referral',  GETDATE(), '${body.username}') `
      const refuserloginsert = await sql.query(`${referralinsert}`)
      let refqueryupdate = `UPDATE [RanUser].[dbo].[UserInfo] set UserPoint = UserPoint + ${Number(body.userpoint) * .05} where UserName = '${user.Referral}' `
      const refuserupdate = await sql.query(`${refqueryupdate}`)
      let comqueryupdate = `UPDATE [RanUser].[dbo].[CommunityBank] set ep = ep + ${Number(body.userpoint) * .05}, updated_date = GETDATE() `
      const comuserupdate = await sql.query(`${comqueryupdate}`)
      let cominsert = `INSERT INTO [RanUser].[dbo].[CommunityBankLogs]  (type, cost, event, created_date, description) VALUES ('EP',${Number(body.userpoint) * .05}, 'Donate', GETDATE(), '${body.username}') `
      const comsert = await sql.query(`${cominsert}`)
      console.log("refuserloginsert",refuserloginsert)
      console.log("refuserupdate",refuserupdate)
    }
    return handleSuccess({
      message,
      is_errom_key_get,
      userupdate,
      user,
      userpoint,
      userloginsert
    })
}
