<script>
	import Head from "./components/Head.svelte";
	import Link from "./components/Link.svelte";
</script>

<Head />
<main>
	<code>
		mariodev@m5o.slmail.me
		<br />
		<br />
		<Link link="https://twitter.com/Mario_5O" name="Twitter" emoji="🐦" />
		<Link link="https://github.com/Mario-SO/" name="Github" emoji="👨‍💻" />
		<Link link="" name="Projects" emoji="🔥" />
		<Link link="https://github.com/Mario-SO/Portfolio/blob/main/resources/cv.pdf" name="CV" emoji="📝" />
		<br />
	</code>
</main>

<style>
	:global(body) {
		margin:0;
		font-size: 16px;
		line-height: 26px;
		letter-spacing: 0.7px;
		background-color: black;
	}

	main {
		/* center content */
		color: #40ff00;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
/* 
	a {
		color: #ffffff;
	} */
</style>
