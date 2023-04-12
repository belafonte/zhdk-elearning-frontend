<script>
	import "../app.postcss";
	import Head from "$lib/components/Head.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import GridReference from "$lib/components/GridReference.svelte";
	import Scrollbars from "$lib/components/Scrollbars.svelte";

	export const prerender = true;
</script>

<GridReference>
	<Head />
	<main class="z-20 w-screen px-15 pb-72 sm:pb-[168px]">
		<slot />
	</main>
	<Footer />
	<Scrollbars />
</GridReference>
