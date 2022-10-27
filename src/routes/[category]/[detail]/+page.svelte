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

	function trans(status: any) {
		scrollOverTop = title?.getBoundingClientRect().height;
		titlePosition = "fixed";
	}

	onMount(() => {
		titleTop = nav?.getBoundingClientRect().height;
	});
	$: console.log(titleTop);
</script>

{#if data}
	<div transition:fly={{ y: 200, duration: 400 }} on:introend={(status) => trans(status)}>
		<GridBackground>
			<div
				bind:this={nav}
				class="pt-24 sm:pt-32 pb-32 grid grid-cols-3 z-50 w-max fixed"
				style:width="{containerWidth}px"
			>
				<button class="justify-self-start" on:click={() => history.back()}>Zurück</button>
				<div class="bg-white bg-opacity-50 justify-self-center whitespace-nowrap">
					{data.category.toUpperCase()}
				</div>
			</div>

			<div
				bind:this={title}
				class="overflow-hidden"
				style:position={titlePosition}
				style:padding-top="{titleTop}px"
				style:width="{containerWidth}px"
			>
				<h1 class="text-60 sm:text-130 pb-32 sm:pb-84 font-serif">{@html data.title}</h1>
			</div>

			<!-- Area that scrolls over the title -->
			<div style:margin-top="{scrollOverTop}px" class="relative z-40">
				<div class="flex flex-col-reverse sm:flex-row mb-32 sm:mb-84">
					<p class="text-14 sm:basis-1/3 flex items-center">
						{data.caption !== null ? data.caption : " "}
					</p>
					<!--	Main Image	-->
					<div class="sm:basis-1/3 flex flex-col justify-center">
						{#if data.category === "Leitfrage"}
							<img src={PUBLIC_ASSETS + data.mask.path} />
						{:else}
							<MainImage
								path={PUBLIC_ASSETS + data.title_image.path}
								mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
								rotation={data.rotation !== "Keine" ? data.rotation : null}
							/>
						{/if}
					</div>
				</div>

				<GridBackground>
					<div class="relative z-40 pb-84 sm:pb-[168px]">
						<!-- Event Data -->
						{#if data.event.date !== null}
							<div
								class="link grid grid-cols-2 sm:grid-cols-4 text-24 sm:text-26 mb-32 sm:mb-42 gap-15"
							>
								<p>{data.event.date}</p>
								<p>{data.event.time}</p>
								<p>{data.event.location}</p>
								<a class="relative top-[-7px]" href={data.event.link}>Anmelden</a>
							</div>
						{/if}

						<!-- Subhead Data - has margin below -->
						{#if data.subhead}
							<h2 class="link text-24 sm:text-50 mb-32 sm:mb-84 sm:mr-[25%]">
								{@html data.subhead}
							</h2>
						{/if}

						<!-- Body text with link tag in the end -->
						<div class="sm:mx-[25%] mb-32 sm:mb-84">
							<p class="link text-20  sm:text-26 font-serif">
								{@html data.body}
							</p>
							{#if data.event.date !== null}
								<div class="mt-32 sm:mt-42">
									<Tag ref={data.event.link} text="Anmelden" rounded={true} icon={true} />
								</div>
							{/if}
						</div>

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
</style>
