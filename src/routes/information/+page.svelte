<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import MainImage from "$lib/components/MainImage.svelte";
	import Tag from "$lib/components/Tag.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Information</title>
</svelte:head>

<p
	class="text-23 sm:text-36 lg:text-50 hyphens-auto mb-72 sm:mb-84 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]"
>
	{@html data.vision}
</p>
<p
	class="text-23 sm:text-36 lg:text-50 hyphens-auto mb-32 sm:mb-42 pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]"
>
	{@html data.team}
</p>
<div class="grid grid-cols-2 sm:grid-cols-4 mb-72 sm:mb-84">
	{#each data.team_member as member}
		<div class="font-serif text-22 pl-10 pr-7 sm:pl-15 sm:pr-10">
			<MainImage
				path={PUBLIC_ASSETS + member.image.path}
				mask={member.mask !== null ? PUBLIC_ASSETS + member.mask.path : null}
			/>
			<div class="">{member.name}</div>
			<div class="">{member.description}</div>
			<div id="links" class="pt-5">
				<a href={member.link}>
					<Tag text="Artikel Link" icon={true} rounded={true} />
				</a>

				<a href={"mailto:" + member.mail}>
					<Tag text="Mail" icon={true} rounded={true} on:click={() => {}} />
				</a>
				<a href={member.linked_in}>
					<Tag text="LinkedIn" icon={true} rounded={true} />
				</a>
			</div>
		</div>
	{/each}
</div>
<p class="text-23 sm:text-36 lg:text-50 hyphens-auto  pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
	{@html data.contact}
</p>

<style>
	:global(p h1) {
		margin-bottom: 32px;
	}
	:global(#links a) {
		@apply mt-5;
	}

	.hyphens-auto {
		hyphens: auto;
	}
</style>
