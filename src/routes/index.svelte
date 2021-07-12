<script>

	//TODO: Use Local Storage
	//TODO: Actually Give Added Up Results Modal and Page
	//TODO: Favicon
	
	import { flip } from 'svelte/animate';
	import {fly} from 'svelte/transition'
	import {scoreboard} from '$lib/stores/store'
	import {goto} from '$app/navigation'
	
	let names = []
	let currentName = ''
	let count = 0
	let addPlayerInput;


	function handleSubmit(){
		const name = currentName
		names= [...names, { id: count, name: name }]
		count++
		currentName = ''
		addPlayerInput.focus()
	}

	function removeMe(i) {
		names = [...names.slice(0, i), ...names.slice(i + 1)]
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
	<button class="add-btn" disabled={currentName.length == 0}>Add Player</button>
</form>


{ #each names as name, i (name.id) }
	<h2
		transition:fly|local={{ y:100, duration: 1000}} animate:flip>
		<span class="number">{i + 1}.</span> <span class="name">{name.name}</span>
	</h2>
{/each}



{#if names.length !== 0}
<!-- <p transition:fly|local={{ y:100, duration: 1000 }}>Once all players are added you can hit start and I guess start the game or whatever. I don't care what you do though I'm not your dad.</p> -->

<button 
	transition:fly|local={{ y:100, duration: 1000, delay: 100 }} 
	disabled={names.length === 0}
	on:click={initiateGame}>
		Start
</button>

{/if}
<style lang="scss">
	
	button{
		font-size: 2rem;
		text-align: center;
		border: none;
		background: var(--green);
		color: var(--gold);
		cursor: pointer;
		font-weight: bold;
		font-family: var(--font-title);
		text-shadow: 3px 3px var(--red);
		padding: 20px 40px;
		margin: 20px auto;
		display: block;
		letter-spacing: .2em;
		border-radius: 10px;
		box-shadow: 5px 5px var(--gold), 10px 10px var(--red);
		transition: all 100ms;

		&.add-btn{
			font-size: 1.5rem;
		}

		&:active{
			transform: scale(.9);
			box-shadow: 2px 2px var(--gold), 4px 4px var(--red);
		}

		&:disabled{
			opacity: .5;
			pointer-events: none;
		}
	}

	p{
		margin: 3rem auto;
		padding: 20px;
		line-height: 2rem;
		text-align: center;
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

</style>