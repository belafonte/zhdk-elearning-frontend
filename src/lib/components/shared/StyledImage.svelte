<script lang="ts">
	// import { API_KEY } from "$env/static/private";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import { twMerge } from "tailwind-merge";

	import Image from "sveltekit-image";
	import type { ImageType } from "../../../graphql/image";

	export let image: ImageType | string;
	export let mask: ImageType | string | undefined = undefined;

	export let rotation: string | undefined | null = undefined;
	export let cover = false;

	let className: string | undefined = undefined;
	export { className as class };

	const regex = /(Maske.*?)_/;
	const maskName =
		typeof mask === "string" ? mask?.match(regex)?.at(1) : mask?.path.match(regex)?.at(1);
</script>

<div class={twMerge("relative flex aspect-square justify-center overflow-hidden", className)}>
	<div
		style="--url: url({mask !== undefined ? `/masks/${maskName}.png` : ''})"
		class={twMerge(
			"styled-image",
			rotation === "Links" && !cover ? "rotate-left" : "",
			rotation === "Rechts" && !cover ? "rotate-right" : "",
			cover ? "cover" : "contain"
		)}
		class:mask
	>
		{#if typeof image === "string"}
			<Image
				src={image}
				width={800}
				height={800}
				alt="Styled hero image with or without a Mask / Rotation"
			/>
		{:else}
			<Image
				src={PUBLIC_ASSETS + image.path}
				width={image.width}
				height={image.height}
				alt="Styled hero image with or without a Mask / Rotation"
			/>
		{/if}
	</div>
</div>

<style>
	:global(.styled-image img) {
		@apply h-full w-full;
	}

	:global(.styled-image.cover img) {
		@apply object-cover;
	}

	:global(.styled-image.contain img) {
		@apply object-contain;
	}

	.rotate-right {
		rotate: 15deg;
	}

	.rotate-left {
		rotate: -15deg;
	}
	:global(.mask img) {
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
