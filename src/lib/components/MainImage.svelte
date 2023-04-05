<script lang="ts">
	// import { API_KEY } from "$env/static/private";
	import { onMount } from "svelte";
	import { twMerge } from "tailwind-merge";
	import Image from "sveltekit-image";

	export let path: string;
	export let mask: string | null = null;
	export let rotation: string | null = null;
	export let cover = false;

	// const maskName = mask?.match(/(Maske.*?)_/)?.at(1);
</script>

<div class="relative flex aspect-square justify-center overflow-hidden">
	<!-- <div class="mask"> -->
	<div
		class={twMerge(
			"scale h-full w-full",
			rotation === "links" && !cover ? "rotate-left" : "",
			rotation === "rechts" && !cover ? "rotate-right" : ""
		)}
	>
		<Image
			class={twMerge(cover ? "object-cover" : "object-contain")}
			src={path}
			width={800}
			height={800}
			alt="Main"
		/>
	</div>
	<!-- </div> -->
	<!-- <img alt="mask" class="mask absolute left-0 top-0" src={mask} /> -->
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
		mask-image: url("/masks/Maske-1-1.png");
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: contain;
	}
</style>
