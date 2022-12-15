<script lang="ts">
	import logo from "$lib/assets/logo.svg";
</script>

<footer class="z-40 mt-auto">
	<!-- <GridBackground> -->
	<div class="relative z-10 flex flex-col border-t bg-white ">
		<h1 class="self-center p-50 text-center text-24 sm:text-50">
			Recherche zu digitalem Lehren und Lernen
		</h1>
		<div class="footer-links grid grid-cols-2 border-t px-15 sm:grid-cols-4">
			<div class="border-l"><a href="/offer">Angebot</a></div>
			<div>
				<a href="/information">Information</a>
			</div>
			<div class="border-t border-l sm:border-t-0 sm:border-l-0">
				<a href="/imprint">Impressum</a>
			</div>
			<a href="https://zhdk.ch" class="border-t sm:border-t-0"
				><img class="px-[15%]" src={logo} alt="ZHdK Logo" /></a
			>
		</div>
	</div>
	<!-- </GridBackground> -->
</footer>

<style>
	.footer-links > * {
		@apply flex aspect-square items-center justify-center border-r text-center;
	}
</style>
