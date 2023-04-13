<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";

	// component imports
	import Tile from "$lib/components/shared/Tile.svelte";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";
	import TagLine from "$lib/components/templates/overview/TagLine.svelte";

	export let data: PageServerData;

	const tagLineProps = {
		tags: data.posts?.map((post) => post?.tags).flat(),
		title: data.category
	};

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	let cols = 4;
	let extraPadding = 0;

	let filteredTags: Set<string>;
	$: filteredTags;

	// add padding to center 2 columns layout
	$: if (
		cols === 2 &&
		$currentSettings.type !== "mobile" &&
		$currentSettings.type !== "tablet" &&
		data.category !== "insights"
	) {
		extraPadding = $currentSettings.colWidth;
	} else {
		extraPadding = 0;
	}

	$: if ($currentSettings.type === "mobile") {
		cols = data.cols.mobile;
	} else if ($currentSettings.type === "tablet") {
		cols = data.cols.tablet;
	} else {
		cols = data.cols.desktop;
	}
</script>

<svelte:head>
	<title>Übersicht für {data.category}</title>
</svelte:head>

{#if data.posts}
	<TagLine bind:filteredTags {...tagLineProps} />
	<div style:padding-left="{extraPadding}px" style:padding-right="{extraPadding}px">
		<div
			class="grid"
			class:grid-cols-2={cols === 2}
			class:grid-cols-3={cols === 3}
			class:grid-cols-4={cols === 4}
			class:space-bottom={!(data.category === "community" && $currentSettings.type === "mobile")}
		>
			{#if data.category === "insights"}
				{#each data.posts as entry}
					<MetaQuestion
						path={PUBLIC_ASSETS + entry?.title_image.path}
						mask={PUBLIC_ASSETS + entry?.mask.path}
						link="/insights/{entry?.slug}"
					/>
				{/each}
			{:else}
				{#each data?.posts as post}
					{#if filteredTags?.size > 0}
						{#if post && post.tags.some((tag) => filteredTags.has(tag))}
							<Tile {...post} />
						{/if}
					{:else}
						<Tile {...post} />
					{/if}
				{/each}
			{/if}
		</div>
	</div>
{:else}
	Nothing online yet
{/if}

<style>
	.space-bottom {
		@apply gap-y-32;
	}

	@screen sm {
		.space-bottom {
			@apply gap-y-42;
		}
	}
</style>
