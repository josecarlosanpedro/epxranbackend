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
    // let querys = `SELECT *
    // FROM [RanUser].[dbo].[UserInfo] where UserName = '${body.username}' `
    // console.log("querys", querys)
    // let users = await sql.query(`${querys}`)
    // if(users.recordset.length === 0) {
    //   return handleError({
    //     message: "Incorrect username"
    //   })
    // }

    // users = users.recordset
    let querys = `INSERT INTO RanUser.dbo.TopUp(CodePinCode,CodeValue,for_all,active, created_date)
    VALUES ('${body.code}', '${body.code_value}', 'true', 'true', GETDATE())`
    console.log("querys", querys)
    const result = await sql.query(`${querys}`)
    return handleSuccess({
      result
    })
}
