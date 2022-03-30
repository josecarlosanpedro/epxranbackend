import Tables from "../database/tables";
import { v4 as uuidv4 } from "uuid";
export const sendUserNotification = async (sql, body) => {
    console.log("[NOTIFICATION_BODY]",body)
    return new Promise((resolve, reject) => {
        const query = `insert into ${Tables.UserNotifications} 
        (id, user_id, user_type, notification_type, notification_type_id, status, origin, sender_id, sender_type, created_at, updated_at) values
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)` 
        console.log(query)
        sql.query(query, [
            uuidv4(),
            body.user_id,
            body.user_type,
            body.notification_type,
            body.notification_type_id,
            body.status,
            body.origin,
            body.sender_id,
            body.sender_type,
            new Date(),
            new Date()
        ], (err, results, field) => {
          if(err) reject(err);
        //   console.log(results.length === 0)
        //   if(results.length === 0) {
            resolve(results)
        //   } else {
        });
    });
}