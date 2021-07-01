

<svelte:head>
	<title>Golf Scorerer</title>
</svelte:head>

<div class="border">
	<h2>Thing</h2>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto beatae porro maxime dolorum itaque aliquam, ullam velit libero adipisci similique earum, facere iure voluptates sapiente quos harum dolor voluptas eaque.</p>
</div>

<button>Start</button>

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
		padding: 20px 40px;
		margin: 20px auto;
		display: block;
		letter-spacing: .2em;
		border-radius: 10px;
		box-shadow: 5px 5px var(--gold), 10px 10px var(--red);
		transition: all 100ms;

		&:active{
			transform: scale(.9);
			box-shadow: 2px 2px var(--gold), 4px 4px var(--red);
		}
	}

	.border{
		padding: 20px;
		border: solid 5px var(--gold);
		border-radius: 10px;
	}
</style>