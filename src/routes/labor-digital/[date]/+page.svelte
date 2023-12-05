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
	import { onMount } from "svelte";

	export let data: PageServerData;

	onMount(() => {
		const bg = data.color_bg?.colors[0];
		const lines = data.color_lines?.colors[0];
		const ref = document.getElementById("reference");
		if (ref) {
			ref.style.background = bg;
			Array.from(ref.children).map((child: any, index: number) => {
				if (index === 0) child.style.borderLeft = `solid 1px ${lines}`;
				child.style.borderRight = `solid 1px ${lines}`;
			});
		}
	});
</script>

<svelte:head>
	<title>Labor Digital</title>
</svelte:head>

<p
	class="text mb-72 hyphens-auto pl-10 pr-7 text-23 sm:mb-84 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
>
	{@html data.text}
</p>

{#if data.persons}
	{#each data.persons as personBlock}
		<!-- {person.person?.at(0).name} -->
		{#if personBlock?.person}
			<p
				class="text hyphens-auto pl-10 pr-7 text-23 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50"
			>
				{@html personBlock?.text}
			</p>
			<div class="person mb-72 grid grid-cols-2 gap-y-32 sm:mb-84 sm:grid-cols-4 sm:gap-y-42">
				{#each personBlock.person as p}
					<div class="pl-10 pr-7 font-serif text-22 sm:pl-15 sm:pr-10">
						<StyledImage image={p?.image} mask={p?.mask} />
						<div class="">{p?.name || ""}</div>
						<div class="">{p?.description || ""}</div>
						<div class="pt-5" data-links>
							{#if p?.link}
								{#each p?.link as link}
									<a
										href={link?.url || ""}
										target={link?.url?.search("elearning.zhdk.ch") !== -1 ? "_self" : "_blank"}
									>
										<Tag text={link?.display || ""} icon={true} rounded={true} />
									</a>
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/each}
{/if}
<p class="text hyphens-auto pl-10 pr-7 text-23 sm:pl-[40px] sm:pr-[20px] sm:text-36 lg:text-50">
	{@html data.note}
</p>

<style>
	:global(p h1) {
		margin-bottom: 32px;
	}

	:global(.text ul) {
		@apply mt-[32px];
	}

	:global(.text a) {
		@apply underline !important;
	}

	:global(.text a::after) {
		font-family: "icomoon" !important;
		content: "\e900";
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
