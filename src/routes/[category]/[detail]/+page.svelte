<script lang="ts">
	import type { PageServerLoad } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { fly } from "svelte/transition";

	// component imports
	import MainImage from "$lib/components/MainImage.svelte";
	import GridBackground from "$lib/components/GridBackground.svelte";

	export let data: PageServerLoad;

	let header: HTMLElement | undefined;
	let nav: HTMLElement | undefined;
	let top: number | undefined = 0;
	let topNav: number | undefined = 0;

	function trans(status: any) {
		top = header?.getBoundingClientRect().top;
		header.style.top = `${top}px`;

		topNav = nav?.getBoundingClientRect().top;
		nav.style.top = `${topNav}px`;
	}

	$: console.log(data);
</script>

{#if data}
	<div transition:fly={{ y: 200, duration: 400 }} on:introend={(status) => trans(status)}>
		<GridBackground>
			<div bind:this={nav} class="z-50 mb-72 sm:mb-84 mt-24 sm:mt-32 sticky grid grid-cols-3">
				<button class="justify-self-start" on:click={() => history.back()}>Zurück</button>
				<div class="bg-white bg-opacity-50 justify-self-center">{data.category.toUpperCase()}</div>
			</div>
			<div id="header" bind:this={header} class="sticky">
				<h1 class="text-60 sm:text-130 mb-32 sm:mb-84 font-serif">{@html data.title}</h1>
			</div>

			<div class="flex flex-col-reverse sm:flex-row mb-32 sm:mb-84 z-10">
				<p class="text-14 sm:basis-1/3 flex items-center">{data.caption}</p>
				<div class="sm:basis-1/3 flex flex-col justify-center">
					<MainImage
						path={PUBLIC_ASSETS + data.title_image.path}
						mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
						rotation={data.rotation !== "Keine" ? data.rotation : null}
					/>
				</div>
			</div>

			<GridBackground>
				<div class="z-40">
					<h2 class="text-24 sm:text-50 mb-32 sm:mb-84 sm:mr-[25%]">{data.subhead}</h2>

					<p class="text-20 sm:mx-[25%] sm:text-26 font-serif mb-32 sm:mb-84">{@html data.body}</p>
					<div
						class="grid place-items-center"
						class:grid-cols-2={data.image.length > 1}
						class:auto-cols-fr={data.image.length === 1}
					>
						{#each data.image as img}
							<div>
								<img src={PUBLIC_ASSETS + img.path} />
								<p class="text-14">{img.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</GridBackground>
		</GridBackground>
	</div>
{/if}
