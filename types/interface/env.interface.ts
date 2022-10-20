interface EnvConfig {
    API_SECRET?: string
    public : {
      ENV?: string // 環境
      ENV_API?: string
      BASE_URL?: string
      DOMAIN_NAME?: string
    }
  }

export {
  EnvConfig
}
