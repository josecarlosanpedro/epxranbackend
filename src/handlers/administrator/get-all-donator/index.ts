import {
    handleCreated,
    handleError,
    handleConflict,
    handleUnauthorizedOrigin,
    handleUnprocessable,
    handleSuccess,
} from "../../../utils/responses";
import uniqBy from "lodash/uniqBy"
import sql from "mssql"

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
    FROM [RanUser].[dbo].[EPointLogs] where type = 'donate' `
    console.log("querys", querys)
    let users = await sql.query(`${querys}`)
    users = users.recordsets
    let q = []
    await Promise.all(await users[0].map(async item => {
      let queryupdate2 = `UPDATE [RanUser].[dbo].[UserInfo] set UserVIP = 1 where UserName = '${item.user_id}' `
      const userupdate2 = await sql.query(`${queryupdate2}`)
      q.push(userupdate2)
    }))
    // const usersuniq = await uniqBy(users.recordsets, "user_id");
    return handleSuccess({
      // usersuniq
      q,
      users
    })
}
