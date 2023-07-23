<script>
	import GradientLogo from '$lib/gradient-logo/gradient-logo.svelte';
	import { blur, scale } from 'svelte/transition';
</script>

<svelte:head>
	<title>Grumpy Tiger</title>
	<meta name="description" content="A gradient grumpy tiger" />
</svelte:head>

<div class="w-full h-screen flex justify-center items-center">
	{#await (() => new Promise((res) => setTimeout(res, 500)))() then}
		<div class="h-3/4" transition:blur={{ duration: 2500 }}>
			<GradientLogo />
		</div>
	{/await}
</div>

<style>
</style>
