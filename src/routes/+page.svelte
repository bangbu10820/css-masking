<script>
	import GradientLogo from '$lib/gradient-logo/gradient-logo.svelte';
	import { typewriter } from '$lib/transitions/typewriter';
	import { blur, scale } from 'svelte/transition';
</script>

<svelte:head>
	<title>Grumpy Tiger</title>
	<meta name="description" content="A gradient grumpy tiger" />
</svelte:head>

<div class="w-full h-screen flex justify-center items-center flex-wrap">
	{#await (() => new Promise((res) => setTimeout(res, 500)))() then}
		<div class="h-3/4" transition:blur={{ duration: 1500 }}>
			<GradientLogo />
			{#await (() => new Promise((res) => setTimeout(res, 1700)))() then}
				<h1 transition:typewriter class="text-center text-4xl antialiased font-bold">
					I'm looking at ya
				</h1>
			{/await}
		</div>
	{/await}
</div>

<style>
</style>
