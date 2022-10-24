<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import MainImage from "$lib/components/MainImage.svelte";
	import Link from "$lib/components/Link.svelte";

	export let data: PageServerData;

	console.log(data);
</script>

<!-- <p class="text-24 sm:text-50 mb-72 sm:mb-84">{@html data.vision}</p>
<p class="text-24 sm:text-50 mb-32 sm:mb-42">{@html data.team}</p>
<div class="grid grid-cols-2 sm:grid-cols-4 mb-72 sm:mb-84">
	{#each data.team_member as member}
		<div class="font-serif text-22">
			<MainImage path={PUBLIC_ASSETS + member.image.path} mask={PUBLIC_ASSETS + member.mask.path} />
			<div class="">{member.name}</div>
			<div class="">{member.description}</div>
			<div class="pt-5">
				<Link ref="Hello" display="Link" />
			</div>
		</div>
	{/each}
</div>
<p class="text-24 sm:text-50">{@html data.contact}</p> -->
