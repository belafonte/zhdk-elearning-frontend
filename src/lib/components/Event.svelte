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
		<div class="grid grid-cols-3 font-serif">
			<p class="col-span-2 text-19 sm:text-26">
				{eventData.title}
			</p>
			<div class="col-span-1">
				<MainImage
					path={PUBLIC_ASSETS + eventData.title_image.path}
					rotation={eventData.rotation}
				/>
			</div>
		</div>
		<div class="flex">
			<Tag text="Event" />
			{#if eventData.date !== null}
				<div class="ml-32">
					<p class="font-sans text-12">{eventData.event.date} / {eventData.event.time}</p>
					<p class="hidden sm:block font-sans text-12">{eventData.event.location}</p>
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
