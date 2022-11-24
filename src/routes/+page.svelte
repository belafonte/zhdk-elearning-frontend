<!-- 

    File: Main Page View

    Author: Jan Pistor | Bureau 314
    Year: 2022

    Description: Handles Main Page View

 -->
<script lang="ts">
	// component imports
	import Row from "$lib/components/Row.svelte";
	import Tile from "$lib/components/Tile.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import Event from "$lib/components/Event.svelte";
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	// import Swiper core and required modules
	import { Navigation, Autoplay } from "swiper";

	import { Swiper, SwiperSlide } from "swiper/svelte";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";
	import "swiper/css/scrollbar";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";

	export let data: PageServerData;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
</script>

<svelte:head>
	<title>Willkommen zur E-Learning Webseite der Zürcher Hochschule der Künste</title>
</svelte:head>

{#if data !== null}
	<div
		class="hidden sm:grid sm:grid-cols-2"
		style:margin="0 {$currentSettings.colWidth}px 84px {$currentSettings.colWidth}px"
	>
		<div class="space-y-84">
			<div class="flex flex-col items-center">
				<MetaQuestion
					link="/questions/{data.highlights.highlight01.slug}"
					path={PUBLIC_ASSETS + data.highlights.highlight01.title_image.path}
					mask={PUBLIC_ASSETS + data.highlights.highlight01.mask.path}
				/>
				<a href="/questions/overview">
					<Tag rounded={true} text="Zu allen Leitfragen" icon={true} />
				</a>
			</div>
			{#if data.highlights.highlight02}
				<div class="flex">
					<Tile data={data.highlights.highlight02} />
				</div>
			{/if}

			{#if data.highlights.highlight05}
				<!-- Highlights -->
				<div class="flex">
					<Tile data={data.highlights.highlight05} offset="l" />
				</div>
			{/if}
		</div>

		<!-- Second Column in Desktop -->
		<div class="flex flex-col space-y-84" style:margin-left="{$currentSettings.colWidth}px">
			<!-- Events Tile -->
			<div>
				<Event eventData={data.event} />
			</div>
			{#if data.highlights.highlight03}
				<!-- Highlights -->
				<div class="flex">
					<Tile data={data.highlights.highlight03} />
				</div>
			{/if}

			{#if data.highlights.highlight04}
				<!-- Highlights -->
				<div class="flex">
					<Tile data={data.highlights.highlight04} offset="l" />
				</div>
			{/if}
		</div>
	</div>

	<!-- Mobile Highlight Section -->
	<div class="sm:hidden space-y-72 mb-72">
		<div class="flex flex-col items-center">
			<MetaQuestion
				link="/questions/{data.highlights.highlight01.slug}"
				path={PUBLIC_ASSETS + data.highlights.highlight01.title_image.path}
				mask={PUBLIC_ASSETS + data.highlights.highlight01.mask.path}
			/>
			<a href="/questions/overview">
				<Tag rounded={true} text="Zu allen Leitfragen" icon={true} />
			</a>
		</div>
		<!-- Events Tile -->
		<div>
			<Event eventData={data.event} />
		</div>
		{#if data.highlights.highlight02}
			<div class="flex">
				<Tile data={data.highlights.highlight02} />
			</div>
		{/if}

		{#if data.highlights.highlight03}
			<!-- Highlights -->
			<div class="flex">
				<Tile data={data.highlights.highlight03} />
			</div>
		{/if}

		{#if data.highlights.highlight04}
			<!-- Highlights -->
			<div class="flex">
				<Tile data={data.highlights.highlight04} offset="l" />
			</div>
		{/if}

		{#if data.highlights.highlight05}
			<!-- Highlights -->
			<div class="flex">
				<Tile data={data.highlights.highlight05} offset="r" />
			</div>
		{/if}
	</div>

	<!-- Section Rows -->
	{#if data.knowledge.length > 0}
		<Row title="Knowledge in use" url="knowledge-in-use" catData={data.knowledge}>
			{#each data.knowledge as entry}
				<Tile data={entry} />
			{/each}
		</Row>
	{/if}
	{#if data.community.length > 0}
		<Row title="Community" url="community" catData={data.community}>
			{#each data.community as entry}
				<Tile data={entry} />
			{/each}
		</Row>
	{/if}
	{#if data.kosmos.length > 0}
		<Row title="Kosmos" url="kosmos" catData={data.kosmos}>
			{#each data.kosmos as entry}
				<Tile data={entry} />
			{/each}
		</Row>
	{/if}

	<!-- Glossary Slider -->
	<div class="flex justify-center pt-84 pb-84 sm:pb-[168px]">
		<div id="slider" class="w-full sm:w-[83.5%]  lg:w-[62.5%]">
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				loop
				autoplay={{ delay: 6000 }}
			>
				{#each data.glossary.slider as slide}
					<SwiperSlide>
						<div>
							<img alt="Slide" src={PUBLIC_ASSETS + slide.image.path} />
							<div class="absolute bottom-[20px] flex justify-center w-full">
								<a href={slide.link}>{slide.display}</a>
							</div>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
			<!-- <button class="swiper-next">Next</button>
			<button class="swiper-prev">Prev</button> -->
		</div>
	</div>
{/if}

<style>
	#slider a::after {
		font-family: "icomoon" !important;
		content: "\e900";
	}

	:global(#slider .swiper) {
		aspect-ratio: 3/2;
		height: 100%;
	}

	/* :global(.swiper-button-next::after) {
		@apply text-black text-22 !important;
	}

	:global(.swiper-button-prev::after) {
		@apply text-black text-22 !important;
	} */
</style>
