<script>
    import {supabase} from '../supabase';
    import SignIn from './SignIn.svelte';
    import {user} from '../sessionStore';
    import Navbar from "./Navbar.svelte";
    import Explanation from "./Explanation.svelte";
    import Trending from "./Trending.svelte";
    import {onMount} from "svelte";
    import {Svrollbar, Svroller} from 'svrollbar'

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user);
    });

    let isContentVisible = false

    onMount(() => {
        isContentVisible = true
    })

</script>

{#if isContentVisible}
    <div class="flex items-center flex-col dark:bg-gray-800">

        {#if $user}
            <Svroller width="100vw" height="100vh" hideAfter={5000}>
                <Navbar home={true} action={false} about={false}/>
                <main class="flex flex-col items-center w-screen h-auto dark:bg-gray-800">
                    <Trending/>
                    <main class="h-screen w-1/2 dark:bg-gray-800">
                        <Explanation/>
                    </main>
                </main>
            </Svroller>

        {:else}
            <SignIn/>
        {/if}
    </div>
{/if}

<style>
    * {
        scrollbar-width: none;
    }

    div {
        height: 100vh;
    }

    .w-screen {
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
