<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	// Component imports
	import StyledImage from "$lib/components/shared/StyledImage.svelte";
	import Tag from "$lib/components/shared/Tag.svelte";
	import type { ImageType } from "$graphql/image";
	import type { EventType } from "$graphql/event";
	import EventInfo from "$lib/components/shared/tile/EventInfo.svelte";

	export let slug: string | null | undefined = undefined;
	export let category: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let color: ImageType | null = null;
	export let rotation: string | null | undefined = undefined;
	export let mask: string | undefined = undefined;
	export let offset: string | null = null;

	let image: ImageType | null = null;
	export { image as title_image };
	export let tags: any | null = null;

	export let event: EventType | null | undefined = undefined;

	let size: string;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	let tileWidth: number;

	let tileSizes = {
		l: {
			mobile: 4,
			tablet: 6,
			laptop: 7,
			desktop: 7
		},
		m: {
			mobile: 3,
			tablet: 4,
			laptop: 5,
			desktop: 5
		},
		s: {
			mobile: 2,
			tablet: 3,
			laptop: 4,
			desktop: 4
		}
	};

	$: {
		if (category === "Community") {
			size = "l";
		} else if (category === "Knowledge in use") {
			if ($currentSettings.type === "mobile") {
				size = "s";
			} else {
				size = "m";
			}
		} else {
			size = "s";
		}
		let type = $currentSettings.type as keyof object;
		let colSpan = tileSizes[size as keyof object][type];

		if (typeof colSpan === "number") {
			tileWidth = $currentSettings.colWidth * colSpan;
		}
	}
</script>

{#if $currentSettings !== undefined && category}
	<a
		href={`/${category.toLocaleLowerCase().replaceAll(" ", "-")}/${slug}`}
		class="title h-min overflow-hidden p-[8px] font-serif sm:p-10 lg:p-15"
		class:ml-auto={offset === "l"}
		class:mr-auto={offset === "r"}
		style="flex: 0 0 {tileWidth}px; background-color: {color && color.colors
			? color.colors[0]
			: '#EEEEEE'}"
	>
		<h1
			class="line-clamp-6 overflow-hidden text-ellipsis pb-5 sm:line-clamp-5"
			class:title-large={size === "l"}
			class:title-medium={size === "m"}
			class:title-small={size === "s"}
		>
			{@html title}
		</h1>

		{#if image}
			<StyledImage class="p-[16px] sm:p-[25px]" {rotation} {image} {mask} />
		{:else}
			<div class="mb-32 sm:mb-50" />
		{/if}

		<div class="flex flex-row flex-wrap gap-y-5 sm:gap-y-2">
			<Tag class="mr-5 sm:mr-8" text={category} />

			{#if tags}
				<div class="flex">
					{#each tags as text}
						<Tag class="mr-5 sm:mr-8" {text} rounded={true} />
					{/each}
				</div>
			{/if}

			<EventInfo {...event} />
		</div>
	</a>
{:else}
	Not Found
{/if}

<style>
	.title-large {
		@apply text-36;
	}

	.title-medium {
		@apply text-24;
	}

	.title-small {
		@apply text-19;
	}

	@screen sm {
		.title-large {
			@apply text-38;
		}
		.title-medium {
			@apply text-30;
		}
		.title-small {
			@apply text-19;
		}
	}

	@screen lg {
		.title-large {
			@apply text-60;
		}
		.title-medium {
			@apply text-42;
		}
		.title-small {
			@apply text-30;
		}
	}
	/* .colWidth {
		width: var calc({$currentSettings.colWidth}* 7);
	} */
</style>
