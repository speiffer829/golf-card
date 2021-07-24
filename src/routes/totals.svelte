<script>
	import { scoreboard, currentHole, currentHoleViewed, resetAll, orderedScoreboard, gameOver } from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import {onMount} from 'svelte'
	import ScoreCard from '$lib/components/ScoreCard.svelte'

	let showGrid = false

	function handleReset() {
		resetAll()
		goto('/')
	}

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

<h1 class="head-text">TOTALS</h1>

<button class="simple-btn" on:click={() => showGrid = !showGrid}>{!showGrid ? 'Show More' : 'Hide'} Detail</button>

{#each $orderedScoreboard as player, i}
	<ScoreCard {player} {i} bind:showGrid />
{/each}

{#if $gameOver === false}
<a href="/game" class="btn big-btn">Resume</a>
{:else}
<button class="btn big-btn" style="--btnBG: var(--red); --btnColor: var(--pale-yellow);" on:click={handleReset}>
	New Game
</button>
{/if}



<style lang="scss">

.big-btn{
	margin-top: 3rem;
}
</style>