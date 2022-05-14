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
    FROM [RanUser].[dbo].[UserInfo] where UserName LIKE '%${body.query}%' `
    console.log("querys", querys)
    const result = await sql.query(`${querys}`)
    return handleSuccess({
      result
    })
}
