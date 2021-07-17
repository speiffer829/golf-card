<script>
	import {slide} from 'svelte/transition'
	
	export let player;
	export let i;

	export let showGrid = false;
</script>

<div class="player-score-box" on:click="{() => showGrid = !showGrid}">
	<div class="main-row">
			<p class="player-name">{i + 1}. {player.name}</p>
			<p class="player-total">{ player.holes.reduce((a, b) => a+b) }</p>
			
	</div>
	{#if showGrid}
		<div class="grid" transition:slide={{duration: 300}}>
			{#each player.holes as hole, i}
				<div class="hole" class:faded={hole === 0}>
					<p class="hole-number" class:green={hole < 3 && hole !== 0} class:red={hole > 4}><sup>#</sup>{ i + 1 }</p>
					<p class="hole-score" class:green={hole < 3 && hole !== 0} class:red={hole > 4}>{ hole }</p>
				</div>
			{/each}
		</div>	
	{/if}
</div>

<style lang="scss">

	.player-score-box{
		width: 100%;
		border-bottom: solid 3px var(--brown);
	}

	.main-row{
		display: flex;
		padding: 2rem 0rem 1.5rem;
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
	.grid{
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		width: 100%;
		grid-gap: 0.5rem;
		padding-bottom: 1rem;
	}

	.hole{
		text-align: center;
		border: solid 1px var(--brown);
		overflow: hidden;
		border-radius: 3px;

		&.faded{
			opacity: 0.3;
		}
	}

	.hole-number{
		background: var(--gold);
		width: 100%;
		margin: 0px auto 0;
		font-size: 0.7rem;

		&.red{
			background: var(--red);
			color: var(--pale-yellow);
		}

		&.green{
			background: var(--green);
			color: var(--pale-yellow);
		}
	}

	sup{
		font-size: 0.5rem;
	}

	.hole-score{
		font-weight: bold;
		margin-top: 3px;

		&.red{
			color: var(--red);
		}

		&.green{
			color: var(--green);
		}
	}

</style>

