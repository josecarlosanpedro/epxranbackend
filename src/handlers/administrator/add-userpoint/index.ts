import {
    handleCreated,
    handleError,
    handleConflict,
    handleUnauthorizedOrigin,
    handleUnprocessable,
    handleSuccess,
} from "../../../utils/responses";
import sql from "mssql"

export const handler = async (event) => {
    console.log(event)
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
    let queryinsert = `INSERT INTO [RanUser].[dbo].[EPointLogs]  (user_id, points, type, created_date) VALUES ('${body.username}', ${Number(body.userpoint)}, '${body.type}',  GETDATE()) `
    const userloginsert = await sql.query(`${queryinsert}`)
    return handleSuccess({
      userupdate,
      user,
      userpoint,
      userloginsert
    })
}
