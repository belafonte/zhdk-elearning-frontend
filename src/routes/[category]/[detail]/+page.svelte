<script lang="ts">
	import type { PageServerData } from "./$types";

	import { PUBLIC_ASSETS } from "$env/static/public";
	import { fly } from "svelte/transition";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	// component imports
	import StyledImage from "$lib/components/shared/StyledImage.svelte";
	import Tag from "$lib/components/shared/Tag.svelte";
	import GridBackground from "$lib/components/GridBackground.svelte";
	import FormatDate from "$lib/components/shared/FormatDate.svelte";
	import Image from "sveltekit-image";
	import { onMount } from "svelte/internal";

	export let data: PageServerData;

	let title: HTMLElement | undefined;
	let nav: HTMLElement | undefined;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	$: containerWidth = $currentSettings.gridCols * $currentSettings.colWidth;

	$: titleTop = 0;
	$: titlePosition = "relative";

	function trans(status: any) {
		titlePosition = "fixed";
	}

	onMount(() => {
		const height = nav?.getBoundingClientRect().height;
		if (height) titleTop = height;
		else titleTop = 0;
	});
</script>

<svelte:window />
<svelte:head>
	<title>{data.title}</title>
</svelte:head>

{#if data}
	<div transition:fly={{ y: 200, duration: 400 }} on:introend={(status) => trans(status)}>
		<GridBackground>
			<div
				bind:this={nav}
				class="fixed z-50 grid w-max grid-cols-3 px-10 pb-32 pt-20 sm:px-[40px] sm:pt-32"
				style:width="{containerWidth}px"
			>
				<button
					class="justify-self-start whitespace-nowrap text-12 uppercase tracking-wider sm:text-14"
					on:click={() => {
						return history.length > 2 ? history.back() : location.replace(location.origin);
					}}>Zurück</button
				>
				<Tag class="justify-self-center" background={true} text={data.category?.toUpperCase()} />
			</div>

			<div bind:this={title} style:padding-top="{titleTop}px" style:width="{containerWidth}px">
				<h1
					class="sticky pl-10 pr-7 font-serif text-60 sm:pl-[40px] sm:pr-[20px] sm:text-68 lg:text-130"
					style:top="{titleTop}px"
				>
					{@html data.title}
				</h1>
				<!-- Area that scrolls over the title -->

				{#if data.title_image}
					<!--	Main Image	-->
					<div class="flex flex-col-reverse py-32 lg:flex-row">
						<p
							class="z-40 hidden items-center pl-10 pr-7 text-14 sm:pl-[40px] sm:pr-[20px] lg:flex lg:basis-1/6"
						>
							{data.caption || ""}
						</p>
						<div class="z-50 flex justify-center self-center sm:w-[80%] lg:basis-4/6">
							{#if data.category === "Insights"}
								<img alt="Meta Question" src={PUBLIC_ASSETS + data.mask.path} />
							{:else}
								<StyledImage image={data.title_image} mask={data.mask} rotation={data.rotation} />
							{/if}
						</div>
					</div>
				{/if}
			</div>

			<div class="z-40">
				<p class="z-40 items-center py-16 pl-10 pr-7 text-14 sm:pl-[40px] sm:pr-[20px] lg:hidden">
					{data.caption || ""}
				</p>
				<!-- Event Data -->
				{#if data.event && data.category === "Event"}
					<div
						class="link mb-32 grid grid-cols-2 gap-15 pl-10 pr-7 text-24 sm:mb-42 sm:grid-cols-4 sm:pl-[40px] sm:pr-[20px] lg:text-26"
					>
						<p><FormatDate fromDate={data.event.fromDate} toDate={data.event.toDate} /></p>
						<p>
							{data.event.fromTime || ""}{data.event.toTime ? `-${data.event.toTime}` : ""}
						</p>
						<p>{data.event.location || ""}</p>
						<a class="relative top-[-7px]" href={data.event.link}>Anmelden</a>
					</div>
				{/if}

				<!-- Subhead Data - has margin below -->
				{#if data.subhead}
					<h2
						class="link mx-0 mb-32 hyphens-auto pl-10 pr-7 text-24 sm:mb-84 sm:mr-[5%] sm:pl-[40px] sm:pr-[20px] sm:text-50 lg:mr-[25%]"
					>
						{@html data.subhead}
					</h2>
				{/if}

				<!-- Body text with link tag in the end -->
				<div class="mx-0 flex flex-col pl-10 pr-7 sm:mx-[8.5%] sm:pl-15 sm:pr-10 lg:mx-[25%]">
					<p class="link font-serif text-20 sm:text-23 lg:text-26">
						{@html data.body}
					</p>
					{#if data.event && data.category === "event"}
						<a href={data.event.link} target="_blank" class="mt-32 self-center sm:mt-42">
							<Tag text="Anmelden" rounded={true} icon={true} />
						</a>
					{/if}
				</div>

				{#if data.image && data.image.length > 0}
					<div
						class="block-spacing grid place-items-center"
						class:grid-cols-2={data.image.length > 1}
						class:auto-cols-fr={data.image.length === 1}
					>
						{#each data.image as img}
							<div>
								<Image
									src={PUBLIC_ASSETS + img.path}
									alt="Gallery"
									width={img.width}
									height={img.height}
								/>
								<p class="text-14">{img.description}</p>
							</div>
						{/each}
					</div>
				{/if}
				{#if data.embed !== null}
					<div id="embed" class="block-spacing">
						{@html data.embed}
					</div>
				{/if}
			</div>
		</GridBackground>
	</div>
{/if}

<style>
	.block-spacing {
		@apply mt-32 pl-10 pr-7 sm:mt-84 sm:pl-[40px] sm:pr-[20px];
	}
	:global(.link a) {
		@apply underline !important;
	}
	:global(.link a::after) {
		font-family: "icomoon" !important;
		content: "\e900";
	}

	:global(#embed iframe) {
		width: 100% !important;
		height: 100% !important;
		aspect-ratio: 16/9;
	}
</style>
