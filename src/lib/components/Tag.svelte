<script lang="ts">
	import arrow from "$lib/assets/icons/arrow.svg";

	export let text = "";
	export let rounded = false;
	export let icon = false;
	export let background = false;
	export let dimmed = false;
</script>

<div
	data-link
	class="flex h-max max-w-fit px-7 pb-[2px] pt-[4px] font-sans text-12 text-black hover:opacity-100 sm:px-10 sm:pb-[2px] sm:pt-[6px] lg:text-14"
	class:border-black={!background}
	class:border={!background}
	class:rounded-full={rounded}
	class:bg-white={background}
	class:bg-opacity-60={background}
	class:opacity-30={dimmed}
>
	<div class="flex max-w-full">
		<p
			class="whitespace-nowrap text-12 uppercase tracking-wider sm:text-14 overflow-ellipsis overflow-hidden max-w-min"
		>
			{text}
		</p>
		{#if icon}
			<img id="image" class="arrow ml-4 transition-all" src={arrow} alt="Open Section" />
		{/if}
	</div>
</div>

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

	[data-link]:hover #image {
		@apply ml-6;
	}
</style>
