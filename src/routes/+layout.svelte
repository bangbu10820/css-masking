<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import './styles.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>
