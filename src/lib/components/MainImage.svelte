<script lang="ts">
	// import { API_KEY } from "$env/static/private";
	import { PUBLIC_ASSETS } from "$env/static/public";

	import { twMerge } from "tailwind-merge";
	import Image from "sveltekit-image";

	export let path: string;
	export let mask: string | null;
	export let rotation: string;
	export let cover = false;

	// const maskName = mask?.match(/(Maske.*?)_/)?.at(1);
</script>

<div class="relative flex aspect-square justify-center overflow-hidden">
	<!-- <div class="mask"> -->
	<div
		class={twMerge(
			"styled-image mask",
			rotation === "Links" && !cover ? "rotate-left" : "",
			rotation === "Rechts" && !cover ? "rotate-right" : "",
			cover ? "cover" : "contain"
		)}
	>
		<Image src={path} width={800} height={800} alt="Styled Image With Mask and Rotation" />
		<!-- </div> -->
	</div>
</div>

<style>
	:global(.styled-image img) {
		@apply h-full w-full;
		scale: 0.92;
	}

	:global(.styled-image.cover img) {
		@apply object-cover;
	}

	:global(.styled-image.contain img) {
		@apply object-contain;
	}

	.rotate-right {
		rotate: 15deg;
		scale: 0.8;
	}

	.rotate-left {
		rotate: -15deg;
		scale: 0.8;
	}
	.mask {
		mask-image: url("/masks/Maske-1-1.svg");
		mask-repeat: no-repeat;
		width: 100%;
		mask-position: center;
		mask-type: alpha;
		mask-size: cover;

		aspect-ratio: 1/1;
		object-fit: contain;
	}
</style>
