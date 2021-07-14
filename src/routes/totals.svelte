<script>
	import { scoreboard, currentHole, currentHoleViewed, resetAll, orderedScoreboard } from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import {onMount} from 'svelte'

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


{#each $orderedScoreboard as player, i}
	<div class="player-score-box">
		<div class="main-row">
			<p class="player-name">{i + 1}. {player.name}</p>
			<p class="player-total">{ player.holes.reduce((a, b) => a+b) }</p>
		</div>
	</div>
{/each}

{#if $currentHole < 19}
<a href="/game" class="btn">Resume</a>
{/if}

<button class="reset-btn" on:click={handleReset}>Reset All</button>


<style lang="scss">
	.player-score-box{
		width: 100%;
		border-bottom: solid 3px var(--brown);
	}

	.main-row{
		display: flex;
		padding: 2rem 0rem;
		text-shadow: 2px 2px var(--red), 4px 4px var(--green);
		font-size: 2rem;
		color: var(--gold);
		font-family: var(--font-title);
		font-weight: bold;

		.player-name{
			flex: 1 1 auto;
			text-transform: capitalize;
		}

		.player-total{
			flex: 0 0 auto;
			padding-left: 1rem;
		}
	}

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