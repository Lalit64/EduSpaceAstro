<script>
    let videos = ["pXDx6DjNLDU", "U7nJBFjKqAY", "cV2gBU6hKfY", "HPJKxAhLw5I"]
</script>

<div class="grid overflow-hidden grid-cols-2 grid-rows-2 gap-2 w-1/2 p-6">
    {#each videos as video}
        <div class="box hover:scale-110 transition duration-300 m-5">
            <a href="https://youtu.be/{video}" target="_blank">
                <img
                        src="https://i.ytimg.com/vi/{video}/maxresdefault.jpg"
                        alt="Kitten 1"
                        draggable="false"
                        class=" rounded-lg"
                />
            </a>
        </div>
    {/each}
</div>
