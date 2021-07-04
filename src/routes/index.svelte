<script>
	import { flip } from 'svelte/animate';
	import {fly} from 'svelte/transition'
	
	let arrOfNames = []
	let currentName = ''
	let count = 0


	function handleSubmit(){
		const name = currentName
		arrOfNames= [...arrOfNames, { id: count, name: name }]
		count++
		currentName = ''
	}

	function removeMe(i) {
		arrOfNames = [...arrOfNames.slice(0, i), ...arrOfNames.slice(i + 1)]
	}

	function initiateGame() {
		
	}
</script>

<svelte:head>
	<title>Golf Scorerer</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit} >
	<input type="text" bind:value={currentName} placeholder="Add Player">
	<button class="add-btn" disabled={currentName.length == 0}>Add Player</button>
</form>


{ #each arrOfNames as name, i (name.id) }
	<h2
		transition:fly={{ x:30, duration: 1000}} animate:flip>
		<span class="number">{i + 1}.</span> <span class="name">{name.name}</span>
	</h2>
{/each}



{#if arrOfNames.length !== 0}
<p transition:fly={{ y:30, duration: 1000 }}>Once all players are added you can hit start and I guess start the game or whatever. I don't care what you do though I'm not your dad.</p>

<button 
	transition:fly={{ y:30, duration: 1000, delay: 100 }} 
	disabled={arrOfNames.length === 0}
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
		text-shadow: 2px 2px var(--red);
		font-family: var(--font-title);
		color: var(--gold);

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