<script>
	import {onMount} from 'svelte'
	import {scoreboard, currentHole, currentHoleViewed} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import PlayerCard from '$lib/components/PlayerCard.svelte'

	onMount(() => {if(!$scoreboard.length) goto('/')})

	console.log( scoreboard )
</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<h1 class="head-text">Hole <sup>#</sup>{ $currentHoleViewed }</h1>


{ #each $scoreboard as player, i }

	<PlayerCard {player} {i} />

{ /each }


<style lang="scss">
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}
</style>