<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Impressung</title>
</svelte:head>

<p class="text-24 sm:text-50  pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
	{@html data.content}
</p>
