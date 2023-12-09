<template>
  <div v-if="validating">
    <div v-if="authorized">
      <NuxtPage />
    </div>
    <div v-else>
      <Unauthorized />
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import * as CryptoJS from 'crypto-js'
import { useEnvironmentStore } from '~/store/environment'

const environmentStore = useEnvironmentStore();
const config = useRuntimeConfig();
const encKey = config.public.encKey
const authorized = ref(true)
const validating = ref(false)

onMounted(() => {

  setTimeout(() => {
    validating.value = true
  }, 1000);

  environmentStore.environment = 'production'

  if (typeof window !== 'undefined') {
    console.log(window.location.pathname)

    const urlPath = window?.location.pathname

    if (urlPath == '/login') {
      authorized.value = true
    } else {
      const email = sessionStorage.getItem('email') || '{}'
      const accessKey = sessionStorage.getItem('accessKey') || '{}'

      const decCode = CryptoJS.AES.decrypt(accessKey, encKey)
      const decString = decCode.toString(CryptoJS.enc.Utf8);

      if (decString == email) {
        authorized.value = true
        console.log('authorized', true)
      } else {
        authorized.value = false
        console.log('authorized', false)
      }
    }
  }
})
</script>