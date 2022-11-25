<script lang="ts">
	import type { PageServerLoad } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { fly } from "svelte/transition";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	// component imports
	import MainImage from "$lib/components/MainImage.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import GridBackground from "$lib/components/GridBackground.svelte";
	import { onMount } from "svelte/internal";

	export let data: PageServerLoad;

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
		titleTop = nav?.getBoundingClientRect().height;
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
				class="fixed z-50 grid  w-max grid-cols-3 px-10 pt-20 pb-32 sm:px-[40px] sm:pt-32"
				style:width="{containerWidth}px"
			>
				<button
					class="justify-self-start whitespace-nowrap text-12 uppercase tracking-wider sm:text-14"
					on:click={() => {
						return history.length > 2 ? history.back() : location.replace(location.origin);
					}}>Zurück</button
				>
				<div class="justify-self-center">
					<Tag background={true} text={data.category.toUpperCase()} />
				</div>
			</div>

			<div bind:this={title} style:padding-top="{titleTop}px" style:width="{containerWidth}px">
				<h1
					class="sticky pl-10 pr-7 font-serif text-60 sm:pl-[40px] sm:pr-[20px] sm:text-68 lg:text-130"
					style:top="{titleTop}px"
				>
					{@html data.title}
				</h1>
				<!-- Area that scrolls over the title -->

				{#if data.title_image !== null}
					<!--	Main Image	-->
					<div class="flex flex-col-reverse lg:flex-row">
						<p
							class="z-40 hidden items-center pl-10 pr-7 text-14 sm:pl-[40px] sm:pr-[20px] lg:flex lg:basis-1/6"
						>
							{data.caption !== null ? data.caption : " "}
						</p>
						<div class="z-40  self-center sm:w-[80%] lg:basis-4/6">
							{#if data.category === "Leitfrage"}
								<img alt="Meta Question" src={PUBLIC_ASSETS + data.mask.path} />
							{:else}
								<MainImage
									path={PUBLIC_ASSETS + data.title_image.path}
									mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
									rotation={data.rotation !== "Keine" ? data.rotation : null}
								/>
							{/if}
						</div>
					</div>
				{/if}
			</div>

			<div class="z-40">
				<p class="z-40 items-center py-16 pl-10 pr-7 text-14 sm:pl-[40px] sm:pr-[20px] lg:hidden">
					{data.caption !== null ? data.caption : " "}
				</p>
				<!-- Event Data -->
				{#if data.event.date !== null}
					<div
						class="link mb-32 grid grid-cols-2 gap-15 pl-10 pr-7 text-24 sm:mb-42 sm:grid-cols-4 sm:pl-[40px] sm:pr-[20px] lg:text-26"
					>
						<p>{data.event.date}</p>
						<p>{data.event.time}</p>
						<p>{data.event.location}</p>
						<a class="relative top-[-7px]" href={data.event.link}>Anmelden</a>
					</div>
				{/if}

				<!-- Subhead Data - has margin below -->
				{#if data.subhead}
					<h2
						class="link hyphens-auto mx-0 mb-32 pl-10 pr-7 text-24 sm:mb-84 sm:mr-[5%] sm:pl-[40px] sm:pr-[20px] sm:text-50 lg:mr-[25%]"
					>
						{@html data.subhead}
					</h2>
				{/if}

				<!-- Body text with link tag in the end -->
				<div class="mx-0 flex flex-col pl-10 pr-7 sm:mx-[8.5%] sm:pl-15 sm:pr-10 lg:mx-[25%]">
					<p class="link font-serif text-20  sm:text-23 lg:text-26">
						{@html data.body}
					</p>
					{#if data.event.date !== null}
						<a href={data.event.link} class="mt-32 self-center sm:mt-42">
							<Tag text="Anmelden" rounded={true} icon={true} />
						</a>
					{/if}
				</div>

				{#if data.image.length > 0}
					<div
						class="grid place-items-center"
						class:grid-cols-2={data.image.length > 1}
						class:auto-cols-fr={data.image.length === 1}
					>
						{#each data.image as img}
							<div>
								<img alt="Gallery" src={PUBLIC_ASSETS + img.path} />
								<p class="text-14">{img.description}</p>
							</div>
						{/each}
					</div>
				{/if}
				{#if data.embed !== null}
					<div id="embed" class="mb-32 pl-10  pr-7 sm:mb-84 sm:pl-[40px] sm:pr-[20px]">
						{@html data.embed}
					</div>
				{/if}
			</div>
		</GridBackground>
	</div>
{/if}

<style>
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
