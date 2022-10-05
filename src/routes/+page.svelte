<!-- 

    File: Main Page View

    Author: Jan Pistor | Bureau 314
    Year: 2022

    Description: Handles Main Page View

 -->
<script lang="ts">
	// component imports
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

	<Row title="Hello">
		<Tile size="l" color="bg-orange" />
		<Tile size="m" color="bg-yellow" />
		<Tile size="s" color="bg-green" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<!-- <Tile colSpan={3} /> -->
		<!-- <Tile colSpan={3} /> -->
	</Row>
	<Row>
		<Tile size="l" color="bg-orange" />
		<Tile size="m" color="bg-yellow" />
		<Tile size="s" color="bg-green" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<!-- <Tile colSpan={3} /> -->
		<!-- <Tile colSpan={3} /> -->
	</Row>
	<Row>
		<Tile size="l" color="bg-orange" />
		<Tile size="m" color="bg-yellow" />
		<Tile size="s" color="bg-green" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="s" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<Tile size="l" color="bg-orange" />
		<!-- <Tile colSpan={3} /> -->
		<!-- <Tile colSpan={3} /> -->
	</Row>
	<Footer />
</GridReference>
