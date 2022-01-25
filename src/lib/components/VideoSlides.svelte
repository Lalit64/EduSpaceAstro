<script>
	import Carousel from '@beyonk/svelte-carousel';
</script>

<Carousel autoplay={9000} perPage={{ 800: 1, 500: 1 }} duration={1500} draggable={false}>
	<div class="slide-content ">
		<a href="https://youtu.be/pXDx6DjNLDU" target="_blank">
			<img
				src="https://i.ytimg.com/vi/pXDx6DjNLDU/maxresdefault.jpg"
				alt="Kitten 1"
				draggable="false"
				class="hover:scale-110 transition duration-300"
			/>
		</a>
	</div>
	<div class="slide-content">
		<a href="https://youtu.be/U7nJBFjKqAY" target="_blank">
			<img
				src="https://i.ytimg.com/vi/U7nJBFjKqAY/maxresdefault.jpg"
				alt="Kitten 1"
				draggable="false"
				class="hover:scale-110 transition duration-300"
			/>
		</a>
	</div>
	<div class="slide-content">
		<a href="https://youtu.be/cV2gBU6hKfY" target="_blank">
			<img
				src="https://i.ytimg.com/vi/cV2gBU6hKfY/maxresdefault.jpg"
				alt="Kitten 1"
				draggable="false"
				class="hover:scale-110 transition duration-300"
			/>
		</a>
	</div>
	<div class="slide-content">
		<a href="https://youtu.be/HPJKxAhLw5I" target="_blank">
			<img
				src="https://i.ytimg.com/vi/HPJKxAhLw5I/maxresdefault.jpg"
				alt="Kitten 1"
				draggable="false"
				class="hover:scale-110 transition duration-300"
			/>
		</a>
	</div>
</Carousel>

<style>
	.slide-content {
		@apply flex items-center justify-center;
		height: calc(100vh - 64px);
	}

	img {
		@apply rounded-xl;
		width: 100%;
	}
</style>
