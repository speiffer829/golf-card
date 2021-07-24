<script>
	import {onMount} from 'svelte'
	import { scoreboard, currentHoleViewed, currentHole, nextHole, gameOver, showHoleSelect} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import PlayerCard from '$lib/components/PlayerCard.svelte'
	import HoleTitle from '$lib/components/HoleTitle.svelte'
	import GameOptions from '$lib/components/GameOptions.svelte'
	import Modal from '$lib/components/Modal.svelte'

	let showOptions;

	onMount(() => {
		const localScoreboard = window.localStorage.getItem('golf-scoreboard')
		const localCurrentHole = window.localStorage.getItem('golf-currentHole')
		if(!$scoreboard.length && localScoreboard !== null && localScoreboard.length){
			scoreboard.set(JSON.parse(localScoreboard))
			currentHole.set(parseInt(localCurrentHole))
			currentHoleViewed.set(parseInt(localCurrentHole))
		}else if(!$scoreboard.length){
			goto('/')
		}
	})
</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<HoleTitle />

{ #each $scoreboard as player, i }

	<PlayerCard {player} {i} />

{ /each }


<div class="btn-grid">
	{#if $currentHole === $currentHoleViewed && $currentHole < 18}
	<button class="btn big-btn" on:click={nextHole}>Next Hole</button>
	{:else if $currentHole <= 18 && $currentHole !== $currentHoleViewed}
	<button class="btn big-btn" on:click={() => currentHoleViewed.set($currentHole)}>Resume</button>
	{:else}
	<a href="/totals" on:click={gameOver.set(true)} class="btn big-btn">Totals</a>
	{/if}

	<button 
		class="btn" 
		style="--btnBG: var(--brown); --btnTextShadow: transparent;"
		on:click={() => showOptions = true}>
		Options
	</button>
	<a href="/totals" class="btn" style="--btnBG: var(--gold); --btnTextShadow: transparent; --btnColor: var(--red);">Scores</a>
</div>

<Modal bind:modalOpen={showOptions}>
	<GameOptions bind:showOptions />
</Modal>




<style lang="scss">


span{
	display: inline-block;
}

.btn-grid{
	margin-top: 3rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;

	.btn{
		display: block;
	}

	.big-btn{
		grid-column: span 2;
	}
}
</style>