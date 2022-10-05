<script lang="ts">
	export let postionX = 0;
	export let positionY = 0;
	export let height = 0;
	export let width = 0;

	export let color: string;
</script>

<div
	bind:clientHeight={height}
	bind:clientWidth={width}
	class="absolute h-[100px] sm:h-[140px] w-[10px] sm:w-[15px] z-40 mix-blend-multiply {color}"
	style="left: {postionX}px; top:{positionY}px"
/>
