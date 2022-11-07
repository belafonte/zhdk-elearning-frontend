<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import Tag from "$lib/components/Tag.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Angebot</title>
</svelte:head>

{#each data.offers as offer}
	<div class="flex flex-col mb-84 sm:mb-[168px]">
		<p class="text-24 sm:text-50 mb-32 sm:mb-42 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
			{@html offer.text}
		</p>
		{#if offer.image !== null}
			<img alt="Symbol" class="w-1/2 self-center" src={PUBLIC_ASSETS + offer.image.path} />
		{/if}
		{#if offer.link !== null}
			<a href={offer.link} class="self-center">
				<Tag text="Link to Website" icon={true} rounded={true} />
			</a>
		{/if}
	</div>
{/each}

<style>
	div > *:nth-child(3) {
		margin-top: 32px;
	}
</style>
