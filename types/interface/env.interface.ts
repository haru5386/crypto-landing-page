interface EnvConfig {
    API_SECRET?: string
    public : {
      ENV?: string // 環境
      ENV_API?: string
    }
  }

export {
  EnvConfig
}
