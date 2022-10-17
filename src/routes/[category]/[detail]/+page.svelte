<script lang="ts">
	import type { PageServerLoad } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { fly } from "svelte/transition";

	// component imports
	import MainImage from "$lib/components/MainImage.svelte";

	export let data: PageServerLoad;

	let header: HTMLElement | undefined;
	let top: number | undefined = 0;

	function trans(status: any) {
		top = header?.getBoundingClientRect().top;
		header.style.top = `${top}px`;
	}
</script>

{#if data}
	<div transition:fly={{ y: 200, duration: 200 }} on:introend={(status) => trans(status)}>
		<div id="header" bind:this={header} class="sticky">
			<h1 class="text-60 sm:text-130 mb-32 sm:mb-84 font-serif">{@html data.title}</h1>
		</div>
		<div class="flex flex-col-reverse sm:flex-row mb-32 sm:mb-84">
			<p class="text-14 sm:basis-1/3 flex items-center">{data.caption}</p>
			<div class="sm:basis-1/3 flex flex-col justify-center">
				<MainImage
					path={PUBLIC_ASSETS + data.title_image.path}
					mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
					rotation={data.rotation !== "Keine" ? data.rotation : null}
				/>
			</div>
		</div>

		<h2 class="text-24 sm:text-50 mb-32 sm:mb-84 sm:mr-[25%]">{data.subhead}</h2>

		<p class="text-20 sm:mx-[25%] sm:text-26 font-serif mb-32 sm:mb-84">{@html data.body}</p>
	</div>
{/if}
