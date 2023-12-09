<template>
    <Modal :visibility="showModal" :jsonResponse="jsonResponse" @close-modal="handleCloseModal" />
    <Navbar />
    <div class="pt-20 p-4">
        <div class="grid md:grid-cols-2 gap-4">

            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Request Keygen
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
                            @click="(requestKeygen)" :disabled="isLoading[0]">
                            <span v-if="isLoading[0]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Get Certificate Chain
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
                                type="text" placeholder="Email" aria-label="Email" v-model="email[1]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[1]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(getCertificateChain)" :disabled="isLoading[1]">
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
                        Inquiry Certificate
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
                                type="text" placeholder="Key ID" aria-label="Key ID" v-model="keyId[0]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[2]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(inquiryCertificate)" :disabled="isLoading[2]">
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
                        Inquiry Csr
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
                                type="text" placeholder="Key ID" aria-label="Key ID" v-model="keyId[1]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[3]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(inquiryCsr)" :disabled="isLoading[3]">
                            <span v-if="isLoading[3]">Loading...</span>
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
const keyIdParams: string[] = ['']
const isLoadingParams: boolean[] = [false]

const email = ref(emailParams)
const systemId = ref(systemIdParams)
const keyId = ref(keyIdParams)
const isLoading = ref(isLoadingParams)
const showModal = ref(false)
const jsonResponse = ref('')

email.value = toRaw(email.value)
systemId.value = toRaw(systemId.value)

const requestKeygen = async () => {

    isLoading.value[0] = !isLoading.value[0]

    await $api.requestKeygen.requestKeygen(email.value[0], systemId.value[0])
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
            console.log('err', err)

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = err
        });
}

const getCertificateChain = async () => {

    isLoading.value[1] = !isLoading.value[1]

    await $api.getCertificateChain.getCertificateChain(email.value[1], systemId.value[1])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            console.log('err', err)

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = err
        });
}

const inquiryCertificate = async () => {

    isLoading.value[2] = !isLoading.value[2]

    await $api.inquiryCertificate.inquiryCertificate(keyId.value[0], systemId.value[2])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            console.log('err', err)

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = err
        });
}

const inquiryCsr = async () => {

    isLoading.value[3] = !isLoading.value[3]

    await $api.inquiryCsr.inquiryCsr(keyId.value[1], systemId.value[3])
        .then((res: any) => {

            console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[3] = !isLoading.value[3]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            console.log('err', err)

            showModal.value = !showModal.value
            isLoading.value[3] = !isLoading.value[3]
            jsonResponse.value = err
        });
}

const handleCloseModal = () => {
    showModal.value = !showModal.value
}


</script>