import Tables from "../database/tables";
import { base64Decrypt, base64Encrypt } from "./crypto";
import isEmpty from "lodash/isEmpty";
export const getUserPoolDetails = async (sql, origin) => {
    console.log(origin)
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

            resolve({
                ...data,
                pool_id: base64Decrypt(data.pool_id),
                client_id: base64Decrypt(data.client_id),
            });
            }
        });
      });
}
export const getUserPoolDetailsByPoolId = async (sql, pool_id) => {
    console.log(pool_id)
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.OriginConfigurations} where pool_id = ?` 
        console.log(query)
        sql.query(query, [base64Encrypt(pool_id)], (err, results, field) => {
          if(err) reject(err);
          console.log(results.length === 0)
          if(results.length === 0) {
            resolve([])
          } else {
            const data = results[0]

            resolve({
                ...data,
                pool_id: base64Decrypt(data.pool_id),
                client_id: base64Decrypt(data.client_id),
            });
            }
        });
      });
}

export const getAdminByCognitoId = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.Administrators} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
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
export const getMedicalProfessionalDetails = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.MedicalProfessionals} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
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
export const getMedicalProfessionalDetailsByID = async (sql, id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.MedicalProfessionals} where id = ?` 
        console.log(query)
        sql.query(query, [id], (err, results, field) => {
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
export const getPatientDetails = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.Patients} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
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
export const getMDAssistantDetails = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.MedicalAssistants} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
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
export const getMDAssistantDetailsByUserId = async (sql, user_id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.MedicalAssistants} where id = ?` 
        console.log(query)
        sql.query(query, [user_id], (err, results, field) => {
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
export const getPatientDetailsByUserId = async (sql, id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.Patients} where id = ?` 
        console.log(query)
        sql.query(query, [id], (err, results, field) => {
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
export const getPatientIsExistViaEmail = async (sql, email, origin) => {
    return new Promise((resolve, reject) => {
        const query = `select * from ${Tables.Patients} where email = ? and origin = ?` 
        console.log(query)
        sql.query(query, [email, origin], (err, results, field) => {
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
export const getMedicalProfessionalId = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select id from ${Tables.MedicalProfessionals} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
          if(err) reject(err);
          console.log(results.length === 0)
          if(results.length === 0) {
            resolve([])
          } else {
            const data = results[0]
            resolve(data.id);
            }
        });
      });
}
export const getPatientId = async (sql, cognito_id) => {
    return new Promise((resolve, reject) => {
        const query = `select id from ${Tables.Patients} where cognito_id = ?` 
        console.log(query)
        sql.query(query, [cognito_id], (err, results, field) => {
          if(err) reject(err);
          console.log(results.length === 0)
          if(results.length === 0) {
            resolve([])
          } else {
            const data = results[0]
            resolve(data.id);
            }
        });
      });
}
export const getCognitoId = async (data) => {
    return data.requestContext.authorizer.sub
}

export const getUserMobileNumberFromEmail = async (sql, table, email, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select * from ${table} where email = ? and origin = ?` 
      console.log(query)
      sql.query(query, [email, origin], (err, results, field) => {
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
export const getMedicalProfessionalIdEmailChecker = async (sql, email, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select id from ${Tables.MedicalProfessionals} where email = ? and origin = ?` 
      console.log(query)
      sql.query(query, [email, origin], (err, results, field) => {
        if(err) reject(err);
        console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve(data.id);
          }
      });
    });
}
export const getPatientIdEmailChecker = async (sql, email, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select id from ${Tables.Patients} where email = ? and origin = ?` 
      console.log(query)
      sql.query(query, [email, origin], (err, results, field) => {
        if(err) reject(err);
        console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve(data.id);
          }
      });
    });
}
export const getMDAIdEmailChecker = async (sql, email, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select id from ${Tables.MedicalAssistants} where email = ? and origin = ?` 
      console.log(query)
      sql.query(query, [email, origin], (err, results, field) => {
        if(err) reject(err);
        console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve(data.id);
          }
      });
    });
}
export const getPatientIdUsernameChecker = async (sql, username, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select id from ${Tables.Patients} where (email = ? or mobile_number = ?) and origin = ?` 
      console.log(query)
      sql.query(query, [username,username, origin], (err, results, field) => {
        if(err) reject(err);
        // console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve(data.id);
          }
      });
    });
}
export const getMedProfIdUsernameChecker = async (sql, username, origin) => {
  return new Promise((resolve, reject) => {
      const query = `select id from ${Tables.MedicalProfessionals} where (email = ? or mobile_number = ?) and origin = ?` 
      console.log(query)
      sql.query(query, [username,username, origin], (err, results, field) => {
        if(err) reject(err);
        // console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve(data.id);
          }
      });
    });
}
export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const validateMobile = (mobile) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(mobile).toLowerCase());
}

export const getAge = (dateString) =>
{ 
    console.log("dateString","2021-02-09T16:00:00.000Z")
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    console.log(age)
    return age;
}


export const medProfMDAChecker = async (sql, med_prof_id, mda_cognito_id) => {
  const mda: any = await getMDAssistantDetails(sql, mda_cognito_id)
  return new Promise((resolve, reject) => {
      const query = `select * from ${Tables.MedProfMDAs} where med_prof_id = ? and md_assistant_id = ?` 
      console.log(query)
      sql.query(query, [med_prof_id, mda.id], (err, results, field) => {
        if(err) reject(err);
        console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]
          resolve({data, mda});
          }
      });
    });
}

export const getUserOriginRole = async (sql, user_id) => {
  console.log(user_id)
  return new Promise((resolve, reject) => {
      const query = `select * from ${Tables.UserOriginRoles} where user_id = ?` 
      console.log(query)
      sql.query(query, [user_id], (err, results, field) => {
        if(err) reject(err);
        console.log(results.length === 0)
        if(results.length === 0) {
          resolve([])
        } else {
          const data = results[0]

          resolve({
              ...data,
              // pool_id: base64Decrypt(data.pool_id),
              // client_id: base64Decrypt(data.client_id),
          });
          }
      });
    });
}
