export const getTotalSize = async (origin, user_type, user_id, data_allocation) => {
    const AWS = require('aws-sdk');
    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    })

    const Origin = origin.split("/")[2]
    return new Promise(async (resolve, reject) => {
        var params = {
            // ACL: 'public-read',
            Bucket: process.env.KEEPWELL_BUCKET,
            // ContentType: `image/png`,
            Prefix: `${Origin}/${user_type.toLowerCase()}/${user_id}`, 
        };
        var s3 = new AWS.S3({
            signatureVersion: 'v4',
        });
        s3.listObjectsV2(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else  {
                let totalSize = 0
                data.Contents.forEach(o=>totalSize+=o.Size)
                const bytetogb = formatToGb(totalSize)
                console.log(bytetogb)
                const percentage = (bytetogb / data_allocation) * 100
                resolve({
                    allocation: `${data_allocation} GB`, 
                    total: formatSizeUnits(totalSize),
                    percentage_used: Number(percentage.toFixed(5))
                });        
            }   // successful response
        });
          
        // console.log('The URL is', url);
    
    });
}
function formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }
function formatToGb(bytes){
    bytes = (bytes / 1073741824).toFixed(10); 
    return bytes;
}