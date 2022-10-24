<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
</script>

<p class="text-24 sm:text-50">{@html data.content}</p>
