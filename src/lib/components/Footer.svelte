<script lang="ts">
	import logo from "$lib/assets/zhdk-logo.png";
</script>

<footer class="mt-auto z-40">
	<div class="mt-32 sm:mt-84 border-t flex flex-col bg-white ">
		<h1 class="text-24 sm:text-50 p-50 self-center">Recherche zu digitalem Lehren und Lernen</h1>
		<div class="footer-links px-15 border-t grid grid-cols-2 sm:grid-cols-4">
			<div class="border-l"><a>Angebot</a></div>
			<div>
				<a>Information</a>
			</div>
			<div class="border-t border-l sm:border-t-0 sm:border-l-0">
				<a>Impressum</a>
			</div>
			<a class="border-t sm:border-t-0"><img class="px-[25%]" src={logo} /></a>
		</div>
	</div>
</footer>

<style>
	.footer-links > * {
		@apply border-r text-center flex justify-center items-center aspect-square;
	}
</style>
