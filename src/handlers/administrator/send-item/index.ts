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
    let result = []
    for (let i = 1; i <= Number(body.quantity); i++) {
      let where = `WHERE UserID = '${body.receiver}'`
      if(body.receiver === "ALL") {
        where = ""
      }
      
      if(body.receiver === "ONLINE") {
        where = "WHERE UserLoginState = 1"
      }
      
      if(body.receiver === "OFFLINE") {
        where = "WHERE UserLoginState = 0"
      }
      let querys = `INSERT INTO RanShop.dbo.ShopPurchase(UserUID,ProductNum)
      SELECT UserName, ${body.item}
      FROM RanUser.dbo.UserInfo
      ${where}`
      console.log("querys", querys)
      const res = await sql.query(`${querys}`)
      result.push(res)
    }
   
    return handleSuccess({
      result
    })
}
