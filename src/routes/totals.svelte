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

<p class="small-text">Tap names to view more detail.</p>

<button class="simple-btn" on:click={() => showGrid = !showGrid}>{!showGrid ? 'Show More' : 'Hide'} Detail</button>

{#each $orderedScoreboard as player, i}
	<ScoreCard {player} {i} {showGrid} />
{/each}

{#if $gameOver === false}
<a href="/game" class="btn">Resume</a>
{/if}

<button class="reset-btn" on:click={handleReset}>Reset All</button>


<style lang="scss">


	.reset-btn{
		display: block;
		background: var(--red);
		color: var(--pale-yellow);
		border: none;
		padding: 1rem 2rem;
		border-radius: 10px;
		box-shadow: var(--subtle-shadow);
		margin: 1rem auto 0;
		text-decoration: none;
		text-align: center;
		margin-top: 4rem;
	}
</style>