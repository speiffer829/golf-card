<script>
	import '../app.scss'
	import {showHoleSelect} from '$lib/stores/store'
	import Modal from '$lib/components/Modal.svelte'
	import GoToHole from '$lib/components/GoToHole.svelte'
</script>
<main class="wrap">
	<slot />

{#if $showHoleSelect}
<Modal on:closeMe={() => showHoleSelect.set(false) }>
	<GoToHole on:closeMe={() => showHoleSelect.set(false) } />
</Modal>
{/if}
</main>

<style>
	.wrap{
		max-width: 500px;
		margin: 0px auto;
		padding: 20px;
	}
</style>