<script>
	import {onMount} from 'svelte'
	import {scoreboard, currentHole, currentHoleViewed} from '$lib/stores/store'
	import {goto} from '$app/navigation'

	onMount(() => {if(!$scoreboard.length) goto('/')})
</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<h1 class="head-text">Hole <sup>#</sup>{ $currentHoleViewed }</h1>


{ #each $scoreboard as player }

	<p>{player.name}</p>

{ /each }


<style lang="scss">
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}
</style>