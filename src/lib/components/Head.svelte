<!-- 
    Filename: Head.svelte
    Author: Jan Pistor | Bureau 314

    Description: Handles the Header Section and navigation of the page
 -->
<script lang="ts">
	import { onMount } from "svelte";
	import plus from "$lib/assets/icons/plus.svg";
	import { page } from "$app/stores";

	let body: HTMLElement | null = null;
	let menuOpened: boolean = false;

	function openMenu() {
		if (body !== null) {
			menuOpened ? body.classList.remove("overflow-hidden") : body.classList.add("overflow-hidden");
			menuOpened = !menuOpened;
		} else {
			console.warn("body not available");
		}
	}

	onMount(() => {
		body = document.querySelector("body");
	});
</script>

{#if !$page.params.hasOwnProperty("detail")}
	<header class="sticky top-0 mb-[84px] bg-white z-50 w-full" class:h-screen={menuOpened}>
		<nav class="text-36 sm:text-68 h-full flex flex-col">
			<div class=" flex border-b border-light-gray p-15 pb-5">
				<a href="/" on:click={() => (menuOpened = false)}>E</a>
				<a href="/" on:click={() => (menuOpened = false)} class="ml-auto font-sans flex">Learning</a
				>
				<button on:click={() => openMenu()}
					><img
						alt="Open Menu Button"
						class="w-32 sm:w-60 pb-10 ml-15 transition-transform"
						class:rotate-45={menuOpened}
						src={plus}
					/></button
				>
			</div>
			{#if menuOpened}
				<div
					id="menu"
					class="w-full h-full grid grid-cols-1 lg:grid-cols-2"
					on:click={() => (menuOpened = false)}
				>
					<div class="flex flex-col">
						<a>Leitfragen</a>
						<a>Events</a>
						<a href="/knowledge/overview">Knowledge in use</a>
						<a href="/kosmos/overview">Kosmos</a>
						<a href="/community/overview">Community</a>
						<a>Glossar</a>
						<a class="mt-auto mb-10 text-12 sm:!text-14 !text-black uppercase ">Journal</a>
					</div>
					<div class="flex flex-col border-t sm:border-l ">
						<a href="/angebot">Angebot</a>
						<a href="/information">Information</a>

						<a class="mt-auto mb-10 text-12 sm:!text-14 !text-black uppercase ">Hintergrund</a>
					</div>
				</div>
			{/if}
		</nav>
	</header>
{/if}

<style>
	#menu a {
		@apply text-dark-gray pt-10 pl-15;
	}
	#menu a:hover {
		@apply text-black;
	}
</style>
