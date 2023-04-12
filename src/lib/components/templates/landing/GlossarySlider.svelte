<script lang="ts">
	import CpImage from "$lib/components/shared/CpImage.svelte";
	import type { SetSlider } from "$graphql/types";

	export let slides: (SetSlider | null)[] | undefined | null;

	console.log(slides);
</script>

<!-- Glossary Slider -->
{#if slides}
	<div class="flex justify-center pt-84">
		<div id="slider" class="w-full sm:w-[83.5%] lg:w-[62.5%]">
			<swiper-container
				space-between={0}
				slides-per-view={1}
				loop={true}
				autoplay={{ delay: 6000 }}
			>
				{#each slides as slide}
					<swiper-slide>
						<div>
							<CpImage
								alt="Glossary Slider Images"
								_id={slide?.image._id}
								width={slide?.image.width}
								height={slide?.image.height}
							/>
							<div class="absolute bottom-[20px] flex w-full justify-center">
								<a href={slide?.link}>{slide?.display}</a>
							</div>
						</div></swiper-slide
					>
				{/each}
			</swiper-container>
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
</style>
