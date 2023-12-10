<template>
    <Teleport to="body">
        <div class="top-0 fixed z-50 flex justify-center w-full h-full bg-black bg-opacity-60" aria-labelledby="modal-title"
            aria-describedby="modal-body" v-if="visible">
            <div class="flex rounded-2xl bg-white flex-col absolute top-[20%] max-w-[500px] w-[calc(100%-2.25rem)] max-h-96">
                <main class="p-4 overflow-y-auto">
                    <div class="flex justify-center items-center mb-4">
                        <img v-if="jsonResponse.resultDesc == 'Success'" width="96" height="96" src="../assets/images/success.svg"
                            alt="Success" />
                        <img v-if="jsonResponse.resultDesc != 'Success'" width="96" height="96" src="../assets/images/failed.svg"
                            alt="Failed" />
                    </div>
                    <hr>
                    <div class="py-4">
                        <span>resultCode : {{jsonResponse.lastError ? '99' : jsonResponse.resultCode}}</span><br>
                        <span>resultDesc  : {{jsonResponse.lastError ? jsonResponse.lastError.error : jsonResponse.resultDesc}}</span><br>
                        <div v-if="jsonResponse.data?.base64Document == null">
                            <span v-if="jsonResponse.data">
                                data &nbsp;:
                                <pre>{{JSON.stringify(jsonResponse.data, undefined, 4)}}</pre>
                            </span>
                        </div>
                    </div>

                    <!-- <table class="w-full mt-5">
                        <tbody>
                            <tr>
                                <td class="w-1/2 text-right">resultCode :</td>
                                <td class="w-1/2">{{jsonResponse.lastError ? '99' : jsonResponse.resultCode}}</td>
                            </tr>
                            <tr>
                                <td class="w-1/2 text-right">resultDesc &nbsp;:</td>
                                <td class="w-1/2">{{jsonResponse.lastError ? jsonResponse.lastError.error : jsonResponse.resultDesc}}</td>
                            </tr>
                            <tr v-if="jsonResponse.data">
                                <td class="w-1/2 text-right">data &nbsp;:</td>
                                <td class="w-1/2">{{jsonResponse.data}}</td>
                            </tr>
                        </tbody>
                    </table> -->
                </main>
                <footer class="flex flex-shrink-0 flex-wrap items-center justify-end flex-row p-2 gap-1">
                    <div class="flex mr-2" :class="jsonResponse.data?.base64Document ? 'block':'hidden'">
                        <a 
                        class="flex text-blue-700 font-semibold"  
                        :download="'orderid_'+jsonResponse.data?.orderId+'.pdf'" 
                        :href=base64String
                        >
                        <img class="h-5 pt-1.5 pr-px" src="../assets/images/download.gif" alt="Download" />
                        Download
                        </a>
                    </div>
                    <button type="button"
                        class="flex items-center justify-center px-4 font-medium bg-gray-200 text-blue-700 h-9 rounded-md rounded md hover:bg-gray-300 transition-all duration-300"
                        data-dismiss="modal" @click="closeModal">
                        <span class="flex items-center justify-center space-x-2">Close</span>
                    </button>
                </footer>

            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
    visibility: {
        type: Boolean,
        required: true
    },
    jsonResponse: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['close-modal'])

const visible = ref(false)
const stringResponse = ref('')
const base64String = ref('')
const jsonResponse: any = ref({})

watch([() => props.visibility, () => props.jsonResponse], ([newVisibility, newJsonResponse]) => {
    visible.value = newVisibility
    stringResponse.value = newJsonResponse
    
    jsonResponse.value = JSON.parse(stringResponse.value)

    base64String.value = "data:application/pdf;base64," + toRaw(jsonResponse.value).data?.base64Document
})


const closeModal = () => {
    emit('close-modal')
}

</script>