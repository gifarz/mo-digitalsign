<template>
    <Modal :visibility="showModal" :jsonResponse="jsonResponse" @close-modal="handleCloseModal" />
    <Navbar />
    <div class="pt-20 p-4">

        <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
            <summary
                class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                Send Notification Email
                <div class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </summary>
            <div class="text-gray-500">
                <div class="grid md:grid-cols-2 gap-2 mt-2">
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Email" aria-label="Email" v-model="email[0]">
                    </div>
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="System ID" aria-label="System ID" v-model="systemId[0]">
                    </div>
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="number" placeholder="Order ID" aria-label="Order ID" v-model="orderId[1]">
                    </div>
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Notif Type" aria-label="Notif Type" v-model="notifType[0]">
                    </div>
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Order Type" aria-label="Order Type" v-model="orderType[0]">
                    </div>
                    <div class="mb-4 py-2 border-b border-blue-500">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Remark" aria-label="Remark" v-model="remark[0]">
                    </div>
                </div>
                <button
                    class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click="(sendNotificationEmail)" :disabled="isLoading[0]">
                    <span v-if="isLoading[0]">Loading...</span>
                    <span v-else>Submit</span>
                </button>
            </div>
        </details>

        <div class="grid md:grid-cols-2 gap-2 mt-4">

            <div class="flex flex-col">
                <details class="group border rounded-xl px-4 py-4 border-slate-300 shadow-md">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900">
                        Download Document
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
                                type="number" placeholder="Order ID" aria-label="Order ID" v-model="orderId[0]">
                        </div>
                        <button
                            class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            @click="(downloadDocument)" :disabled="isLoading[0]">
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

const orderIdParams: string[] = ['']
const emailParams: string[] = ['']
const systemIdParams: string[] = ['']
const notifTypeParams: string[] = ['']
const orderTypeParams: string[] = ['']
const remarkParams: string[] = ['']
const isLoadingParams: boolean[] = [false]

const orderId = ref(orderIdParams)
const email = ref(emailParams)
const systemId = ref(systemIdParams)
const notifType = ref(notifTypeParams)
const orderType = ref(orderTypeParams)
const remark = ref(remarkParams)
const isLoading = ref(isLoadingParams)
const showModal = ref(false)
const jsonResponse = ref('')

orderId.value = toRaw(orderId.value)

const downloadDocument = async () => {

    isLoading.value[0] = !isLoading.value[0]

    await $api.downloadDocument.downloadDocument(orderId.value[0].toString())
        .then((res: any) => {

            toRaw(res.data.value).data.orderId = orderId.value[0].toString()
            // console.log('response', toRaw(res.data.value))
            // console.log('response', toRaw(res.data.value).data.base64Document)
            let resultCode: any = res.data.value?.resultCode
            let resultDesc: any = res.data.value?.resultDesc

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            orderId.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[0] = !isLoading.value[0]
            // jsonResponse.value = err
        });
}

const sendNotificationEmail = async () => {

    isLoading.value[1] = !isLoading.value[1]

    await $api.sendNotificationEmail.sendNotificationEmail(
        email.value[0],
        systemId.value[0],
        orderId.value[1].toString(),
        notifType.value[0],
        orderType.value[0],
        remark.value[0]
    )
        .then((res: any) => {

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            jsonResponse.value = JSON.stringify(toRaw(res.data.value))

            orderId.value = ['']
        })
        .catch((err: any) => {
            // console.log(err)

            showModal.value = !showModal.value
            isLoading.value[1] = !isLoading.value[1]
            // jsonResponse.value = err
        });
}


const handleCloseModal = () => {
    showModal.value = !showModal.value
}


</script>