<script>
    let title = "Change this title";

    const changeTitle = newTitle => {
        title = newTitle;
    };
</script>

<svelte:head>
    <title>Change page title</title> 
</svelte:head>

<main>
    <h1>{title}</h1>

    <h2>Click a button to change the page title</h2>

    <div>        
        <button on:click="{() => changeTitle('Go Ninja, go Ninja, Go!!')}">Go Ninja, go Ninja, Go!!</button>
        <button on:click="{() => changeTitle('Silent assassin')}">Silent assassin</button>
    </div>

    <h2>Input element</h2>

    <div>
        <input type="text" bind:value="{title}">
    </div>
</main>