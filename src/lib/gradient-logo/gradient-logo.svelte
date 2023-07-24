<script lang="ts">
	import { onMount } from 'svelte';
	import { paint } from './gradient';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const context = canvas.getContext('2d', { willReadFrequently: true });

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			if (context) paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas bind:this={canvas}  width={300} height={300} />

<style>
	canvas {
		background-color: #666;
		mask: var(--mask, url($lib/images/grumpy-tiger.svg)) no-repeat;
		-webkit-mask: var(--mask, url($lib/images/grumpy-tiger.svg)) no-repeat;
		mask-size: 100%;
		-webkit-mask-size: 100%;
		width: 100%;
		height: 100%;
	}
</style>
