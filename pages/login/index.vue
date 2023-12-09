<template>
    <InitModal @credential="handleCredentialEvent"/>
    <div class="h-screen flex justify-center items-center bg-[url('/assets/images/bg_login3.jpg')] bg-cover">
        <div class="h-screen w-full py-4 sm:py-6 sm:h-auto sm:max-w-sm rounded overflow-hidden shadow-lg bg-white p-5">
            <img class="w-full" src="../../assets/images/login.png" alt="Logo Peruri Sign">
            <div class="py-6 text-center">
                <span class="text-slate-600" id="typingEffect"></span>
            </div>
            <div class="flex items-center border-b border-cyan-500 py-2 m-4">
                <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="Email" aria-label="Email" v-model="email" disabled>
            </div>
            <div class="flex items-center border-b border-cyan-500 py-2 m-4">
                <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="password" placeholder="Password" aria-label="Password" v-model="password">
            </div>

            <div class="px-4">
                <button
                    class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click="loginUser" :disabled="isLoading">
                    <span v-if="isLoading">Loading...</span>
                    <span v-else>Login</span>
                </button>
            </div>
        </div>
    </div>

    <Modal :visibility="showModal" :jsonResponse="jsonResponse" @close-modal="handleCloseModal" />
</template>
    
<script setup lang="ts">

import { ref } from 'vue'
// @ts-ignore
import * as CryptoJS from 'crypto-js'
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

const config = useRuntimeConfig();
const encKey = config.public.encKey

const email = ref('')
const password = ref('')

const { $api } = useNuxtApp();

const showModal = ref(false)
const isLoading = ref(false)
const jsonResponse = ref('')

onMounted(() => {

    const typingEffect = document.getElementById('typingEffect')
    const customNodeCreator = function(character: any) {
      return document.createTextNode(character);
    }
    
    const typewriter = new Typewriter(typingEffect, {
        loop: true,
        delay: 75,
        onCreateTextNode: customNodeCreator,
    });
    
    typewriter
        .typeString('Please use credential of Telkomsign')
        .pauseFor(300)
        .start();
})

const loginUser = async () => {
    isLoading.value = !isLoading.value
    console.log('masuk', $api)

    await $api.login.loginUser(email.value, password.value)
        .then((res: any) => {

            let resultCode: any = res.data.value?.resultCode
            
            let encCode = CryptoJS.AES.encrypt(email.value, encKey).toString();

            showModal.value = !showModal.value
            isLoading.value = !isLoading.value
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            sessionStorage.clear()

            if (resultCode == '0') {

                sessionStorage.setItem('email', email.value)
                sessionStorage.setItem('accessKey', encCode)

                setTimeout(() => {
                    navigateTo('/main/ca')
                        , 3000
                });

            }
        })
        .catch((err: any) => console.log(err));
}

const handleCloseModal = () => {
    showModal.value = !showModal.value
}

const handleCredentialEvent =(value: any) => {
    email.value = value
}
</script>