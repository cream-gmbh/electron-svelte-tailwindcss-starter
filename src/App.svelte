<script>
	import { onMount } from "svelte";
	import AppBody from "./AppBody.svelte";

	export let appName;
	export let lang = document.documentElement.lang;

	// ---------------------------------------------

	onMount(async () => {
		//do something
	});

</script>

<svelte:head>
	{#if lang === "en" || lang === "x-default"}
		<title>{appName}</title>
	{:else}
		<title>{appName} - some other language</title>
	{/if}
</svelte:head>


<AppBody/>