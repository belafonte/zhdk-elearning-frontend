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
	class="mb-72 hyphens-auto pl-10 pr-7 text-23 sm:mb-84 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.vision}
</p>
<p
	class="mb-32 hyphens-auto pl-10 pr-7 text-23 sm:mb-42 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.team}
</p>
<div class="mb-72 grid grid-cols-2 gap-y-32 sm:mb-84 sm:grid-cols-4 sm:gap-y-42">
	{#each data.team_member as member}
		<div class="pl-10 pr-7 font-serif text-22 sm:pl-15 sm:pr-10">
			<MainImage
				path={PUBLIC_ASSETS + member.image.path}
				mask={member.mask !== null ? PUBLIC_ASSETS + member.mask.path : null}
			/>
			<div class="">{member.name}</div>
			<div class="">{member.description}</div>
			<div class="pt-5" data-links>
				<a href={member.link}>
					<Tag text="Artikel Link" icon={true} rounded={true} />
				</a>

				<a href={"mailto:" + member.mail} class="mt-5">
					<Tag text="Mail" icon={true} rounded={true} />
				</a>
				<a href={member.linked_in} target="_blank">
					<Tag text="LinkedIn" icon={true} rounded={true} />
				</a>
			</div>
		</div>
	{/each}
</div>
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
