<script lang="ts">
	import { page } from "$app/stores";

	export let postionX = 0;
	export let positionY = 0;
	export let height = 0;
	export let width = 0;
</script>

<div
	bind:clientHeight={height}
	bind:clientWidth={width}
	class="absolute h-[100px] sm:h-[140px] w-[10px] sm:w-[15px] z-[70]"
	style=" transform: translate(-{width / 2}px, 0) translate3d({postionX}px, {Math.floor(
		positionY
	)}px, 0)"
	style:background-color={$page.data.highlightColor}
/>
