<script lang="ts">
	import FormatDate from "$lib/components/shared/FormatDate.svelte";

	export let fromDate: string | undefined | null = undefined;
	export let toDate: string | undefined | null = undefined;
	export let fromTime: string | undefined | null = undefined;
	export let toTime: string | undefined | null = undefined;
	export let location: string | undefined | null = undefined;
</script>

{#if fromDate || fromTime || location}
	<div class="md:ml-32">
		<p class="font-sans text-12">
			<FormatDate {fromDate} {toDate} />
			{fromTime && toTime ? `/ ${fromTime}-${toTime}` : ""}
		</p>
		<p class="hidden font-sans text-12 md:block">{location || ""}</p>
	</div>
{/if}
