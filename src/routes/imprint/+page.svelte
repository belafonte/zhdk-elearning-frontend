<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
</script>

<p class="text-24 sm:text-50 pb-84 sm:pb-[168px] pl-10 sm:pl-[40px] pr-7 sm:pr-[20px]">
	{@html data.content}
</p>
