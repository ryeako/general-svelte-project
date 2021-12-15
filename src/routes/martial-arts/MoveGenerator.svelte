<script>
    import { onMount } from 'svelte';
    import getRandomMove from '../../service/martial-arts/attack-generator';
    import MoveHistory from "./MoveHistory.svelte";

    let awaitMove;
    let moveHistory;

    onMount(() => {
        loadMove();
    });

    const anotherOneClick = () => {
        loadMove();
    }

    function loadMove() {
        awaitMove = getRandomMove();
        moveHistory.addHistory(awaitMove);
    }
</script>

<div class="grid grid-cols-2 gap-4 w-1/2">
    <div>
        {#await awaitMove then move}
            <p class="text-xl font-bold">{ move }</p>
        {/await}

        <div class="mt-5">
            <button class="rounded bg-red-500 hover:bg-red-600 p-3" on:click={anotherOneClick}>Another one!</button>
        </div>
    </div>

    <div>
        <MoveHistory bind:this={moveHistory} />
    </div>
</div>