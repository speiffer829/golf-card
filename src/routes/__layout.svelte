<script>
	import '../app.scss'
	import {showHoleSelect} from '$lib/stores/store'
	import Modal from '$lib/components/Modal.svelte'
	import GoToHole from '$lib/components/GoToHole.svelte'
</script>
<main class="wrap">
	<slot />

<Modal bind:modalOpen={$showHoleSelect} >
	<GoToHole />
</Modal>
</main>

<style>
	.wrap{
		max-width: 500px;
		margin: 0px auto;
		padding: 20px;
	}
</style>