<script lang="ts">
	export let date: string | undefined | null = undefined;
	export let time: string | undefined | null = undefined;
	export let location: string | undefined | null = undefined;
</script>

{#if date || time || location}
	<div class="md:ml-32">
		<p class="font-sans text-12">{date} / {time}</p>
		<p class="hidden font-sans text-12 md:block">{location}</p>
	</div>
{/if}
