<script lang="ts" setup>
import { ID_INJECTION_KEY } from 'element-plus'
import { InitApp } from './utils/initApp'

// 語言包初始化
InitApp()
const locale = useState<string>('locale.setting')

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0
})
</script>

<template>
  <Html :lang="locale">
    <Body>
      <NuxtPage />
    </Body>
  </Html>
</template>
