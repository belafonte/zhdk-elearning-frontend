<!-- 

    File: Information View

    Author: Jan Pistor | Bureau 314
    Year: 2023

    Description: Shows the Inforamtion Route

 -->

<script lang="ts">
	import type { PageServerData } from "./$types";

	// component imports
	import Tag from "$lib/components/Tag.svelte";
	import StyledImage from "$lib/components/shared/StyledImage.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Information</title>
</svelte:head>

<p
	class="mb-72 hyphens-auto pl-10 pr-7 text-23 sm:mb-84 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.vision}
</p>
<p
	class="mb-32 hyphens-auto pl-10 pr-7 text-23 sm:mb-42 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.team}
</p>

{#if data.team_member}
	<div class="mb-72 grid grid-cols-2 gap-y-32 sm:mb-84 sm:grid-cols-4 sm:gap-y-42">
		{#each data.team_member as member}
			<div class="pl-10 pr-7 font-serif text-22 sm:pl-15 sm:pr-10">
				<StyledImage image={member?.image} mask={member?.mask} />
				<div class="">{member?.name || ""}</div>
				<div class="">{member?.description || ""}</div>
				<div class="pt-5" data-links>
					<a href={member?.link || ""}>
						<Tag text="Artikel Link" icon={true} rounded={true} />
					</a>

					<a href={"mailto:" + member?.mail || ""} class="mt-5">
						<Tag text="Mail" icon={true} rounded={true} />
					</a>
					<a href={member?.linked_in || ""} target="_blank">
						<Tag text="LinkedIn" icon={true} rounded={true} />
					</a>
				</div>
			</div>
		{/each}
	</div>
{/if}
<p class="hyphens-auto pl-10 pr-7 text-23 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50">
	{@html data.contact}
</p>

<style>
	:global(p h1) {
		margin-bottom: 32px;
	}
	[data-links] a {
		@apply mt-5 block;
	}

	.hyphens-auto {
		hyphens: auto;
	}
</style>
