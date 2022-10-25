<script lang="ts">
	import MainImage from "./MainImage.svelte";
	import Tag from "./Tag.svelte";
	import { PUBLIC_ASSETS } from "$env/static/public";

	export let eventData: any;

	console.log(eventData);
</script>

<a href="/event/overview" id="event" class="flex flex-col items-center ">
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
					<p class="font-sans text-12">{eventData.event.location}</p>
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
