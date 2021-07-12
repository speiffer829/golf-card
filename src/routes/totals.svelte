<script>
	import { scoreboard, currentHole, showHoleSelect } from '$lib/stores/store'

	const testScoreboard = [
		{
			name: 'Spenser',
			holes: [2,2,3,5,6]
		},
		{
			name: 'Tina',
			holes: [20,20,30,50,60]
		},
		{
			name: 'Sidni',
			holes: [1,1,3,3,2]
		},
	]

	$: orderedScoreboard = $scoreboard.sort((a, b) => a.holes.reduce((c, d) => c + d) - b.holes.reduce((c, d) => c + d))
</script>

<h1 class="head-text">TOTALS</h1>


{#each orderedScoreboard as player, i}
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
		}

		.player-total{
			flex: 0 0 auto;
			padding-left: 1rem;
		}
	}
</style>