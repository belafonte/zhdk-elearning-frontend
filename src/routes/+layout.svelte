<script>
	import "../app.postcss";
	import Head from "$lib/components/Head.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import GridReference from "$lib/components/GridReference.svelte";
	import Row from "$lib/components/Row.svelte";
	import Tile from "$lib/components/Tile.svelte";
	import Scrollbars from "$lib/components/Scrollbars.svelte";
</script>

<GridReference>
	<Scrollbars />
	<Head />
	<main class="px-15 w-screen">
		<slot />
	</main>
	<Footer />
</GridReference>
