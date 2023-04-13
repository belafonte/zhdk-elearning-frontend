<script lang="ts">
	// lib imports
	import type { SetEvent } from "$graphql/types";

	// component imports
	import StyledImage from "./shared/StyledImage.svelte";
	import EventInfo from "./shared/EventInfo.svelte";
	import Tag from "./Tag.svelte";

	// export let  (GetNextEventQuery["contentModel"] | null) | undefined | null;
	export let title_image: any | undefined = undefined;
	export let title: string | undefined = undefined;
	export let event: SetEvent | undefined | null = undefined;
	export let rotation: string | undefined | null = undefined;
</script>

<a href="/event/overview" id="event" class="tile-md ml-auto flex flex-col items-center">
	<div class="h-10 w-[90%] bg-[#C7C7C7] transition-all" />
	<div class="h-10 w-[95%] bg-[#D9D9D9] transition-all" />

	<div class="bg-light-gray p-15">
		<div class="grid grid-cols-3 font-serif" class:mb-16={title_image} class:mb-32={!title_image}>
			<p
				class=" line-clamp-5 text-19 sm:text-30"
				class:col-span-2={title_image}
				class:col-span-3={!title_image}
			>
				{title}
			</p>
			{#if title_image}
				<StyledImage class="col-span-1" cover={true} image={title_image} {rotation} />
			{/if}
		</div>
		<div class="flex">
			<Tag text="Event" />
			{#if event !== null}
				<EventInfo {...event} />
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
