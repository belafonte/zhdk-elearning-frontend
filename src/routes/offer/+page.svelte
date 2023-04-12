<script lang="ts">
	import type { PageServerData } from "./$types";
	import Tag from "$lib/components/Tag.svelte";
	import CpImage from "$lib/components/shared/CpImage.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Angebot</title>
</svelte:head>

{#if data.offers}
	{#each data.offers as offer}
		<div data-offers class="mt-72 flex flex-col sm:mt-84">
			<p class="mb-32 pl-10 pr-7 text-24 sm:mb-42 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50">
				{@html offer?.text || ""}
			</p>
			{#if offer?.image}
				<CpImage
					class="w-1/2 self-center"
					_id={offer.image._id}
					width={offer.image.width}
					height={offer.image.height}
				/>
			{/if}
			{#if offer}
				<a href={offer.link} target="_blank" class="self-center">
					<Tag text="Link to Website" icon={true} rounded={true} />
				</a>
			{/if}
		</div>
	{/each}
{/if}

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
