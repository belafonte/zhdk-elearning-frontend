<script lang="ts">
	import type { PageServerLoad } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";

	export let data: PageServerLoad;

	$: console.log(data);
</script>

<h1 class="text-60 sm:text-130 font-serif">{data.title}</h1>
<div class="grid grid-cols-3">
	<div class="flex justify-center items-center">
		<p>{data.caption}</p>
	</div>
	<img src={PUBLIC_ASSETS + data.title_image.path} />
</div>
