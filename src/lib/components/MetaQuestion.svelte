<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import type { ImageType } from "$graphql/image";

	export let color: any;
	export let text: string | undefined;
	export let mask: ImageType | string | undefined = undefined;
	export let link: string;

	console.log(color);

	let className: string | undefined = undefined;
	export { className as class };

	const regex = /(Maske.*?)_/;
	const maskName =
		typeof mask === "string" ? mask?.match(regex)?.at(1) : mask?.path.match(regex)?.at(1);

	const textReg = /\+\+(.*?)\+\+/;
	const clean = text?.match(textReg)?.at(1);
	const replaced = text?.replace(textReg, `<span style="color: ${color}">${clean}</span>`);
</script>

<a href={link} class={twMerge("relative mb-15", className)}>
	<p class="text-size text-center font-serif">{@html replaced}</p>
	<div class="absolute left-0 top-0 h-full w-full">
		<img
			class="h-full w-full object-contain opacity-30 transition-all hover:rotate-12"
			alt="Mask"
			src={`/masks/${maskName}.svg`}
		/>
	</div>
</a>

<style>
	.text-size {
		font-size: 12vw;
	}

	@screen sm {
		.text-size {
			font-size: 7vw;
		}
	}
</style>
