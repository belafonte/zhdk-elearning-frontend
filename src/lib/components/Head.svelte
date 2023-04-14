<!-- 
    Filename: Head.svelte
    Author: Jan Pistor | Bureau 314

    Description: Handles the Header Section and navigation of the page
 -->
<script lang="ts">
	import { onMount } from "svelte";
	import plus from "$lib/assets/icons/plus.svg";
	import { page } from "$app/stores";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	let body: HTMLElement | null = null;
	let menuOpened = false;
	let prevScroll = 0;
	let scroll = 0;
	let scrollDir: "up" | "down" = "down";

	// let headerHeight: number;

	function openMenu() {
		if (body !== null) {
			body.classList.add("overflow-hidden");
			menuOpened = true;
		} else {
			console.warn("body not available");
		}
	}

	function closeMenu() {
		if (body !== null) {
			body.classList.remove("overflow-hidden");
			menuOpened = false;
		} else {
			console.warn("body not available");
		}
	}

	$: {
		if (prevScroll > scroll) {
			scrollDir = "up";
		} else {
			scrollDir = "down";
		}

		prevScroll = scroll;
	}

	onMount(() => {
		body = document.querySelector("body");
	});
</script>

<svelte:window bind:scrollY={scroll} />

{#if !$page.params.hasOwnProperty("detail")}
	<header
		class="top-[-{$currentSettings.headerHeight}px] z-[100] mb-72 w-full bg-white transition duration-300 sm:mb-[84px]"
		class:sticky={!menuOpened}
		class:fixed={menuOpened}
		class:min-h-screen={menuOpened}
		class:top-0={scrollDir === "up"}
		class:opacity-0={scrollDir === "down" && scroll > $currentSettings.headerHeight && !menuOpened}
		bind:clientHeight={$currentSettings.headerHeight}
	>
		<nav class="flex flex-col text-36 sm:text-45 lg:text-68" class:h-screen={menuOpened}>
			<div class=" flex border-b border-light-gray p-15 pb-5">
				<a href="/" on:click={() => closeMenu()}>E</a>
				<a href="/" on:click={() => closeMenu()} class="ml-auto flex font-sans">Learning</a>
				<button on:click={() => (!menuOpened ? openMenu() : closeMenu())}
					><img
						alt="Open Menu Button"
						class="ml-15 w-32 origin-center pb-10 transition-transform sm:w-42 lg:w-60"
						class:rotate-45={menuOpened}
						src={plus}
					/></button
				>
			</div>
			{#if menuOpened}
				<button
					id="menu"
					class="grid h-full w-full grid-cols-1 text-center sm:grid-cols-2 sm:text-left"
					on:click={() => closeMenu()}
				>
					<div class="flex h-full flex-col">
						<a href="/insights/overview">Insights</a>
						<a href="/event/overview">Events</a>
						<a href="/experience/overview">Experience</a>
						<a href="/cosmos/overview">Cosmos</a>
						<a href="/community/overview">Community</a>
						<a href="/glossary">Glossary</a>
						<div class="mb-10 mt-auto text-12 uppercase !text-black sm:!text-14">Journal</div>
					</div>
					<div class="flex h-full flex-col border-t sm:border-l lg:border-t-0">
						<a href="/offer">Angebot</a>
						<a href="/information">Information</a>

						<div class="mb-10 mt-auto text-12 uppercase !text-black sm:!text-14">Hintergrund</div>
					</div>
				</button>
			{/if}
		</nav>
	</header>
{/if}

<style>
	#menu div > * {
		@apply pl-15 pt-10 text-dark-gray;
	}
	#menu a:hover {
		@apply text-black;
	}
</style>
