import {writable, get} from 'svelte/store'

export const scoreboard = writable([])

export const currentHole = writable(1)
export const currentHoleViewed = writable(1)

export const test = (msg) => {
	const newHole = get(currentHole) + 1;
	currentHole.set(newHole)
	currentHoleViewed.set(newHole)
	console.log(get(currentHole) + ' ' + get(currentHoleViewed));
}

export function nextHole() {
	const newHole = get(currentHole) + 1;
	currentHole.set(newHole);
	currentHoleViewed.set(newHole);
}
