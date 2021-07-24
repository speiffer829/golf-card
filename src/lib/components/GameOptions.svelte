<script>
	import {showHoleSelect, resetAll} from '$lib/stores/store'
	import { goto } from '$app/navigation'
	export let showOptions = false

	function handleGoToHole() {
		showOptions = false
		$showHoleSelect = true
	}

	function handleReset() {
		resetAll()
		showOptions = false
		goto('/')
	}
</script>

<h3>Game Options</h3>
<button class="btn" on:click={handleGoToHole}>Go To Hole...</button>
<button class="btn" on:click={handleReset} style="--btnBG: var(--red);">End Game</button>

<style>
	h3{
		text-align: center;
		margin-bottom: 2rem;
		font-size: 1.4rem;
	}

	button{
		width: 100%;
		margin-bottom: .5rem;
	}

	button:last-of-type{
		margin-bottom: 1rem;
	}
</style>