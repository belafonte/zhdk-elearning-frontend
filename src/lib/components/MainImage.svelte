<script lang="ts">
	export let path: string;
	export let mask: string | null = null;
	export let rotation: string | null = null;
</script>

<img
	src={path}
	alt="Masked"
	style="--url: url({mask !== null ? mask : ''})"
	class:mask={mask !== null}
	class:rotate-left={rotation === "Links"}
	class:rotate-right={rotation === "Rechts"}
/>

<style>
	.rotate-right {
		rotate: 15deg;
		scale: 0.7;
	}

	.rotate-left {
		rotate: -15deg;
		scale: 0.7;
	}
	.mask {
		mask-image: var(--url);
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: scale-down;
	}
</style>
