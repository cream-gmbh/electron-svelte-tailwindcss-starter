<script>
	import { onMount } from "svelte";
	import AppBody from "./AppBody.svelte";

	export let appName;
	export let lang = document.documentElement.lang;
	export let currentVersion = "2020.1.00-000 'SVELTE + TAILWIND STARTER'";
	export let updateDate = "01.01.2020";

	function getFiglet() {
		return `
   ______
  / ____/_______  ____ _____ ___
 / /   / ___/ _ \\/ __ \`/ __ \`__ \\
/ /___/ /  /  __/ /_/ / / / / / /
\\____/_/   \\___/\\__,_/_/ /_/ /_/
`
	}

	// ---------------------------------------------

	onMount(async () => {
		// --- figlet ---

		console.log(getFiglet());
		let logString = "STARTER " + currentVersion + " (last update: " + updateDate + ")";
		console.log(logString + "\nCrafted with passion by @author Vatroslav Vrbanic (Senior Creative Developer)\nCream® marketing creations GmbH Düsseldorf, Germany\nOur web development dreamteam: Svelte, rollup.js, JavaScript & TailwindCSS");
	});

</script>

<svelte:head>
	<!-- Global site tag (gtag.js) - Google Analytics -->

	<!-- fonts -->

	<!-- Webfonts Google -->
	<link href="https://fonts.googleapis.com/css?family=Oswald:300,400&display=swap" rel="stylesheet">

	{#if lang === "de" || lang === "x-default"}
		<title>Tailwind & CSS Starter</title>
		<!-- SEO -->
	{:else}
		<title>Tailwind & CSS Starter</title>
		<!-- SEO -->
	{/if}

	<!-- META -->
	<!-- robots -->
</svelte:head>


<AppBody currentVersion={currentVersion} />