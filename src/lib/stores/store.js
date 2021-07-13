import {writable, get} from 'svelte/store'

export const scoreboard = writable([])

export const currentHole = writable(1)
export const currentHoleViewed = writable(1)

export const showHoleSelect = writable(false)

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
	window.localStorage.setItem('golf-scoreboard', JSON.stringify(get(scoreboard)))
	window.localStorage.setItem('golf-currentHole', JSON.stringify(get(currentHole)))
}

export function resetAll() {
	currentHole.set(1);
	currentHoleViewed.set(1);
	scoreboard.set([])

}
