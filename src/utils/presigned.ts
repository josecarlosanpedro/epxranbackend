export const getPresignedPrivateLink = async (key) => {
    const AWS = require('aws-sdk');
    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    })
    return new Promise((resolve, reject) => {
        var params = {
            // ACL: 'public-read',
            Bucket: process.env.KEEPWELL_BUCKET,
            // ContentType: `image/png`,
            Key: decodeURIComponent(key), 
            Expires: 100000,
        };
        var s3 = new AWS.S3({
            signatureVersion: 'v4',
        });
        var url = s3.getSignedUrl('getObject', params);
        // console.log('The URL is', url);
        resolve(decodeURIComponent(url.split("?")[0]));
    });
  }
export const getPresignedSecureLink = async (key) => {
    const AWS = require('aws-sdk');
    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    })
    return new Promise((resolve, reject) => {
        var params = {
            // ACL: 'public-read',
            Bucket: process.env.KEEPWELL_BUCKET,
            // ContentType: `image/png`,
            Key: decodeURIComponent(key), 
            Expires: 100000,
        };
        var s3 = new AWS.S3({
            signatureVersion: 'v4',
        });
        var url = s3.getSignedUrl('getObject', params);
        // console.log('The URL is', url);
        resolve(decodeURIComponent(url));
    });
  }
export const getPresignedPublicLink = async (key) => {
    const AWS = require('aws-sdk');
    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    })
    return new Promise((resolve, reject) => {
        var params = {
            // ACL: 'public-read',
            Bucket: process.env.KEEPWELL_BUCKET,
            // ContentType: `image/png`,
            Key: decodeURIComponent(key), 
            Expires: 100000,
        };
        var s3 = new AWS.S3({
            signatureVersion: 'v4'
        });
        var url = s3.getSignedUrl('getObject', params);
        // console.log('The URL is', url);
        resolve(decodeURIComponent(url.split("?")[0]));
    });
  }
export const s3CopyObject = async (key, copySource) => {
    const AWS = require('aws-sdk');
    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    })
    return new Promise((resolve, reject) => {
        var params = { 
            ACL: 'public-read',
            CopySource: process.env.KEEPWELL_BUCKET + '/' + copySource,
            Bucket: process.env.KEEPWELL_BUCKET,
            Key: key
        };
        console.log("PARAMS", params)
        var s3 = new AWS.S3({
            signatureVersion: 'v4'
        });
         s3.copyObject(params, function(err, data) {
        if (err) { 
            console.log("ERR", err)
            resolve(err)
        } // an error occurred
        else      {
            console.log("DATA", err)
            resolve(data)
        };           // successful
        });
        // console.log("S3 PARAMS", params)
        // var s3 = new AWS.S3({
        //     signatureVersion: 'v4'
        // });
        // var url = s3.copyObject(params);
        // console.log('The URL is', url);
        // resolve(url);
    });
  }
