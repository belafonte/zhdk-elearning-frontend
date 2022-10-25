<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import Tag from "$lib/components/Tag.svelte";

	export let data: PageServerData;
</script>

{#each data.offers as offer}
	<div class="flex flex-col mb-72 sm:mb-84">
		<p class="text-24 sm:text-50 mb-32 sm:mb-42">{@html offer.text}</p>
		{#if offer.image !== null}
			<img class="w-1/2 self-center" src={PUBLIC_ASSETS + offer.image.path} />
		{/if}
		{#if offer.link !== null}
			<div class="self-center">
				<Tag ref={offer.link} text="Link to Website" icon={true} rounded={true} />
			</div>
		{/if}
	</div>
{/each}
