<template>
    <NuxtLayout name="404">
        <div class="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
            <div class="text-center">
                <div class="inline-flex rounded-full bg-sky-100 p-4">
                    <div class="rounded-full stroke-sky-600 bg-sky-200 p-4">
                        <svg class="w-16 h-16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <h1 class="mt-10 text-2xl font-bold text-slate-800 lg:text-[50px]">404 - PAGE NOT FOUND</h1>
                <p class="text-xs text-slate-600 mt-5 lg:text-lg">The page you are looking for doesn't exist or <br />has been
                    removed.
                </p>
                <div class="p-4">
                    <button
                        class="w-25 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        @click="reloadNuxtApp({ path: '/', ttl: 1000 })">
                        Back Home
                    </button>
                </div>
            </div>
        </div>
        <!-- <div class="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
            <div class="text-center">
                <div class="inline-flex rounded-full bg-yellow-100 p-4">
                    <div class="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
                        <svg class="w-16 h-16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <h1 class="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">404 - PAGE NOT FOUND</h1>
                <p class="text-slate-600 mt-5 lg:text-lg">The page you are looking for doesn't exist or <br />has been
                    removed.
                </p>
            </div>
        </div> -->
    </NuxtLayout></template>