<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	import Tag from "$lib/components/Tag.svelte";

	export let size: string;
	export let color: string;
	export let title: string = "Title Missing";
	export let image: string = "/sample-image.jpg";
	export let mask: string = "/mask-sample.svg";

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	let tileWidth: number;
	let tileSizes: Object = {
		l: {
			mobile: 4,
			tablet: 7,
			desktop: 7
		},
		m: {
			mobile: 3,
			tablet: 5,
			desktop: 5
		},
		s: {
			mobile: 2,
			tablet: 4,
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

	console.log(color);
</script>

{#if $currentSettings !== undefined}
	<div class="p-15 title font-serif" style="flex: 0 0 {tileWidth}px; background-color: {color}">
		<h1
			class="mb-15"
			class:title-large={size === "l"}
			class:title-medium={size === "m"}
			class:title-small={size === "s"}
		>
			{title}
		</h1>
		<img src={image} class="mask mb-15" />
		<div class="flex">
			<Tag rounded={true} />
		</div>
	</div>
{:else}
	settings are undefined
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
		mask-image: url(mask-sample.svg);
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;
	}
</style>
