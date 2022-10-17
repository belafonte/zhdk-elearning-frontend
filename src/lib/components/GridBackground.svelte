<script lang="ts">
	export let numColumns: number;
	export let column: HTMLElement | null;
	export let fixed: boolean = false;
</script>

<div id="reference" class="px-15 grid-settings h-full w-full" class:fixed>
	{#each new Array(numColumns) as col, index}
		{#if index === 0}
			<div bind:this={column} class="border-r border-r-light-gray" />
		{:else}
			<div class="border-r border-r-light-gray" />
		{/if}
	{/each}
</div>
