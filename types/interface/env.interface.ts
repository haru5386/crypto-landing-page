interface EnvConfig {
    API_SECRET?: string
    public : {
      ENV?: string // 環境
      ENV_API?: string
      M_BASE_URL?: string
      BASE_URL?: string
      DOMAIN_NAME?: string
      GTM_CONTAINERID: string
      GTM_AUTH: string
      GTM_PREVIEW: string
      GTM_ENABLED: boolean
      GTM_DEBUG: boolean
    }
  }

export {
  EnvConfig
}
