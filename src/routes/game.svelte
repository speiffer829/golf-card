<script>
	import {onMount} from 'svelte'
	import { scoreboard, currentHoleViewed, currentHole, nextHole, gameOver} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import PlayerCard from '$lib/components/PlayerCard.svelte'
	import HoleTitle from '$lib/components/HoleTitle.svelte'

	onMount(() => {
		const localScoreboard = window.localStorage.getItem('golf-scoreboard')
		const localCurrentHole = window.localStorage.getItem('golf-currentHole')
		if(!$scoreboard.length && localScoreboard.length){
			scoreboard.set(JSON.parse(localScoreboard))
			currentHole.set(parseInt(localCurrentHole))
			currentHoleViewed.set(parseInt(localCurrentHole))
		}else if(!$scoreboard.length){
			goto('/')
		}
	})
</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<HoleTitle />

{ #each $scoreboard as player, i }

	<PlayerCard {player} {i} />

{ /each }


{#if $currentHole === $currentHoleViewed && $currentHole < 18}
<button class="btn" on:click={nextHole}>Next Hole</button>
{:else if $currentHole <= 18 && $currentHole !== $currentHoleViewed}
<button class="btn" on:click={() => currentHoleViewed.set($currentHole)}>Resume</button>
{:else}
<a href="/totals" on:click={gameOver.set(true)} class="btn">Totals</a>
{/if}




<style lang="scss">


button, a{
	margin-top: 4rem;
}

span{
	display: inline-block;
}
</style>