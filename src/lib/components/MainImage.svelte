<script lang="ts">
	export let path: string;
	export let mask: string | null = null;
	export let rotation: string | null = null;
	export let cover: boolean = false;
</script>

<div class="flex aspect-square justify-center overflow-hidden">
	<img
		src={path}
		alt="Main"
		style="--url: url({mask !== null ? mask : ''})"
		class="scale h-full w-full"
		class:mask={mask !== null}
		class:rotate-left={rotation === "Links" && !cover}
		class:rotate-right={rotation === "Rechts" && !cover}
		class:object-cover={cover}
		class:object-contain={!cover}
	/>
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
		mask-image: var(--url);
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: contain;
	}
</style>
