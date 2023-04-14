<!-- 

    File: Main Page View

    Author: Jan Pistor | Bureau 314
    Year: 2022

    Description: Handles Main Page View

 -->
<script lang="ts">
	// lib imports
	import type { PageServerData } from "./$types";

	// component imports
	import Row from "$lib/components/templates/landing/Row.svelte";
	import Tile from "$lib/components/shared/Tile.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import Event from "$lib/components/Event.svelte";
	import GlossarySlider from "$lib/components/templates/landing/GlossarySlider.svelte";
	import { register } from "swiper/element/bundle";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";
	import "swiper/css/scrollbar";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";

	register();

	export let data: PageServerData;

	console.log(data);
</script>

<svelte:head>
	<title>Willkommen zur E-Learning Webseite der Zürcher Hochschule der Künste</title>

	<meta property="og:title" content="E-Learning der ZHdK" />
	<meta property="og:site_name" content="E-Learning ZHdK" />
	<meta property="og:url" content="elearning.zhdk.ch" />
	<meta
		property="og:description"
		content="Das E-Learning der ZHdK bietet ein breites Angebot aus
		Lehrentwicklung, Beratung und niederschwelligen Schulungen."
	/>
</svelte:head>

{#if data.highlights}
	<div class="mb-84 hidden sm:grid sm:grid-cols-2 sm:pl-col sm:pr-col">
		<div class="space-y-84">
			<div class="flex flex-col items-center">
				<MetaQuestion
					color={data.highlights.highlight01.color.colors[0]}
					text={data.highlights.highlight01.title}
					mask={data.highlights.highlight01?.mask.path}
					link="/insights/{data.highlights.highlight01?.slug}"
				/>
				<a href="/insights/overview">
					<Tag rounded={true} text="Zu allen Insights" icon={true} />
				</a>
			</div>
			{#if data.highlights.highlight02}
				<div class="flex">
					<Tile {...data.highlights.highlight02} />
				</div>
			{/if}

			{#if data.highlights && data.highlights.highlight05}
				<!-- Highlights -->
				<div class="flex">
					<Tile {...data.highlights.highlight05} offset="l" />
				</div>
			{/if}
		</div>

		<!-- Second Column in Desktop -->
		<div class="ml-col flex flex-col space-y-84">
			<!-- Events Tile -->
			<div>
				<Event {...data.event} />
			</div>
			{#if data.highlights && data.highlights.highlight03}
				<!-- Highlights -->
				<div class="flex">
					<Tile {...data.highlights.highlight03} />
				</div>
			{/if}

			{#if data.highlights && data.highlights.highlight04}
				<!-- Highlights -->
				<div class="flex">
					<Tile {...data.highlights?.highlight04} offset="l" />
				</div>
			{/if}
		</div>
	</div>

	<!-- Mobile Highlight Section -->
	<div class="mb-72 space-y-72 sm:hidden">
		<div class="flex flex-col items-center">
			<MetaQuestion
				color={data.highlights.highlight01.color.colors[0]}
				text={data.highlights.highlight01.title}
				link="/insights/{data.highlights.highlight01?.slug}"
				mask={data.highlights.highlight01?.mask.path}
			/>
			<a href="/insights/overview">
				<Tag rounded={true} text="Zu allen Insights" icon={true} />
			</a>
		</div>
		<!-- Events Tile -->
		<div>
			<Event {...data.event} />
		</div>
		{#if data.highlights.highlight02}
			<div class="flex">
				<Tile {...data.highlights.highlight02} />
			</div>
		{/if}

		{#if data.highlights.highlight03}
			<!-- Highlights -->
			<div class="flex">
				<Tile {...data.highlights.highlight03} />
			</div>
		{/if}

		{#if data.highlights.highlight04}
			<!-- Highlights -->
			<div class="flex">
				<Tile {...data.highlights.highlight04} offset="l" />
			</div>
		{/if}

		{#if data.highlights.highlight05}
			<!-- Highlights -->
			<div class="flex">
				<Tile {...data.highlights.highlight05} offset="r" />
			</div>
		{/if}
	</div>
{/if}

<!-- Section Rows -->
{#if data.experience}
	<Row title="Experience" url="experience">
		{#each data.experience as post}
			<Tile {...post} />
		{/each}
	</Row>
{/if}

{#if data.community}
	<Row title="Community" url="community">
		{#each data.community as post}
			<Tile {...post} />
		{/each}
	</Row>
{/if}

{#if data.cosmos}
	<Row title="Cosmos" url="cosmos">
		{#each data.cosmos as post}
			<Tile {...post} />
		{/each}
	</Row>
{/if}

<GlossarySlider slides={data.glossary?.slider} />
