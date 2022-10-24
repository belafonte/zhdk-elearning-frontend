<script lang="ts">
	export let ref: string;
	export let display: string;
	import arrow from "$lib/assets/icons/arrow.svg";
</script>

<a
	id="link"
	class="rounded-full flex border border-black w-max font-sans text-12 sm:text-14"
	href={ref}
>
	<p class="relative top-[1px] sm:top-[3px] pl-10">{display}</p>
	<img
		id="image"
		src={arrow}
		class="h-[9px] sm:h-[11px] self-center px-10 transition-all"
		alt="arrow"
	/>
</a>

<style>
	#link:hover #image {
		@apply pl-6;
	}
</style>
