import {writable} from 'svelte/store'

export const scoreboard = writable([])

export const currentHole = writable(1)
export const currentHoleViewed = writable(1)
