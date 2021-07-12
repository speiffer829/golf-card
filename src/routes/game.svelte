<script>
	import {onMount} from 'svelte'
	import { showHoleSelect, scoreboard, currentHoleViewed, currentHole, nextHole} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import PlayerCard from '$lib/components/PlayerCard.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import GoToHole from '$lib/components/GoToHole.svelte'

	onMount(() => {if(!$scoreboard.length) goto('/')})

</script>

<svelte:head>
	<title>Hole #{ $currentHoleViewed } | Golf Scorerer</title>
</svelte:head>


<h1 class="head-text" on:click={ () => showHoleSelect.set(true) }>Hole <sup>#</sup>{ $currentHoleViewed }</h1>


{ #each $scoreboard as player, i }

	<PlayerCard {player} {i} />

{ /each }


{#if $currentHole === $currentHoleViewed && $currentHole < 18}
<button class="btn" on:click={nextHole}>Next Hole</button>
{:else if $currentHole <= 18 && $currentHole !== $currentHoleViewed}
<button class="btn" on:click={() => currentHoleViewed.set($currentHole)}>Resume</button>
{:else}
<a href="/totals" on:click={nextHole} class="btn">Totals</a>
{/if}




<style lang="scss">
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}

button, a{
	margin-top: 4rem;
}
</style>