import AWS from "aws-sdk";

// console.log("process.env.ACCESS_KEY_ID", process.env.ACCESS_KEY_ID);
// console.log("process.env.SECRET_ACCESS_KEY", process.env.SECRET_ACCESS_KEY);

console.log("rocess.env.ACCESS_KEY",process.env.ACCESS_KEY)
console.log("rocess.env.SECRET_KEY",process.env.SECRET_KEY)
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

export default AWS;
