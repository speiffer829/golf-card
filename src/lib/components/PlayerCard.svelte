<script>
	import { currentHoleViewed, scoreboard, test } from '$lib/stores/store'
	export let player
	export let i

	let newScore;

	function handleChange() {
		console.log($scoreboard[i].holes)
	}

</script>

<article class="player-box">
	<h3>{ player.name }</h3>
	<input 
		type="number" pattern="\d*"
		bind:value={$scoreboard[i].holes[$currentHoleViewed - 1]} 
		on:click={e => e.target.select()}
		on:change={handleChange}>
</article>

<style>
	article{
		margin-bottom: 1.3rem;
		display: grid;
		grid-template-columns: 3fr 1fr;
		width: 100%;
		align-items: center;
	}

	h3{
		text-shadow: 3px 3px var(--red);
		font-size: 2rem;
		color: var(--gold);
		font-family: var(--font-title);
		text-transform: capitalize;
	}

	input{
		background: var(--green);
		border: none;
		border-radius: 100%;
		box-shadow: 2px 2px var(--gold);
		aspect-ratio: 1/1;
		/* border: solid 3px var(--red); */
		font-size: 2rem;
		text-align: center;
		font-family: var(--font-title);
		display: block;
		max-width: 100%;
		width: 100%;
		color: var(--gold);
		text-shadow: 3px 3px var(--red);
	}
</style>