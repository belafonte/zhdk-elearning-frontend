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
		color: { colors: [string] };
		title: string;
		category: string;
		mask: string;
		title_image: string;
		tags: [string];
		rotation: string;
	}

	export let size: string;
	export let tags: [string] | null = null;

	export let data: ITileData;

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
		let type = $currentSettings.type as keyof Object;
		let colSpan = tileSizes[size as keyof Object][type];

		if (typeof colSpan === "number") {
			tileWidth = $currentSettings.colWidth * colSpan;
		}
	}

	$: console.log(data, size);
</script>

{#if $currentSettings !== undefined}
	<a
		href={`/${data.category.toLocaleLowerCase()}/${data._id}`}
		class="p-15 title font-serif h-min"
		style="flex: 0 0 {tileWidth}px; background-color: {data.color.colors[0]}"
	>
		<h1
			class="mb-15"
			class:title-large={size === "l"}
			class:title-medium={size === "m"}
			class:title-small={size === "s"}
		>
			{@html data.title}
		</h1>
		<div class="flex justify-center mb-15">
			<MainImage
				path={PUBLIC_ASSETS + data.title_image.path}
				mask={data.mask ? PUBLIC_ASSETS + data.mask?.path : null}
				rotation={data.rotation !== "Keine" ? data.rotation : null}
			/>
		</div>
		<!-- <img src={PUBLIC_ASSETS + data.mask?.path} /> -->
		<div class="flex">
			<Tag text={data.category} />
			{#if tags !== null}
				{#each data.tags as tag}
					<Tag text={tag} rounded={true} />
				{/each}
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
