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
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";

	// import Swiper core and required modules
	import { Navigation, Autoplay, Scrollbar, A11y } from "swiper";

	import { Swiper, SwiperSlide } from "swiper/svelte";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";
	import "swiper/css/scrollbar";

	export let data: PageServerData;

	console.log(data);
</script>

{#if data !== null}
	{#if data.knowledge.length > 0}
		<Row title="Knowledge in use" url="knowledge-in-use" catData={data.knowledge}>
			{#each data.knowledge as entry}
				<Tile size="l" data={entry} />
			{/each}
		</Row>
	{/if}
	{#if data.community.length > 0}
		<Row title="Community" url="community" catData={data.community}>
			{#each data.community as entry}
				<Tile size="l" data={entry} />
			{/each}
		</Row>
	{/if}
	{#if data.kosmos.length > 0}
		<Row title="Kosmos" url="kosmos" catData={data.kosmos}>
			{#each data.kosmos as entry}
				<Tile size="s" data={entry} />
			{/each}
		</Row>
	{/if}

	<div class="flex justify-center">
		<div id="slider" class="w-1/2">
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				loop
				autoplay
				navigation
				on:slideChange={() => console.log("slide change")}
			>
				{#each data.glossary.slider as slide}
					<SwiperSlide>
						<div>
							<img src={PUBLIC_ASSETS + slide.image.path} />
							<div class="absolute bottom-0 flex justify-center w-full">
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
	#slider a {
		@apply underline !important;
	}
	#slider a::after {
		font-family: "icomoon" !important;
		content: "\e900";
	}

	:global(.swiper-button-next::after) {
		@apply text-black text-22 !important;
	}

	:global(.swiper-button-prev::after) {
		@apply text-black text-22 !important;
	}
</style>
