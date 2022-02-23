<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import Modal from './Modal.svelte';

  let videos = [];
  const getPosts = () => {
    axios.get('https://eduspace-gxp.herokuapp.com').then((res) => {
      videos = res.data.video;
      console.log(videos);
    });
  };

  onMount(getPosts);

  let hidden = true;
  let src;
  let name;
</script>

<Modal bind:hidden {src} {name} />

<main class="w-full flex flex-col">
  <h1 class="text-3xl font-bold dark:text-white text-body">
    About These SDG's
  </h1>
  <!--	prettier-ignore-->
  <div class="flex p-3 h-full w-full flex-col">
        {#each videos as video}
            <div class="m-6">
                <h1 class="dark:text-white font-bold text-xl mb-2">
                    {video.name}
                </h1>
                {#each video.source as source}
                    <button class="w-1/4 m-2 hover:scale-110 transition duration-300" on:click={() => {
							src = source;
                            name = video.name;
							hidden = !hidden
					}}>
                        <img class="w-full rounded-lg" src={`https://i.ytimg.com/vi/${source}/maxresdefault.jpg`}>
                    </button>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style>
  main {
    height: calc(100% - 64px);
  }

  @media (max-width: 770px) {
    main {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .absolute {
    overflow: hidden;
  }
</style>
