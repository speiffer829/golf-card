<script>
	//TODO: Favicon
	
	import { flip } from 'svelte/animate';
	import {fly} from 'svelte/transition'
	import {scoreboard} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	import Modal from '$lib/components/Modal.svelte'
	
	let names = []
	let currentName = ''
	let count = 0
	let addPlayerInput;
	let choppingBlock = {i: '', name: ''}
	let choppingBlockActive = false


	function handleSubmit(){
		const name = currentName
		names= [...names, { id: count, name: name }]
		count++
		currentName = ''
		addPlayerInput.focus()
	}

	function handleRemoveBtn(i, name) {
		choppingBlock = {i: i, name: name}
		choppingBlockActive = true
	}

	function removeMe() {
		names = [...names.slice(0, choppingBlock.i), ...names.slice(choppingBlock.i + 1)]
		choppingBlockActive = false
	}

	function initiateGame() {
		names.forEach(name => {
			name.holes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		})
		$scoreboard = [...$scoreboard, ...names]

			goto('/game')

	}
</script>

<svelte:head>
	<title>Golf Scorerer</title>
</svelte:head>

<h1 class="head-text">Golf Scorerer</h1>

<form on:submit|preventDefault={handleSubmit} >
	<input type="text" bind:value={currentName} bind:this={addPlayerInput} placeholder="Add Player">
	<button class="add-btn btn" disabled={currentName.length == 0}>Add Player</button>
</form>


{ #each names as name, i (name.id) }
	<h2
		in:fly|local={{ y:100, duration: 1000}} 
		animate:flip|local={{duration: 300}}
		on:click={() => handleRemoveBtn(i, name.name)}>
		<span class="number">{i + 1}.</span> <span class="name">{name.name}</span>
	</h2>
{/each}




{#if names.length !== 0}

<p class="small-text" transition:fly|local={{ y:100, duration: 1000, delay: 100 }}>Touch a name to remove it.</p>

<button 
	transition:fly|local={{ y:100, duration: 1000, delay: 100 }} 
	disabled={names.length === 0}
	on:click={initiateGame}
	class="fancy-btn">
		Start
</button>

{/if}


	<Modal bind:modalOpen={choppingBlockActive}>
		<p class="are-you-sure">Are you sure you want to remove <span class="green">{ choppingBlock.name }</span>?</p>
		<div class="chopping-block-options">
			<button class="yes-btn simple-btn" on:click={removeMe}>Remove</button>
			<button class="no-btn simple-btn" on:click={() => choppingBlockActive = false}>Cancel</button>
		</div>
	</Modal>


<style lang="scss">

	p{
		margin: 3rem auto;
		padding: 20px;
		line-height: 2rem;
		text-align: center;
	}

	form button{
		margin: 1rem auto 0;
	}


	input{
		font-size: 1.5rem;
		border-radius: 10px;
		padding: 1rem;
		border: solid 3px var(--brown);
		width: 100%;
		text-transform: capitalize;
		box-shadow: 5px 5px var(--gold), 10px 10px var(--red);
		text-shadow: 2px 2px var(--green);
		font-family: var(--font-title);
		color: var(--gold);
		background: #eee;

		&:focus{
			border-color: var(--green);
			outline: var(--red);
		}
	}

	h2{
		text-align: center;
		text-transform: capitalize;
		margin: 20px auto;
		padding: 20px;
		width: 70%;
		display: flex;
		font-size: 2rem;

		.number{
			flex: 0 0 auto;
			color: var(--green);
			font-family: var(--font-title);
			text-shadow: 3px 3px var(--gold);
		}

		.name{
			flex: 1 1 auto;
			padding-bottom: 10px;
			font-family: var(--font-title);
			color: var(--gold);
			text-shadow: 3px 3px var(--red);
			text-align: left;
			padding-left: 0.5em;
		}


		&:first-of-type{
			margin-top: 3rem;
		}
	}

	.are-you-sure{
		font-size: 1.5rem;

		.green{
			color: var(--green);
		}
	}
	.chopping-block-options{
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: .5rem;

		button{
			font-family: var(--font);
			font-size: 1rem;
			box-shadow: var(--subtle-shadow);
			text-shadow: none;
			background: var(--red);
			margin: 0;

			&.no-btn{
				background: var(--green);
			}
		}
	}

</style>