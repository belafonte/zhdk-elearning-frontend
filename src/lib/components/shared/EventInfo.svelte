<script lang="ts">
	import FormatDate from "$lib/components/shared/FormatDate.svelte";

	export let fromDate: string | undefined | null = undefined;
	export let toDate: string | undefined | null = undefined;
	export let fromTime: string | undefined | null = undefined;
	export let toTime: string | undefined | null = undefined;
	export let location: string | undefined | null = undefined;
</script>

{#if fromDate || fromTime || location}
	<div class="ml-auto">
		<p class="font-sans text-12">
			<FormatDate {fromDate} {toDate} />
			{fromTime && toTime ? `/ ${fromTime}-${toTime}` : ""}
		</p>
		<p class="font-sans text-12">{location || ""}</p>
	</div>
{/if}

<style>
	@screen md {
		.space-left {
			margin-left: clamp(0px, 100%, 30px);
		}
	}
</style>
