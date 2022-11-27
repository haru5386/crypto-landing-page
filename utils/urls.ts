
export function getURLs () {
  const localeSetting = useState<string>('locale.setting')
  const lang = localeSetting.value
  return {
    login: `/ex/${lang}/login`,
    signUp: `/ex/${lang}/register`,
    // 幣幣交易
    trade: `/ex/${lang}/trade`,
    // c2c交易
    c2c: `/otc/${lang}`,
    // 訂單
    orders: {
      // 幣幣訂單
      trade: `/co/${lang}/order/exchangeOrder`,
      // c2c訂單
      c2c: `/co/${lang}/order/otcOrder`,
      // 合約訂單
      co: `/co/${lang}/trade/order/coOrder`
    },
    // 資產
    assets: {
      // 幣幣資產
      trade: `/co/${lang}/assets/exchangeOrder`,
      // c2c資產
      c2c: `/co/${lang}/assets/otcAccount`,
      // 合約資產
      co: `/co/${lang}/trade/assets/coAccount`
    },
    AGET: 'https://aget.aceglobal.io/'
  }
}
