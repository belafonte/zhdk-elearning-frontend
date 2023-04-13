<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Tag from "$lib/components/shared/Tag.svelte";

	export let tags: string[] | undefined;
	export let title: string;
	export let filteredTags: Set<string> = new Set<string>();

	const uniqueTags = new Set<string>();
	const filter = new Set<string>();
	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	function filterTag(tag: string) {
		filter.has(tag) ? filter.delete(tag) : filter.add(tag);
		filteredTags = filter;
	}

	$: if (tags) {
		tags.forEach((tag) => tag && uniqueTags.add(tag));
	}
</script>

<div
	class="fixed flex w-screen justify-center"
	style:margin-top="-{(3 * $currentSettings.headerHeight) / 2}px"
>
	<div class="absolute left-0 flex">
		{#each [...uniqueTags] as tag}
			<div class="mr-5 sm:mr-8">
				<button on:click={() => filterTag(tag)}>
					<Tag text={tag} rounded={true} dimmed={!filter.has(tag)} />
				</button>
			</div>
		{/each}
	</div>
	<Tag text={title.toUpperCase()} background={true} />
</div>
