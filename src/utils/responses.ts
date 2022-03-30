export const handleSuccess = (body: any) => {
  return {
    statusCode: 200,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleRedirect = (url: any) => {
  return {
    statusCode: 302,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache',
      Location: url
    },
    body: JSON.stringify({url}, null, 2)
  }
}
export const handleNotConfirmed = (body: any) => {
  return {
    statusCode: 307,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleCreated = (body: any) => {
  return {
    statusCode: 201,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleNoContent = (body: any) => {
  return {
    statusCode: 204,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleNotModified = (body: any) => {
  return {
    statusCode: 304,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}

export const handleError = (body: any) => {
  return {
    statusCode: 400,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleUnauthorized = (body: any) => {
  return {
    statusCode: 401,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleUnauthorizedOrigin = () => {
  return {
    statusCode: 401,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify({
      code: "CORS_ORIGIN",
      message: "Cross-Origin Resource Sharing (CORS)"
    }, null, 2)
  }
}
export const handleForbidden = (body: any) => {
  return {
    statusCode: 403,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleNotFound =(body: any) => {
  return {
    statusCode: 404,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(
      body,
      null,
      2
    )
  }
}
export const handleNotAllowed = (body: any) => {
  return {
    statusCode: 405,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleConflict = (body: any) => {
  return {
    statusCode: 409,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleGone = (body: any) => {
  return {
    statusCode: 410,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleUnsupported = (body: any) => {
  return {
    statusCode: 415,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handleUnprocessable = (body: any) => {
  return {
    statusCode: 422,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify({
      code: "FIELDERROR",
      message: "Please check all the fields",
      data:body
    }, null, 2)
  }
}
export const handleTooMany = (body: any) => {
  return {
    statusCode: 429,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(body, null, 2)
  }
}
export const handlePrismaError = (body: any) => {
  console.log(`PRISMA_ERROR: ${body}`)
  return {
    statusCode: 400,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(
      {
        code: 'PrismaError',
        name: 'PrismaError',
        message: 'Something went wrong'
      },
      null,
      2
    )
  }
}
export const handleRequiredBody = () => {
  return {
    statusCode: 422,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubdomains; preload',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Permissions-Policy': 'payment=("http://*.dragonpay.ph/Pay.aspx")',
      'Content-Security-Policy': "frame-src 'self'; frame-ancestors 'self'; object-src 'none'",
      'X-Permitted-Cross-Domain-Policies': "none",
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Cache-control': 'no-store',
      Pragma: 'no-cache'
    },
    body: JSON.stringify(
      {
        code: 'BodyException',
        name: 'BodyException',
        message: 'Request body is required'
      },
      null,
      2
    )
  }
}