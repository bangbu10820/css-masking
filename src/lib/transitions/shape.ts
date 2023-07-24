import { linear } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export function heightDown(
	node: HTMLElement,
	{ delay = 0, duration = 400, easing = linear, start = 100 }: HeightShiftingParams
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

export function heightUp(
	node: HTMLElement,
	{ delay = 0, duration = 400, easing = linear, start = 0 }: HeightShiftingParams
): TransitionConfig {
	return {
		delay,
		duration,
		css: (t) => {
			const eased = easing(t);

			return `
        height: ${start + eased * 100}%;
        `;
		}
	};
}

interface HeightShiftingParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	start?: number;
}
