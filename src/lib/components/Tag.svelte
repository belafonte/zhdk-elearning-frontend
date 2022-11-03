<script lang="ts">
	import arrow from "$lib/assets/icons/arrow.svg";

	export let text: string = "";
	export let rounded: boolean = false;
	export let icon: boolean = false;
	export let ref: string | null = null;
	export let background: boolean = false;
</script>

<a
	id="link"
	href={ref}
	class="font-sans text-12 sm:text-14 flex w-max h-max  text-black px-7 pt-[4px] pb-[2px] sm:px-10 sm:pt-[6px] sm:pb-[2px]"
	class:border-black={!background}
	class:border={!background}
	class:rounded-full={rounded}
	class:bg-white={background}
	class:bg-opacity-60={background}
>
	<div class="flex w-full">
		<p class="uppercase text-12 sm:text-14 whitespace-nowrap tracking-wider">{text}</p>
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
