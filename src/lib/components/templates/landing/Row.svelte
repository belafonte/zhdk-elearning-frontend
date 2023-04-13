<script lang="ts">
	// imports
	import arrow from "$lib/assets/icons/arrow.svg";

	export let title = "Title Missing";
	export let url: string;
</script>

<div class="group">
	<a class="flex" href="/{url}/overview">
		<h1 class="font-sans text-36 sm:text-50">{title}</h1>
		<div class="relative ml-auto mr-15 w-[30px] sm:mt-5 sm:w-[40px]">
			<div
				class="absolute bottom-0 right-[30px] hidden w-max
				text-36 opacity-0 transition-all duration-1000
				group-hover:right-[50px] group-hover:opacity-100 sm:block"
			>
				Click for More
			</div>
			<img alt="Arrow" src={arrow} />
		</div>
	</a>
	<div
		class="row relative -ml-15 -mt-4 mb-32 block
		w-screen overflow-x-auto pb-12 pl-15 pt-4 transition-all sm:mb-[51px]"
	>
		<div class="flex w-max">
			<slot />
		</div>
	</div>
</div>

<style>
	.row:hover {
		@apply pl-0;
	}
</style>
