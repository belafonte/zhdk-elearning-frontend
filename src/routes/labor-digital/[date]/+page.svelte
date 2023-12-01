<!-- 

    File: Labor Digital View

    Author: Jan Pistor | Bureau 314
    Year: 2023

    Description: Shows the Labor Route

 -->

<script lang="ts">
	import type { PageServerData } from "./$types";

	// component imports
	import Tag from "$lib/components/Tag.svelte";
	import StyledImage from "$lib/components/shared/StyledImage.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Labor Digital</title>
</svelte:head>

<p
	class="text mb-72 hyphens-auto pl-10 pr-7 text-23 sm:mb-84 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.text}
</p>

{#if data.person}
	<div class="person mb-72 grid grid-cols-2 gap-y-32 sm:mb-84 sm:grid-cols-4 sm:gap-y-42">
		{#each data.person as person}
			<div class="pl-10 pr-7 font-serif text-22 sm:pl-15 sm:pr-10">
				<StyledImage image={person?.image} mask={person?.mask} />
				<div class="">{person?.name || ""}</div>
				<div class="">{person?.description || ""}</div>
				<div class="pt-5" data-links>
					{#each person.link as link}
						<a
							href={link.url || ""}
							target={link.url.search("elearning.zhdk.ch") !== -1 ? "_self" : "_blank"}
						>
							<Tag text={link.display} icon={true} rounded={true} />
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/if}
<p class="hyphens-auto pl-10 pr-7 text-23 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50">
	{@html data.note}
</p>

<style>
	:global(p h1) {
		margin-bottom: 32px;
	}

	:global(.text ul) {
		@apply mt-[32px];
	}

	:global(.text li) {
		@apply list-disc ml-32 my-[16px];
	}

	[data-links] a {
		@apply mt-5 block;
	}

	.hyphens-auto {
		hyphens: auto;
	}
</style>
