<script lang="ts">
	import arrow from "$lib/assets/icons/arrow.svg";

	export let text: string = "";
	export let rounded: boolean = false;
	export let icon: boolean = false;
</script>

<div
	href="nowehere"
	class="border border-black px-8 sm:px-10 pt-5 pb-[2px] font-sans text-12 sm:text-14"
	class:rounded-full={rounded}
>
	<div class="flex">
		<p>{text}</p>
		{#if icon}
			<img class="arrow" src={arrow} alt="Open Section" />
		{/if}
	</div>
</div>

<style>
	.arrow {
		width: 10px;
		padding-bottom: 2px;
		margin-left: 5px;
	}

	@screen sm {
		.arrow {
			width: 11px;
			padding-bottom: 3px;
			margin-left: 5px;
		}
	}
</style>
