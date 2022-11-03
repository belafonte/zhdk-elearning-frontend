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
	let menuOpened: boolean = false;
	let prevScroll: number = 0;
	let scroll: number = 0;
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
		class="sticky top-[-{$currentSettings.headerHeight}px] mb-[84px] bg-white z-[100] w-full"
		class:h-screen={menuOpened}
		class:top-0={scrollDir === "up"}
		bind:clientHeight={$currentSettings.headerHeight}
	>
		<nav class="text-36 sm:text-68 h-full flex flex-col">
			<div class=" flex border-b border-light-gray p-15 pb-5">
				<a href="/" on:click={() => closeMenu()}>E</a>
				<a href="/" on:click={() => closeMenu()} class="ml-auto font-sans flex">Learning</a>
				<button on:click={() => (!menuOpened ? openMenu() : closeMenu())}
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
					on:click={() => closeMenu()}
				>
					<div class="flex flex-col">
						<a href="/questions/overview">Leitfragen</a>
						<a href="/event/overview">Events</a>
						<a href="/knowledge-in-use/overview">Knowledge in use</a>
						<a href="/kosmos/overview">Kosmos</a>
						<a href="/community/overview">Community</a>
						<a href="/glossary">Glossar</a>
						<a class="mt-auto mb-10 text-12 sm:!text-14 !text-black uppercase ">Journal</a>
					</div>
					<div class="flex flex-col border-t sm:border-l ">
						<a href="/offer">Angebot</a>
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
