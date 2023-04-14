<script lang="ts">
	// lib imports
	import type { PageServerData } from "./$types";

	// component imports
	import Tile from "$lib/components/shared/Tile.svelte";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";
	import TagLine from "$lib/components/templates/overview/TagLine.svelte";

	export let data: PageServerData;

	const tagLineProps = {
		tags: data.posts?.map((post) => post?.tags).flat(),
		title: data.category
	};

	let filteredTags: Set<string>;
	$: filteredTags;

	console.log(data.category);
</script>

<svelte:head>
	<title>Übersicht für {data.category}</title>
</svelte:head>

{#if data.posts}
	<TagLine bind:filteredTags {...tagLineProps} />
	<div class:extra-padding={data.category === "community"}>
		<div
			class="overview grid"
			class:grid-corse={data.category === "community" || data.category === "insights"}
			class:grid-fine={!(data.category === "community" || data.category === "insights")}
			class:space-bottom={!(data.category === "community")}
		>
			{#if data.category === "insights"}
				{#each data.posts as post}
					<MetaQuestion
						color={post?.color.colors[0]}
						text={post?.title}
						mask={post?.mask.path}
						link="/insights/{post?.slug}"
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
	:global(.overview > *) {
		min-width: 100%;
	}
	.grid-corse {
		@apply grid-cols-1;
	}

	.grid-fine {
		@apply grid-cols-2;
	}

	.extra-padding {
		padding-left: 0;
		padding-right: 0;
	}

	.space-bottom {
		@apply gap-y-32;
	}

	@screen sm {
		.extra-padding {
			padding-left: var(--app-col-size);
			padding-right: var(--app-col-size);
		}
		.space-bottom {
			@apply gap-y-42;
		}
		.grid-corse {
			@apply grid-cols-2;
		}
		.grid-fine {
			@apply grid-cols-3;
		}
	}

	@screen lg {
		.grid-fine {
			@apply grid-cols-4;
		}
	}
</style>
