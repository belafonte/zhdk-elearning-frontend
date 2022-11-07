<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import { PUBLIC_ASSETS } from "$env/static/public";

	// Component imports
	import MainImage from "$lib/components/MainImage.svelte";
	import Tag from "$lib/components/Tag.svelte";

	interface ITileData {
		_id: string;
		slug: string;
		color: { colors: [string] };
		title: string;
		category: string;
		mask: string;
		title_image: string;
		tags: [string];
		rotation: string;
		event: any;
	}

	// export let size: string;

	export let tags: [string] | null = null;

	export let data: ITileData;

	export let offset: string | null = null;

	let size: string;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	let tileWidth: number;
	let tileSizes: Object = {
		l: {
			mobile: 4,
			tablet: 7,
			laptop: 7,
			desktop: 7
		},
		m: {
			mobile: 3,
			tablet: 5,
			laptop: 5,
			desktop: 5
		},
		s: {
			mobile: 2,
			tablet: 4,
			laptop: 4,
			desktop: 4
		}
	};

	$: {
		if (data.category === "Community") {
			size = "l";
		} else if (data.category === "Knowledge in use") {
			if ($currentSettings.type === "mobile") {
				size = "s";
			} else {
				size = "m";
			}
		} else {
			size = "s";
		}
		let type = $currentSettings.type as keyof Object;
		let colSpan = tileSizes[size as keyof Object][type];

		if (typeof colSpan === "number") {
			tileWidth = $currentSettings.colWidth * colSpan;
		}
	}
</script>

{#if $currentSettings !== undefined}
	<a
		href={`/${data.category.toLocaleLowerCase().replaceAll(" ", "-")}/${data.slug}`}
		class="p-[8px] sm:p-15 title font-serif h-min overflow-hidden"
		class:ml-auto={offset === "l"}
		class:mr-auto={offset === "r"}
		style="flex: 0 0 {tileWidth}px; background-color: {data.color !== null
			? data.color.colors[0]
			: '#EEEEEE'}"
	>
		<h1
			class="overflow-hidden text-ellipsis pb-5 line-clamp-6 sm:line-clamp-5"
			class:title-large={size === "l"}
			class:title-medium={size === "m"}
			class:title-small={size === "s"}
		>
			{@html data.title}
		</h1>
		{#if data.title_image !== null}
			<div class="p-[16px] sm:p-[25px]">
				<MainImage
					path={PUBLIC_ASSETS + data.title_image.path}
					mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
					rotation={data.rotation !== "Keine" ? data.rotation : null}
				/>
			</div>
		{:else}
			<div class="mb-32 sm:mb-50" />
		{/if}
		<!-- <img src={PUBLIC_ASSETS + data.mask?.path} /> -->
		<div class="flex flex-row flex-wrap gap-y-5 sm:gap-y-2">
			<div class="mr-5 sm:mr-8">
				<Tag text={data.category} />
			</div>
			{#if data.tags !== null && data.tags !== undefined}
				<div class="flex">
					{#each data.tags as tag}
						<div class="mr-5 sm:mr-8">
							<Tag text={tag} rounded={true} />
						</div>
					{/each}
				</div>
			{/if}
			{#if data.event.date !== null}
				<div class="md:ml-32">
					<p class="font-sans text-12">{data.event.date} / {data.event.time}</p>
					<p class="hidden md:block font-sans text-12">{data.event.location}</p>
				</div>
			{/if}
		</div>
	</a>
{:else}
	settings are undefined
{/if}

<style>
	.rotate-right {
		rotate: 15deg;
		scale: 0.7;
	}

	.rotate-left {
		rotate: -15deg;
		scale: 0.7;
	}

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

	.mask {
		mask-image: var(--url);
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: scale-down;
	}
</style>
