<template>
    <nav
        class="flex fixed w-full items-center justify-between px-2 md:px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10 shadow-lg">
        <div class="flex items-center z-50">
            <button class="mr-2" aria-label="Open Menu" @click="drawer">
                <img src="../assets/images/drawer.gif" alt="Logout" class="h-auto w-8 mx-auto" />
            </button>
            <div class="hidden md:block h-auto w-30">
                <span class="font-bold text-2xl">MO PERURI</span>
            </div>
        </div>

        <div class="flex items-center">
            <div class="flex justify-between bg-transparent">
                <div class="flex items-center pr-2">
                    <span class="text-black font-semibold">{{ env?.toUpperCase() }}</span>
                </div>
                <div class="flex items-center mr-2">
                    <div class="w-20 h-8 rounded-full p-1 duration-300 cursor-pointer"
                        :class="env == 'development' ? 'bg-blue-100' : 'bg-blue-500'" @click="toggle">
                        <div class="bg-white w-9 h-6 rounded-full shadow-md transform duration-300"
                            :class="env == 'development' ? 'translate-x-9' : 'translate-x-0'">
                        </div>
                    </div>
                </div>
                <button title="Sure to logout ?"
                    class="flex items-center p-2 font-medium text-center bg-white rounded  hover:bg-gray-100 focus:outline-none focus:bg-gray-400"
                    @click="logoutUser">
                    <img src="../assets/images/logout.png" alt="Logout" class="h-auto w-8 mx-auto" />
                </button>
            </div>
        </div>

    </nav>
    <transition enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100"
        leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
    </transition>

    <aside
        class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 shadow-2xl"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="py-4 px-2 text-center">
            <p class="font-semibold text-lg">HI! WELCOME</p>
            <p class="border border-dashed border-black rounded-lg p-2 mt-2">{{ email }}</p>
        </div>
        <span class="flex w-full items-center border-b mt-2 mb-4">
            <img src="../assets/images/mo.png" alt="Logo" class="h-auto w-50 object-fill" />
        </span>
        <span role="button" tabindex="0" class="flex items-center p-4 hover:bg-indigo-100 hover:text-black outline-none"
            @click="navigateTo('/main/ca')" :class="currentPath == '/main/ca' ? 'bg-indigo-100' : 'bg-white'">
            <span class="mr-2">
                <img width="26" height="26" src="../assets/images/ca.png" alt="CA" />
            </span>
            <span>Certificate Authority</span>
        </span>
        <span role="button" tabindex="0" class="flex items-center p-4 hover:bg-indigo-100 hover:text-black"
            @click="navigateTo('/main/signing')" :class="currentPath == '/main/signing' ? 'bg-indigo-100' : 'bg-white'">
            <span class="mr-2">
                <img width="26" height="26" src="../assets/images/sign.png" alt="Signing" />
            </span>
            <span>Signing</span>
        </span>
        <span role="button" tabindex="0" class="flex items-center p-4 hover:bg-indigo-100 hover:text-black"
            @click="navigateTo('/main/keysign')" :class="currentPath == '/main/keysign' ? 'bg-indigo-100' : 'bg-white'">
            <span class="mr-2">
                <img width="26" height="26" src="../assets/images/backend.png" alt="Keysign" />
            </span>
            <span>Keysign</span>
        </span>
        <span role="button" tabindex="0" class="flex items-center p-4 hover:bg-indigo-100 hover:text-black"
            @click="navigateTo('/main/tmsra')" :class="currentPath == '/main/tmsra' ? 'bg-indigo-100' : 'bg-white'">
            <span class="mr-2">
                <img width="26" height="26" src="../assets/images/backend.png" alt="TMSRA" />
            </span>
            <span>TMSRA</span>
        </span>
    </aside>
</template>

<script setup lang="ts">
// @ts-ignore
import { useEnvironmentStore } from '~/store/environment'

const environmentStore = useEnvironmentStore();
const isOpen = ref(false)
const email = ref('')
const currentPath = ref('')
const isToggle = ref(false)
const env = ref('')

onMounted(() => {
    if (typeof window !== 'undefined') {

        email.value = sessionStorage?.getItem('email') || ''
        env.value = sessionStorage?.getItem('environment') || ''

        currentPath.value = window.location.pathname
    }

    env.value = environmentStore.environment || 'production'
})

const drawer = () => {
    isOpen.value = !isOpen.value
}

const logoutUser = () => {
    typeof window !== 'undefined' ? sessionStorage.clear() : null
    reloadNuxtApp({
        path: '/',
        ttl: 1000
    })
}

const toggle = () => {
    isToggle.value = !isToggle.value
    
    if (isToggle.value) {
        if (env.value == 'production') {
            environmentStore.updateEnvironment('development')
        } else {
            environmentStore.updateEnvironment('production')
        }
    } else {
        if (env.value == 'production') {
            environmentStore.updateEnvironment('development')
        } else {
            environmentStore.updateEnvironment('production')
        }
    }

    env.value = environmentStore.environment || 'production'
}

</script>