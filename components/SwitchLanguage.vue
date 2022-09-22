<script lang="ts" setup>
import { availableLocales } from '../utils/lang'
const { t } = useLang()
const test = computed(() => t('test'))

const localeSetting = useState<string>('locale.setting')

</script>

<template>
  <div>
    {{ $t('test') }}
    {{ test }}
    <select
      v-model="localeSetting"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
      >
        {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>
