<template>
    <Modal :visibility="showModal" :jsonResponse="jsonResponse" @close-modal="handleCloseModal" />
    <Navbar />
    <div class="pt-20 p-4">
        <div class="grid md:grid-cols-2 gap-4">

            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Check Certificate
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
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
                            @click="(checkCertificate)" :disabled="isLoading[0]">
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
                        Renewal Certificate
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
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
                            @click="(renewalCertificate)" :disabled="isLoading[1]">
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
                        Finish Reg CA By Username
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
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
                            @click="(finishRegCaByUsername)" :disabled="isLoading[2]">
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
                        Fixing Certificate
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Username" aria-label="Username" v-model="username[1]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(fixingCertificate)" :disabled="isLoading[3]">
                            <span v-if="isLoading[3]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Fixing Renewal Certificate
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Username" aria-label="Username" v-model="username[2]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(fixingRenewalCertificate)" :disabled="isLoading[4]">
                            <span v-if="isLoading[4]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Provision Digital Certificate
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Email" aria-label="Email" v-model="email[2]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[2]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(provisionDigitalCertificate)" :disabled="isLoading[5]">
                            <span v-if="isLoading[5]">Loading...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div>
                </details>
            </div>
            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Upload KTP
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </summary>
                    <div class="text-gray-500">
                        <div class="mt-2 mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Email" aria-label="Email" v-model="email[3]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[3]">
                        </div>
                        <div class="mb-4 py-2 border-b border-blue-500">
                            <input
                                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-black transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-black file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:shadow-te-primary focus:outline-none dark:border-blue-500 dark:text-black dark:file:bg-blue-500 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file" placeholder="File KTP" aria-label="File KTP" accept="image/png,image/jpeg"
                                v-on:change="onChangeFileUpload($event)">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(uploadKtp)" :disabled="isLoading[6]">
                            <span v-if="isLoading[6]">Loading...</span>
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
const usernameParams: string[] = ['']
const ktpParams: string[] = ['']
const isLoadingParams: boolean[] = [false]

const email = ref(emailParams)
const systemId = ref(systemIdParams)
const username = ref(usernameParams)
const ktp = ref(ktpParams)
const isLoading = ref(isLoadingParams)
const showModal = ref(false)
const jsonResponse = ref('')

email.value = toRaw(email.value)
systemId.value = toRaw(systemId.value)

const checkCertificate = async () => {

    isLoading.value[0] = !isLoading.value[0]


    await $api.checkCertificate.checkCertificate(email.value[0], systemId.value[0])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = err
        });
}

const renewalCertificate = async () => {

    isLoading.value[1] = !isLoading.value[1]


    await $api.renewalCertificate.renewalCertificate(email.value[1], systemId.value[1])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = err
        });
}

const finishRegCaByUsername = async () => {

    isLoading.value[2] = !isLoading.value[2]

    await $api.finishRegCaByUsername.finishRegCaByUsername(username.value[0])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            username.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[2] = !isLoading.value[2]
            jsonResponse.value = err
        });
}

const fixingCertificate = async () => {

    isLoading.value[3] = !isLoading.value[3]

    await $api.fixingCertificate.fixingCertificate(username.value[1])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[3] = !isLoading.value[3]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            username.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[3] = !isLoading.value[3]
            jsonResponse.value = err
        });
}

const fixingRenewalCertificate = async () => {

    isLoading.value[4] = !isLoading.value[4]

    await $api.fixingRenewalCertificate.fixingRenewalCertificate(username.value[2])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[4] = !isLoading.value[4]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            username.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[4] = !isLoading.value[4]
            jsonResponse.value = err
        });
}

const provisionDigitalCertificate = async () => {

    isLoading.value[5] = !isLoading.value[5]

    await $api.provisionDigitalCertificate.provisionDigitalCertificate(email.value[2], systemId.value[2])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[5] = !isLoading.value[5]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[5] = !isLoading.value[5]
            jsonResponse.value = err
        });
}

const uploadKtp = async () => {

    isLoading.value[6] = !isLoading.value[6]

    await $api.uploadKTP.uploadKtp(email.value[3], systemId.value[3], ktp.value[0])
        .then((res: any) => {

            // console.log('response', toRaw(res.data.value))
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[6] = !isLoading.value[6]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            email.value = ['']
            systemId.value = ['']
            ktp.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[6] = !isLoading.value[6]
            jsonResponse.value = err
        });
}

const handleCloseModal = () => {
    showModal.value = !showModal.value
}

const onChangeFileUpload = (e: any) => {

    let reader = new FileReader()
    let base64 = ''
    reader.readAsDataURL(e.target.files[0])

    reader.onload = function () {

        base64 = reader.result as string

        ktp.value[0] = base64.split(',')[1] //BASE64 KTP
    }
    reader.onerror = function (error) {
        // console.log('Error: ', error);
    };
}


</script>