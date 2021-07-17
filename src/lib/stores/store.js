import { writable, get, derived } from 'svelte/store';

export const scoreboard = writable([])

export const currentHole = writable(1)
export const currentHoleViewed = writable(1)

export const showHoleSelect = writable(false)
export const gameOver = writable(false)

export const orderedScoreboard = derived(
scoreboard, 
($scoreboard) =>
	[...$scoreboard].sort((a, b) => a.holes.reduce((c, d) => c + d) - b.holes.reduce((c, d) => c + d))
);

export function nextHole() {
	const newHole = get(currentHole) + 1;
	currentHole.set(newHole);
	currentHoleViewed.set(newHole);
	window.localStorage.setItem('golf-scoreboard', JSON.stringify(get(scoreboard)))
	window.localStorage.setItem('golf-currentHole', JSON.stringify(get(currentHole)))
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export function resetAll() {
	currentHole.set(1);
	currentHoleViewed.set(1);
	scoreboard.set([])
	window.localStorage.removeItem('golf-scoreboard')
	window.localStorage.removeItem('golf-currentHole')
}
