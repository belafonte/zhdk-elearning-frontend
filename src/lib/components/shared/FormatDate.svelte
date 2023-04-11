<script lang="ts">
	export let fromDate: string | undefined | null;
	export let toDate: string | undefined | null;

	$: dateBegin = "Kein Datum angegeben";
	$: dateEnd = "";

	$: {
		const begin = fromDate;
		const end = toDate;

		const options = {
			weekday: undefined,
			year: "numeric",
			month: "numeric",
			day: "numeric"
		} as Intl.DateTimeFormatOptions;

		if (begin) dateBegin = new Date(begin).toLocaleDateString("de-DE", options);
		if (end) dateEnd = new Date(end).toLocaleDateString("de-DE", options);
	}
</script>

<span>
	{dateBegin}{dateEnd !== "" ? `-${dateEnd}` : dateEnd}
</span>
