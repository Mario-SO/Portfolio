<script>
	import Head from "./components/Head.svelte";
	import Link from "./components/Link.svelte";
	import AnimatedLink from "./components/AnimatedLink.svelte";
</script>

<Head />
<main>
	<code>
		mariodev@m5o.slmail.me
		<br />
		<br />
		<Link link="https://twitter.com/Mario_5O" name="Twitter" emoji="🐦" />
		<Link link="https://github.com/Mario-SO/" name="Github" emoji="👨‍💻" />
		<AnimatedLink
			link="https://projects.mariodev.xyz"
			name="Projects 🚨🚧🚨"
			emoji="👉"
		/>
		<AnimatedLink link="https://blog.mariodev.xyz" name="Blog" emoji="👉" />
		<Link
			link="https://github.com/Mario-SO/Portfolio/blob/main/resources/cv.pdf"
			name="CV"
			emoji="📝"
		/>
		<br />
	</code>
</main>

<style>
	/* Color Pallete
	first color: #f23557
	second color: #f0d43a
	third color: #22b2da
	fourth color: #3b4a6b
	*/

	:global(html) {
		overflow-y: hidden;
	}
	@media (max-width: 600px) {
		:global(html) {
			overflow-y: hidden;
		}
	}

	:global(html::-webkit-scrollbar) {
		display: none;
	}

	:global(body) {
		margin: 0;
		font-size: 16px;
		line-height: 26px;
		letter-spacing: 0.7px;
		background-color: beige;
	}

	main {
		color: #00a9ff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
	code {
		display: grid;
	}
</style>
