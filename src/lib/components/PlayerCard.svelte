<script>
	export let player
	export let i

	let newScore;

</script>

<article class="player-box">
	<h3>{ player.name }</h3>
	<input type="number" bind:value={newScore} on:click={e => e.target.select()}>
</article>

<style>
	article{
		margin-bottom: 1.3rem;
		display: grid;
		grid-template-columns: 3fr 1fr;
		width: 100%;
	}

	h3{
		text-shadow: 3px 3px var(--red);
		font-size: 2rem;
		color: var(--gold);
		font-family: var(--font-title);
	}

	input{
		background: var(--teal);
		border: solid 3px var(--red);
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