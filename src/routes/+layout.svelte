<script>
	import "../app.postcss";
	import Head from "$lib/components/Head.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import GridReference from "$lib/components/GridReference.svelte";
	import Scrollbars from "$lib/components/Scrollbars.svelte";
</script>

<GridReference>
	<Scrollbars />
	<Head />
	<main class="w-screen z-20 px-15">
		<slot />
	</main>
	<Footer />
</GridReference>
