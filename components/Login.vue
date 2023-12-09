<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/images/login.png" alt="Logo Peruri Sign">

        <div class="flex items-center border-b border-cyan-500 py-2 m-4">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email" v-model="email">
        </div>
        <div class="flex items-center border-b border-cyan-500 py-2 m-4">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" v-model="password">
        </div>

        <div class="px-4">
            <button class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="(loginUser)">
            Login
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps({
        loginUser: {}
    })

    const { loginUser } = props

    const emailRef = ref('')
    const passwordRef = ref('')

    const email = toRaw(reactive(emailRef))
    const password = toRaw(reactive(passwordRef))

    defineExpose({
        email,
        password
    })

</script>