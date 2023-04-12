<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import Tag from "$lib/components/Tag.svelte";
	import Image from "sveltekit-image";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Angebot</title>
</svelte:head>

{#each data.offers as offer}
	<div data-offers class="mt-72 flex flex-col sm:mt-84">
		<p class="mb-32 pl-10 pr-7 text-24 sm:mb-42 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50">
			{@html offer.text}
		</p>
		{#if offer.image !== null}
			<Image
				src={PUBLIC_ASSETS + offer.image.path}
				width={800}
				height={600}
				alt="My lovely image"
				class="w-1/2 self-center"
			/>
			<!-- <img alt="Symbol" class="w-1/2 self-center" src={PUBLIC_ASSETS + offer.image.path} /> -->
		{/if}
		{#if offer.link !== null}
			<a href={offer.link} target="_blank" class="self-center">
				<Tag text="Link to Website" icon={true} rounded={true} />
			</a>
		{/if}
	</div>
{/each}

<style>
	[data-offers] > * {
		margin-top: 32px;
	}

	[data-offers]:first-child {
		@apply mt-0;
	}

	:global([data-offers] h1) {
		@apply mb-32 !important;
	}
</style>
