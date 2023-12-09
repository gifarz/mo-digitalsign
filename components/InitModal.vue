<template>
    <Teleport to="body">
        <div class="top-0 fixed z-50 flex justify-center w-full h-full bg-black bg-opacity-80" aria-labelledby="modal-title"
            aria-describedby="modal-body" v-if="visible">
            <div class="flex rounded-md bg-white flex-col absolute top-[20%] max-w-[500px] w-[calc(100%-2.25rem)] max-h-96">
                <main class="p-2 overflow-y-auto">
                    <div class="flex items-center border-b border-cyan-500 py-2 m-2">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Secret Key" aria-label="Secret Key" v-model="credential">
                    </div>
                </main>
                <footer class="flex flex-shrink-0 flex-wrap items-center justify-end flex-row py-2">
                    <span class="w-full text-center text-slate-600">Welcome to MO Digital Signature Portal</span>
                </footer>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">

const visible = ref(true)
const credential = ref('')
const config = useRuntimeConfig();
const userList = config.public.userList

const emit = defineEmits(['credential'])

watch([()=> credential.value], () => {

    console.log('userlist', userList.split(',').length)

    for(let i = 0; i < userList.split(',').length; i++){

        if(credential.value == userList.split(',')[i]){
            visible.value = !visible.value
            sendCredential()
            
        }
    }

})


const sendCredential = () => {
    emit('credential', credential.value)
}

</script>