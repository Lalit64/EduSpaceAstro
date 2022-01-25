<script>
    import {fly,fade} from "svelte/transition"

    export let hidden;
    export let src;
    export let name;
</script>

{#if hidden === false}
    <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50" transition:fade>
        <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
             on:click={() => hidden = true}>
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span class="text-sm">(Esc)</span>
        </div>


        <div class="modal-container bg-white dark:bg-gray-700 dark:text-white w-1/2 mx-auto rounded-md shadow-lg z-50 overflow-y-auto"
             transition:fly={{ y: -200 }}>


            <!-- Add margin if you want to see some of the overlay behind the modal-->
            <div class="modal-content py-4 text-left px-6">
                <!--Title-->
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">{name}</p>
                    <div class="modal-close cursor-pointer z-50" on:click={() => hidden = true}>
                        <svg class="fill-current text-black dark:text-white" xmlns="http://www.w3.org/2000/svg"
                             width="18" height="18"
                             viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                </div>

                <!--Body-->

                <iframe
                        src={`https://www.youtube.com/embed/${src}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="rounded-xl w-full aspect-video"
                />

                <!--Footer-->
                <div class="flex justify-end pt-2">
                    <a rel="external" target="_blank" href="https://www.youtube.com/watch?v={src}"
                       class="px-4 bg-transparent p-3 rounded-lg text-accent hover:bg-gray-800 hover:text-accent mr-2 transition duration-300">Open
                        In YouTube</a>
                    <button class="modal-close px-4 bg-accent p-3 rounded-lg text-white hover:bg-accent hover:bg-opacity-90 transition  duration-300"
                            on:click={() => hidden = true}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    </div>

{/if}
