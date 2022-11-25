<script lang="ts">
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { onMount } from "svelte";

	export let data: PageServerData;

	let terms = data.terms.sort((a: any, b: any) => {
		return a.term > b.term;
	});

	let termsByAlphabet: any = {};

	onMount(() => {
		terms.forEach((el: any) => {
			let firstChar = el.term.at(0);
			if (termsByAlphabet[firstChar] === undefined) {
				termsByAlphabet[firstChar] = [el];
			} else {
				termsByAlphabet[firstChar].push(el);
			}
		});
	});
</script>

<svelte:head>
	<title>Glossar</title>
</svelte:head>

<div class="grid grid-cols-1 gap-y-42 font-serif sm:grid-cols-4">
	{#each Object.keys(termsByAlphabet) as letter}
		<p
			class="relative top-0 justify-self-center text-[280px] leading-[0.7] sm:top-[-110px] sm:leading-normal"
			style:color={data.colors[letter.toLowerCase()]}
		>
			{letter}
		</p>
		{#each termsByAlphabet[letter] as term}
			<div>
				{#if term.image !== null}
					<img alt="Term Illustration" class="mb-32" src={PUBLIC_ASSETS + term.image.path} />
				{/if}
				<p class="pl-10 pr-7 text-20 sm:pl-[40px] sm:pr-[20px] sm:text-23 lg:text-22">
					<span style:color={data.colors[letter.toLowerCase()]}>{term.term}</span>
					{term.definition}
				</p>
			</div>
		{/each}
	{/each}
</div>
