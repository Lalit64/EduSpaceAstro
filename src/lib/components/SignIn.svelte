<script>
    import { supabase } from '../supabase';

    let email;
    let password;
    let loading = false;

    const handleSignIn = async () => {
        try {
            loading = true;
            const { error } = await supabase.auth.signIn({ email, password });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            loading = true;
        }
    };

    const handleGoogle = async () => {
        try {
            loading = true;
            const { error } = await supabase.auth.signIn({ provider: 'google' });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            loading = true;
        }
    };
</script>

<main
        class="flex w-full h-screen justify-center items-center text-body dark:text-gray-300 dark:bg-gray-800"
>
    <div class="flex flex-col items-center">
        <img src="/graphics/Logo.svg" class="w-1/6" alt="logo" />
        <h1 class="text-2xl">EduSpace</h1>
        <h1 class="font-bold text-6xl mt-2">Sign In</h1>
        <form class="flex flex-col mt-5" on:submit|preventDefault={handleSignIn}>
            <div>
                Email
                <input
                        placeholder="Email"
                        type="email"
                        bind:value={email}
                        disabled={loading}
                        class="w-full p-3 pl-4 border-accent border-2 rounded-md dark:bg-gray-700"
                />
            </div>
            <div class="mt-4">
                Password
                <input
                        placeholder="Password"
                        bind:value={password}
                        disabled={loading}
                        type="password"
                        class="w-full p-3 pl-4 border-accent border-2 rounded-md mt-2 dark:bg-gray-700"
                />
            </div>
            <button
                    type="submit"
                    class="w-full mt-10 bg-accent p-3 rounded active:ring-2 active:ring-offset-accent  text-white"
            >
                Sign In
            </button>
        </form>
        <h1 class="mt-6 dark:bg-gray-800">Or Sign in With</h1>
        <button
                on:click={handleGoogle}
                class="w-full mt-6 p-3 rounded ring-2 ring-offset-accent active:bg-gray-700 dark:text-white text-body flex justify-center"
        >
            <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    class="mr-3"
                    alt=""
            />
            Google
        </button>
        <h1 class="mt-5">
            Don't have an account? <a href="/signup" class="underline">Sign Up</a>
        </h1>
    </div>
</main>
