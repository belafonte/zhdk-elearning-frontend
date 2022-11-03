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

	$: scrollOverTop = 0;
	$: titleTop = 0;
	$: titlePosition = "relative";

	function calcTop() {
		scrollOverTop = title?.getBoundingClientRect().height;
	}

	function trans(status: any) {
		calcTop();
		titlePosition = "fixed";
	}

	onMount(() => {
		titleTop = nav?.getBoundingClientRect().height;
	});
</script>

<svelte:window on:resize={calcTop} />
<svelte:head>
	<title>{data.title}</title>
</svelte:head>

{#if data}
	<div transition:fly={{ y: 200, duration: 400 }} on:introend={(status) => trans(status)}>
		<GridBackground>
			<div
				bind:this={nav}
				class="pt-20 sm:pt-32 pb-32  grid grid-cols-3 z-50 w-max fixed px-10 sm:px-[40px]"
				style:width="{containerWidth}px"
			>
				<button
					class="justify-self-start uppercase text-12 sm:text-14 whitespace-nowrap tracking-wider"
					on:click={() => {
						return history.length > 2 ? history.back() : location.replace(location.origin);
					}}>Zurück</button
				>
				<div class="justify-self-center">
					<Tag background={true} text={data.category.toUpperCase()} />
				</div>
				<!-- <div class="bg-white bg-opacity-50 justify-self-center whitespace-nowrap tracking-wider">
					{data.category.toUpperCase()}
				</div> -->
			</div>

			<div
				bind:this={title}
				class="overflow-hidden"
				style:position={titlePosition}
				style:padding-top="{titleTop}px"
				style:width="{containerWidth}px"
			>
				<h1
					class="text-60 sm:text-130 pb-32 sm:pb-84 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px] font-serif"
				>
					{@html data.title}
				</h1>
			</div>

			<!-- Area that scrolls over the title -->
			<div style:margin-top="{scrollOverTop}px" class="relative z-40">
				<div class="flex flex-col-reverse sm:flex-row mb-32 sm:mb-84">
					<p class="text-14 sm:basis-1/5 flex items-center pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
						{data.caption !== null ? data.caption : " "}
					</p>
					{#if data.title_image !== null}
						<!--	Main Image	-->
						<div class="sm:basis-3/5 flex flex-col justify-center">
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
					{/if}
				</div>

				<GridBackground>
					<div class="relative z-40 pb-32 sm:pb-84">
						<!-- Event Data -->
						{#if data.event.date !== null}
							<div
								class="link grid grid-cols-2 sm:grid-cols-4 text-24 sm:text-26 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px] mb-32 sm:mb-42 gap-15"
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
								class="link text-24 sm:text-50 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px] mb-32 sm:mb-84 sm:mr-[25%]"
							>
								{@html data.subhead}
							</h2>
						{/if}

						<!-- Body text with link tag in the end -->
						<div class="sm:mx-[25%] mb-32 sm:mb-84  pl-10 pr-7 sm:pl-15 sm:pr-10">
							<p class="link text-20 sm:text-26 font-serif">
								{@html data.body}
							</p>
							{#if data.event.date !== null}
								<div class="mt-32 sm:mt-42 mb-32 sm:mb-84">
									<Tag ref={data.event.link} text="Anmelden" rounded={true} icon={true} />
								</div>
							{/if}
						</div>

						{#if data.image.length > 0}
							<div
								class="grid place-items-center mb-32 sm:mb-84"
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
							<div id="embed" class="mb-32 sm:mb-84  pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
								{@html data.embed}
							</div>
						{/if}
					</div>
				</GridBackground>
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
