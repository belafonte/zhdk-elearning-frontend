<script lang="ts">
	export let path: string;
	export let mask: string | null = null;
	export let rotation: string | null = null;
	export let cover: boolean = false;
</script>

<div class="relative flex aspect-square justify-center overflow-hidden">
	<img
		src={path}
		alt="Main"
		class="scale h-full w-full"
		class:rotate-left={rotation === "Links" && !cover}
		class:rotate-right={rotation === "Rechts" && !cover}
		class:object-cover={cover}
		class:object-contain={!cover}
	/>
	<img alt="mask" class="mask absolute top-0 left-0" src={mask} />
</div>

<style>
	.rotate-right {
		rotate: 15deg;
		scale: 0.8;
	}

	.rotate-left {
		rotate: -15deg;
		scale: 0.8;
	}
	.mask {
		mix-blend-mode: multiply;
	}
	/*.mask {
		mask-image: var(--url);
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: contain;
	}*/
</style>
