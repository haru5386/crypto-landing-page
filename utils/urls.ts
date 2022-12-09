
export function getURLs () {
  const localeSetting = useState<string>('locale.setting')
  const lang = localeSetting.value
  const isProduction = process.env.NODE_ENV === 'production'
  return {
    login: isProduction ? `/${lang}/login` : `/ex/${lang}/login`,
    signUp: isProduction ? `/${lang}/register` : `/ex/${lang}/register`,
    // 幣幣交易
    trade: isProduction ? `/${lang}/trade` : `/ex/${lang}/trade`,
    // c2c交易
    c2c: `/otc/${lang}`,
    // 訂單
    orders: {
      // 幣幣訂單
      trade: isProduction ? `/${lang}/order/exchangeOrder` : `/co/${lang}/order/exchangeOrder`,
      // c2c訂單
      c2c: isProduction ? `/${lang}/order/otcOrder` : `/co/${lang}/order/otcOrder`,
      // 合約訂單
      co: isProduction ? `/${lang}/order/coOrder` : `/co/${lang}/order/coOrder`
    },
    // 資產
    assets: {
      // 幣幣資產
      trade: isProduction ? `/${lang}/assets/exchangeAccount` : `/co/${lang}/assets/exchangeAccount`,
      // c2c資產
      c2c: isProduction ? `/${lang}/assets/otcAccount` : `/co/${lang}/assets/otcAccount`,
      // 合約資產
      co: isProduction ? `/${lang}/assets/coAccount` : `/co/${lang}/assets/coAccount`
    },
    AGET: 'https://aget.aceglobal.io/'
  }
}
