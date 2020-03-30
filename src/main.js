import App from './App.svelte';
import "./main.css";

const app = new App({
	target: document.getElementsByTagName("main")[0],
	props: {
		appName: 'Cream® Svelte & TailwindCSS Starter'
	}
});

export default app;