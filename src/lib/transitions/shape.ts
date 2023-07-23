import { linear } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export function heightDown(
	node: HTMLElement,
	{ delay = 0, duration = 400, easing = linear, start = 100 }: HeightDownParams
): TransitionConfig {
	return {
		delay,
		duration,
		css: (t) => {
			const eased = easing(t);

			return `
        height: ${start - eased * 100}%;
        `;
		}
	};
}

interface HeightDownParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	start?: number;
}
