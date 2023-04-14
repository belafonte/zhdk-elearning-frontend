<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import type { ImageType } from "$graphql/image";

	// component imports
	import CpImage from "./CpImage.svelte";

	export let image: ImageType | undefined | null;
	export let mask: ImageType | string | undefined = undefined;
	export let rotation: string | undefined | null = undefined;
	export let cover = false;

	let className: string | undefined = undefined;
	export { className as class };

	const regex = /(Maske.*?)_/;
	const maskName =
		typeof mask === "string" ? mask?.match(regex)?.at(1) : mask?.path.match(regex)?.at(1);
</script>

{#if image}
	<div class={twMerge("relative flex aspect-square justify-center overflow-hidden", className)}>
		<div
			style="--url: url({mask !== undefined ? `/masks/${maskName}.svg` : ''})"
			class={twMerge(
				"styled-image",
				rotation === "Links" && !cover ? "rotate-left" : "",
				rotation === "Rechts" && !cover ? "rotate-right" : "",
				cover ? "cover" : "contain"
			)}
			class:mask
		>
			<CpImage _id={image?._id} width={image?.width} height={image?.height} />
		</div>
	</div>
{/if}

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
		scale: 0.8;
	}

	.rotate-left {
		rotate: -15deg;
		scale: 0.8;
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
