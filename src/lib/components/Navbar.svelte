<script>
    import {supabase} from '../supabase';
    import {fly} from "svelte/transition"

    let loading = false;

    async function signOut() {
        try {
            loading = true;
            let {error} = await supabase.auth.signOut();
            if (error) throw error;
        } catch (error) {
            return;
        } finally {
            loading = false;
            location.replace('/');
        }
    }

    export let home;
    export let about;
    export let action;

    let sidebar = false
</script>

<div class="w-full sticky top-0 z-50 backdrop-blur bg-white dark:bg-gray-800 dark:text-white text-body">
    <div class="nav w-full sticky h-16 top-0 z-50 flex justify-center shadow-md z-50">
        <div class="flex items-center justify-between w-full md:w-1/2 min-w-[0px] px-6 md:px-0 z-50">
            <div class="h-full md:w-1/2 flex items-center justify-between dark:text-white text-body">
                <a class="font-bold flex text-xl" href="/">
                    <img src="/graphics/Logo.svg" alt="" class="w-7 mr-2"/> EduSpace
                </a>
            </div>
            <button class="block md:hidden h-16 text-body dark:text-white" on:click={() => {
                sidebar = !sidebar
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block md:hidden" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            <div class="text-body dark:text-white hidden md:block">
                <div class="flex items-center justify-center">
                    <div class="m-3">
                        <a href="/" class="relative active:text-accent hover:scale-110" class:active={home}>Home</a>
                    </div>
                    <div class="m-3">
                        <a href="/about" class="relative active:text-accent hover:scale-110" class:active={about}
                        >About</a
                        >
                    </div>
                    <div class="m-3">
                        <a href="/action" class="relative active:text-accent hover:scale-110" class:active={action}
                        >Take Action</a
                        >
                    </div>
                    <a
                            href="https://github.com/Lalit64/EduSpaceFinal"
                            class="dark:text-white text-body active:text-accent mx-2 hover:scale-110 transition-transform duration-500"
                    >
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                            />
                        </svg>
                    </a>
                    <button
                            on:click={signOut}
                            disabled={loading}
                            class="ring-accent ring-2 rounded p-2 m-3 px-4 hover:bg-accent hover:text-white dark:active:bg-gray-700 active:bg-gray-300 transition duration-500"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </div>
    {#if sidebar}
        <div class="block md:hidden">
            <div class="nav-res fixed top-16 right-0 w-4/5 p-8 dark:bg-gray-900 bg-gray-200 transition duration-500 z-50 flex flex-col items-center"
                 transition:fly={{ x: 500 }}>
                <div class="w-full flex flex-col">
                    <div class="m-3">
                        <a href="/" class="relative active:text-accent" class:active={home}>Home</a>
                    </div>
                    <div class="m-3">
                        <a href="/about" class="relative active:text-accent" class:active={about}
                        >About</a
                        >
                    </div>
                    <div class="m-3">
                        <a href="/action" class="relative active:text-accent" class:active={action}
                        >Take Action</a
                        >
                    </div>
                </div>
                <div class="flex w-full">
                    <a
                            href="https://github.com/Lalit64/EduSpaceFinal"
                            class="ring-accent ring-2 rounded p-2 m-3  w-1/2 px-4 flex items-center justify-center hover:bg-accent hover:text-white dark:active:bg-gray-700 active:bg-gray-300 transition duration-500"
                    >
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                            />
                        </svg>
                    </a>
                    <button
                            on:click={signOut}
                            disabled={loading}
                            class="ring-accent ring-2 rounded p-2 m-3  w-1/2 px-4 hover:bg-accent hover:text-white dark:active:bg-gray-700 active:bg-gray-300 transition duration-500"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    {/if}
</div>


<style>
    .active::before {
        @apply bg-accent rounded-full absolute w-full h-1/6;
        content: '';
        left: 0;
        top: 1.7rem;
    }

    .relative:hover:after {
        @apply bg-accent rounded-full absolute w-full h-1/6;
        content: '';
        left: 0;
        top: 1.7rem;
    }

    .relative {
        border: none;
        position: relative;
    }

    .relative:hover {
        border: none;
    }

    .relative::after {
        @apply bg-accent rounded-full absolute w-full h-1/6;
        content: '';
        position: absolute;
        width: 0px;
        left: 50%;
        top: 1.7rem;
        transition: all ease-in-out .2s;
    }

    .relative:hover::after {
        width: 100%;
        left: 0;
    }

    a {
        white-space: nowrap;
    }

    button {
        white-space: nowrap;
    }

    .nav-res {
        height: calc(100vh - 64px);
    }
</style>
