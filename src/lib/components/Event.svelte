<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import MainImage from "./MainImage.svelte";
	import Tag from "./Tag.svelte";
	import { PUBLIC_ASSETS } from "$env/static/public";

	export let eventData: any;

	let size: string;
	let width: number;

	let sizes: Object = {
		mobile: 3,
		tablet: 5,
		laptop: 5,
		desktop: 5
	};

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
	$: {
		let type = $currentSettings.type as keyof Object;
		let colSpan = sizes[type];

		if (typeof colSpan === "number") {
			width = $currentSettings.colWidth * colSpan;
		}
	}
	console.log(eventData);
</script>

<a
	href="/event/overview"
	id="event"
	class="flex flex-col items-center ml-auto"
	style:width="{width}px"
>
	<div class="h-10 bg-[#C7C7C7] w-[90%] transition-all" />
	<div class="h-10 bg-[#D9D9D9] w-[95%] transition-all" />

	<div class="bg-light-gray p-15">
		<div
			class="grid grid-cols-3 font-serif"
			class:mb-16={eventData.title_image !== null}
			class:mb-32={eventData.title_image === null}
		>
			<p
				class=" text-19 sm:text-30 line-clamp-5"
				class:col-span-2={eventData.title_image !== null}
				class:col-span-3={eventData.title_image === null}
			>
				{eventData.title}
			</p>
			{#if eventData.title_image !== null}
				<div class="col-span-1">
					<MainImage
						cover={true}
						path={PUBLIC_ASSETS + eventData.title_image.path}
						rotation={eventData.rotation}
					/>
				</div>
			{/if}
		</div>
		<div class="flex">
			<Tag text="Event" />
			{#if eventData.date !== null}
				<div class="ml-32 text-14 sm:text-13 flex items-center sm:block">
					<p class="font-sans">
						{eventData.event.date} / {eventData.event.time}
					</p>
					<p class="hidden sm:block font-sans">{eventData.event.location}</p>
				</div>
			{/if}
		</div>
	</div>
</a>

<style>
	#event:hover > div:nth-child(1),
	#event:hover > div:nth-child(2) {
		@apply h-15;
	}
</style>
