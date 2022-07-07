<script>
	import { slide } from 'svelte/transition';
	import Chart from 'svelte-frappe-charts';
	import { currentHole } from '$lib/stores/store';

	export let player;
	export let i;

	export let showGrid = false;

	$: labels = player.holes.filter((h, index) => h !== 0).map((h, index) => `${index + 1}`);

	$: data = {
		labels,
		datasets: [
			{
				chartType: 'line',
				values: player.holes
			}
		]
	};
</script>

<div class="player-score-box">
	<div class="main-row">
		<p class="player-name">{i + 1}. {player.name}</p>
		<p class="player-total">{player.holes.reduce((a, b) => a + b)}</p>
	</div>
	{#if showGrid}
		<div class="grid" transition:slide|local={{ duration: 300 }}>
			{#each player.holes as hole, i}
				<div
					class="hole"
					class:faded={hole === 0}
					class:green={hole < 3 && hole !== 0}
					class:red={hole > 4}
				>
					<p class="hole-number" class:green={hole < 3 && hole !== 0} class:red={hole > 4}>
						<sup>#</sup>{i + 1}
					</p>
					<p class="hole-score" class:green={hole < 3 && hole !== 0} class:red={hole > 4}>{hole}</p>
				</div>
			{/each}
		</div>
		<div transition:slide|local={{ duration: 300 }}>
			<Chart {data} height={150} colors={['#689b85']} lineOptions={{ regionFill: 1 }} />
		</div>
	{/if}
</div>

<style lang="scss">
	.player-score-box {
		width: 100%;
		border-bottom: solid 3px var(--brown);
	}

	.main-row {
		display: flex;
		padding: 2rem 0rem 1.5rem;
		text-shadow: 2px 2px var(--red), 4px 4px var(--green);
		font-size: 2rem;
		color: var(--gold);
		font-family: var(--font-title);
		font-weight: bold;

		.player-name {
			flex: 1 1 auto;
			text-transform: capitalize;
		}

		.player-total {
			flex: 0 0 auto;
			padding-left: 1rem;
		}
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		width: 100%;
		grid-gap: 0.5rem;
		padding-bottom: 1rem;
	}

	.hole {
		--holeColor: var(--brown);
		text-align: center;
		border: solid 1px var(--holeColor, var(--brown));
		overflow: hidden;
		border-radius: 3px;

		&.faded {
			opacity: 0.3;
		}

		&.red {
			--holeColor: var(--red);
		}

		&.green {
			--holeColor: var(--green);
		}
	}

	.hole-number {
		background: var(--holeColor, var(--brown));
		width: 100%;
		margin: 0px auto 0;
		font-size: 0.7rem;
		color: var(--pale-yellow);
	}

	sup {
		font-size: 0.5rem;
	}

	.hole-score {
		font-weight: bold;
		margin-top: 3px;
		color: var(--holeColor, var(--brown));
	}
</style>
