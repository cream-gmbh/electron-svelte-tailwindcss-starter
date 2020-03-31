import App from './App.svelte';
import "./main.css";

const app = new App({
	target: document.getElementsByTagName("main")[0],
	props: {
		appName: 'My Electron App with Svelte + TailwindCSS Frontend'
	}
});

export default app;