import Tables from "../database/tables";
export const originDetails = async (sql, origin) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.OriginConfigurations} where origin = ?` 
        console.log(query)
        sql.query(query, [origin], (err, results, field) => {
          if(err) reject(err);
          console.log(results.length === 0)
          if(results.length === 0) {
            resolve([])
          } else {
            const data = results[0]
            resolve(data);
            }
        });
      });
}
export const originConfigurationDetails = async (sql, origin) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.OriginConfigurations} where origin = ?` 
        console.log(query)
        sql.query(query, [origin], (err, results, field) => {
          if(err) reject(err);
          console.log(results.length === 0)
          if(results.length === 0) {
            resolve([])
          } else {
            const data = results[0]
            resolve(data);
            }
        });
      });
}