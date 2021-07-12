<script>
	import {onMount} from 'svelte'
	import {scoreboard, currentHoleViewed, nextHole} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import PlayerCard from '$lib/components/PlayerCard.svelte'
	import Modal from '$lib/components/Modal.svelte'

	onMount(() => {if(!$scoreboard.length) goto('/')})

	let test = false

	console.log( scoreboard )
</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<h1 class="head-text">Hole <sup>#</sup>{ $currentHoleViewed }</h1>


{ #each $scoreboard as player, i }

	<PlayerCard {player} {i} />

{ /each }

<button class="btn" on:click={nextHole}>Next Hole</button>


<style lang="scss">
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}

button{
	margin-top: 2rem;
}
</style>