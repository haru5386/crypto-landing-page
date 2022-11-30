module.exports = {
  dev: {
    MODE: 'development',
    BASE_URL: 'https://www.metacoin.is',
    M_BASE_URL: 'https://m.metacoin.is',
    ENV_API: 'https://www.metacoin.is/', // 测试服务器地址
    DOMAIN_NAME: 'metacoin.is',
    GTM_CONTAINERID: 'GTM-T9CVNRK',
    GTM_AUTH: 'k1XW7uCRgErKrguShlBjRQ',
    GTM_PREVIEW: 'env-7',
    GTM_ENABLED: true,
    GTM_DEBUG: true
  },
  uat: {
    MODE: 'uat',
    BASE_URL: 'https://www.metacoin.is',
    M_BASE_URL: 'https://m.metacoin.is',
    ENV_API: '/', // 测试服务器地址
    DOMAIN_NAME: 'metacoin.is',
    GTM_CONTAINERID: 'GTM-T9CVNRK',
    GTM_AUTH: 'k1XW7uCRgErKrguShlBjRQ',
    GTM_PREVIEW: 'env-7',
    GTM_ENABLED: true,
    GTM_DEBUG: true
  },
  production: {
    MODE: 'production',
    BASE_URL: 'https://www.aceglobal.io',
    M_BASE_URL: 'https://m.aceglobal.io',
    ENV_API: '/', // 正式服务器地址
    DOMAIN_NAME: 'aceglobal.io',
    GTM_CONTAINERID: 'GTM-T9CVNRK',
    GTM_AUTH: 'SqX6U8lWaDm5HGGHdP_F7g',
    GTM_PREVIEW: 'env-8',
    GTM_ENABLED: true,
    GTM_DEBUG: false
  }
}
