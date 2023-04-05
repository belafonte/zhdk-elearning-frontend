<script lang="ts">
	// import { API_KEY } from "$env/static/private";
	import { onMount } from "svelte";
	import Image from "sveltekit-image";

	export let path: string;
	export let mask: string | null = null;
	export let rotation: string | null = null;
	export let cover = false;

	const maskName = mask?.match(/(Maske.*?)_/)?.at(1);

	console.log(maskName);
	onMount(async () => {
		// const image = await fetch(
		// 	"https://elearningnext.lela.ch/storage/uploads/2023/03/16/221109_ZHdK_ELearning_Masken_Maske-2-1_uid_64130e99c2c00.svg",
		// 	{
		// 		method: "GET",
		// 		headers: {
		// 			"api-key": "API-bc01a6516a0d5754ea1fb61494d7b3e0e873d689"
		// 		}
		// 	}
		// )
		// 	.then((response) => response.text())
		// 	.then((blob) => console.log(blob));
	});
</script>

<div class="relative flex aspect-square justify-center overflow-hidden">
	<img
		src={path}
		alt="Main"
		style="--url: url({maskName !== undefined ? `/masks/${maskName}.png` : ''})"
		class="scale h-full w-full"
		class:mask={maskName !== undefined}
		class:rotate-left={rotation === "Links" && !cover}
		class:rotate-right={rotation === "Rechts" && !cover}
		class:object-cover={cover}
		class:object-contain={!cover}
	/>
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
