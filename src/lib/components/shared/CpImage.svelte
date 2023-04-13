<script lang="ts">
	import { onMount } from "svelte";
	import { PUBLIC_ENDPOINT } from "$env/static/public";
	import { twMerge } from "tailwind-merge";

	export let _id: string;
	export let width: number;
	export let height: number;
	export let loading: "lazy" | "eager" = "lazy";
	export let alt = "";
	export let decoding: "sync" | "async" | "auto" = "auto";

	let className: string | undefined = undefined;
	export { className as class };

	const assetApi = PUBLIC_ENDPOINT + "/assets/image/";
	const path = assetApi + _id;
	const small = path + "?m=fitToWidth&w=480&q=80&mime=webp&o=1";
	const large = path + "?m=fitToWidth&w=1024&q=80&mime=webp&o=1";

	let img: null | HTMLImageElement = null;

	onMount(() => {
		if (img) {
			img.setAttribute("srcset", `${small} 480w, ${large} 1024w`);
			img.setAttribute("src", large);
		}
	});
</script>

<img
	bind:this={img}
	class={twMerge("", className)}
	sizes="(max-width: 600px) 480px,
         1024px"
	{width}
	{height}
	{loading}
	{decoding}
	{alt}
/>
