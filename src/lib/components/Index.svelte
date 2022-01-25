<script>
    import { supabase } from '../supabase';
    import SignIn from './SignIn.svelte';
    import { user } from '../sessionStore';
    import Navbar from "./Navbar.svelte";
    import Explanation from "./Explanation.svelte";
    import VideoSlides from "./VideoSlides.svelte";

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user);
    });
</script>

<div class="flex items-center flex-col dark:bg-gray-800">
    {#if $user}
        <main class="flex flex-col items-center w-screen h-auto dark:bg-gray-800">
            <Navbar />
            <VideoSlides />
            <main class="h-screen w-1/2 dark:bg-gray-800">
                <Explanation />
            </main>
        </main>
    {:else}
        <SignIn />

    {/if}
</div>

<style>
    div {
        height: 100vh;
    }

    .w-screen {
        overflow-x: hidden;
    }
</style>
