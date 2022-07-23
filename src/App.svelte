<script>
	import Head from "./components/Head.svelte";
	import Link from "./components/Link.svelte";
</script>

<Head />
<main>
	<div>
		<code>
			mariodev@m5o.slmail.me
			<br />
			<br />
			<Link
				link="https://twitter.com/Mario_5O"
				name="Twitter"
				emoji="🐦"
			/>
			<Link
				link="https://github.com/Mario-SO/"
				name="Github"
				emoji="👨‍💻"
			/>
			<Link link="" name="Projects" emoji="🔥" />
			📝 <a href="./assets/cv.pdf" download>CV</a>
			<br />
		</code>
	</div>
</main>

<style>
	:global(body) {
		font-size: 16px;
		line-height: 26px;
		letter-spacing: 0.7px;
		background-color: black;
	}

	main {
		/* center content */
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}

	div {
		color: #40ff00;
		margin: auto;
	}

	a {
        color: #ffffff;
    }
</style>
