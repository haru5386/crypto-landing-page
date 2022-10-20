module.exports = {
  dev: {
    MODE: 'development',
    BASE_URL: 'https://www.metacoin.is',
    M_BASE_URL: 'https://m.metacoin.is',
    ENV_API: 'https://www.metacoin.is/', // 测试服务器地址
    DOMAIN_NAME: 'metacoin.is'
  },
  uat: {
    MODE: 'uat',
    BASE_URL: 'https://www.metacoin.is',
    M_BASE_URL: 'https://m.metacoin.is',
    ENV_API: 'https://www.metacoin.is/', // 测试服务器地址
    DOMAIN_NAME: 'metacoin.is'
  },
  production: {
    MODE: 'production',
    BASE_URL: 'https://www.aceglobal.io',
    M_BASE_URL: 'https://m.aceglobal.io',
    ENV_API: 'https://www.aceglobal.io/', // 正式服务器地址
    DOMAIN_NAME: 'aceglobal.io'
  }
}
