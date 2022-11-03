<script lang="ts">
	export let path: string;
	export let mask: string;
	export let link: string;
</script>

<a href={link} class="relative">
	<img src={path} alt="Meta Question" />
	<div class="absolute top-0 left-0 w-full h-full">
		<img
			class="w-full h-full object-contain hover:rotate-12 transition-all"
			alt="Mask"
			src={mask}
		/>
	</div>
</a>
