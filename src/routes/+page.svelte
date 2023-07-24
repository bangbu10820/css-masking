<script>
	import GradientLogo from '$lib/gradient-logo/gradient-logo.svelte';
	import { heightDown } from '$lib/transitions/shape';
	import { typewriter } from '$lib/transitions/typewriter';
</script>

<svelte:head>
	<title>Grumpy Tiger</title>
	<meta name="description" content="A gradient grumpy tiger" />
</svelte:head>

<div class="w-full h-screen flex justify-center items-center flex-wrap flex-col">
	{#await (() => new Promise((res) => setTimeout(res, 500)))() then}
		<div class="relative">
			<GradientLogo />

			<div
				class="absolute w-full bottom-0 left-0 bg-white"
				transition:heightDown={{ duration: 5000 }}
			/>
		</div>
		{#await (() => new Promise((res) => setTimeout(res, 1500)))() then}
			<h1 transition:typewriter class="text-center text-4xl font-bold">I'm looking at ya</h1>
		{/await}
	{/await}
</div>

<style>
</style>
