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

<div class="grid gap-y-42 grid-cols-1 sm:grid-cols-4 font-serif">
	{#each Object.keys(termsByAlphabet) as letter}
		<p
			class="text-[280px] justify-self-center relative top-0 sm:top-[-110px]"
			style:color={data.colors[letter.toLowerCase()]}
		>
			{letter}
		</p>
		{#each termsByAlphabet[letter] as term}
			<div>
				{#if term.image !== null}
					<img class="mb-32" src={PUBLIC_ASSETS + term.image.path} />
				{/if}
				<p class="text-20 sm:text-22">
					<span style:color={data.colors[letter.toLowerCase()]}>{term.term}</span>
					{term.definition}
				</p>
			</div>
		{/each}
	{/each}
</div>
