<script>
	import { currentHoleViewed, currentHole, showHoleSelect } from '$lib/stores/store'


	function handleClick(i) {
		currentHoleViewed.set(i + 1)
		showHoleSelect.set(false)
	}
</script>

<h3>Go To Hole...</h3>
<div class="hole-grid">
	{#each Array($currentHole) as a, i}
		<button 
		class="hole-btn {i + 1 === $currentHole ? `currentHole` : ``} {i + 1 === $currentHoleViewed ? `currentHoleViewed` : ``}" 
		on:click={() => handleClick(i)}>
			{ i + 1 }
		</button>
	{/each}
</div>

<a href="/totals" on:click={() => showHoleSelect.set(false)}>See Current Totals</a>


<style lang="scss">
	h3{
		text-align: center;
	}

	a{
		display: block;
		background: var(--brown);
		color: var(--pale-yellow);
		padding: 1rem 2rem;
		border-radius: 10px;
		box-shadow: var(--subtle-shadow);
		margin: 1rem auto 0;
		text-decoration: none;
		text-align: center;
	}

	.hole-grid{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 1rem;
		margin-top: 1rem;
	}

	.hole-btn{
		text-align: center;
		font-size: 1.3rem;
		aspect-ratio: 1/1;
		width: 100%;
		border-radius: 100%;
		border: solid 2px var(--brown);
		background: transparent;
		color: var(--brown);

		&.currentHole{
			border-color: var(--teal);
		}

		&.currentHoleViewed{
			background: var(--teal);
			border-color: var(--teal);
			color: #fff;
		}
	}
</style>