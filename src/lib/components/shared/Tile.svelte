<script lang="ts">
	// type imports
	import type { ImageType } from "$graphql/image";
	import type { EventType } from "$graphql/event";

	// Component imports
	import StyledImage from "$lib/components/shared/StyledImage.svelte";
	import Tag from "$lib/components/shared/Tag.svelte";
	import EventInfo from "$lib/components/shared/EventInfo.svelte";

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
</script>

{#if category}
	<a
		href={`/${category.toLocaleLowerCase().replaceAll(" ", "-")}/${slug}`}
		class="title inline-block h-min overflow-hidden p-[8px] font-serif transition-all
			hover:-translate-y-4 hover:shadow-2xl sm:p-10 lg:p-15"
		class:ml-auto={offset === "l"}
		class:mr-auto={offset === "r"}
		class:tile-sm={category === "Experience"}
		class:tile-md={category === "Cosmos"}
		class:tile-lg={category === "Community"}
		style="background-color: {color && color.colors ? color.colors[0] : '#EEEEEE'}"
	>
		<h1
			class="line-clamp-6 overflow-hidden text-ellipsis pb-5 sm:line-clamp-5"
			class:title-large={category === "Community"}
			class:title-medium={category === "Cosmos"}
			class:title-small={category === "Experience"}
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
</style>
