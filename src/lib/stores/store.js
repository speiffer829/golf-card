import {writable} from 'svelte/store'

export const scoreboard = writable(['spenser'])

export const currentHole = writable(1)
export const currentHoleViewed = writable(1)

export const headText = writable('Golf Scorerer');
