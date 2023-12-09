<template>
    <Modal :visibility="showModal" :jsonResponse="jsonResponse" @close-modal="handleCloseModal" />
    <Navbar />
    <div class="pt-20 p-4">
        <div class="grid md:grid-cols-2 gap-4">

            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Retrieve Cert Info
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="CertReqCode" aria-label="CertReqCode" v-model="certReqCode[0]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(retrieveCertInfo)" :disabled="isLoading[1]">
                            <span v-if="isLoading[1]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Retrieve User Info
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Username" aria-label="Username" v-model="username[0]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(retrieveUserInfo)" :disabled="isLoading[2]">
                            <span v-if="isLoading[2]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Add User Enroll
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Email" aria-label="Email" v-model="email[0]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[0]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(addUserEnroll)" :disabled="isLoading[0]">
                            <span v-if="isLoading[0]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

const { $api } = useNuxtApp() as any

const emailParams: string[] = ['']
const systemIdParams: string[] = ['']
const certReqCodeParams: string[] = ['']
const usernameParams: string[] = ['']
const isLoadingParams: boolean[] = [false]

const email = ref(emailParams)
const systemId = ref(systemIdParams)
const certReqCode = ref(certReqCodeParams)
const username = ref(usernameParams)
const isLoading = ref(isLoadingParams)
const showModal = ref(false)
const jsonResponse = ref('')

email.value = toRaw(email.value)
systemId.value = toRaw(systemId.value)

const addUserEnroll = async () => {

    isLoading.value[0] = !isLoading.value[0]
    console.log('$api', $api)

    await $api.addUserEnroll.addUserEnroll(email.value[0], systemId.value[0])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            console.log(err)

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = err
        });
}

const retrieveCertInfo = async () => {

    isLoading.value[1] = !isLoading.value[1]
    console.log('$api', $api)

    await $api.retrieveCertInfo.retrieveCertInfo(certReqCode.value[0])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            certReqCode.value = ['']
        })
        .catch((err: any) => {
            console.log(err)

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = err
        });
}

const retrieveUserInfo = async () => {

    isLoading.value[2] = !isLoading.value[2]
    console.log('$api', $api)

    await $api.retrieveUserInfo.retrieveUserInfo(username.value[0])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            username.value = ['']
        })
        .catch((err: any) => {
            console.log(err)

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = err
        });
}

const handleCloseModal = () => {
    showModal.value = !showModal.value
}


</script>