<script lang="ts">
	import arrow from "$lib/assets/icons/arrow.svg";

	export let text: string = "";
	export let rounded: boolean = false;
	export let icon: boolean = false;
	export let ref: string | null = null;
</script>

<a
	id="link"
	href={ref}
	class="border border-black px-8 sm:px-10 pt-5 pb-[2px] font-sans text-12 sm:text-14 flex w-max"
	class:rounded-full={rounded}
>
	<div class="flex">
		<p>{text}</p>
		{#if icon}
			<img id="image" class="arrow transition-all ml-4" src={arrow} alt="Open Section" />
		{/if}
	</div>
</a>

<style>
	.arrow {
		width: 10px;
		padding-bottom: 2px;
	}

	@screen sm {
		.arrow {
			width: 11px;
			padding-bottom: 3px;
		}
	}

	#link:hover #image {
		@apply ml-6;
	}
</style>
