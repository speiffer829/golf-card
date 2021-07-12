<script>
	import { currentHoleViewed, currentHole } from '$lib/stores/store'
	import {createEventDispatcher} from 'svelte'

	const dispatch = createEventDispatcher()

	function handleClick(i) {
		currentHoleViewed.set(i + 1)
		dispatch('closeMe')
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


<style lang="scss">
	h3{
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