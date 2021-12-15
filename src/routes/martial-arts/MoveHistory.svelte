<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiDelete from "svelte-icons-pack/fi/FiDelete"; 

    let moveHistory = [];

    export function addHistory(move) {
        moveHistory = [...moveHistory, move];
        if (moveHistory.length > 10) moveHistory.shift();
    }

    const handleHistorRemoveClick = (index) => {
        moveHistory.splice(index, 1);
        moveHistory = [...moveHistory];
    }
</script>

{#each moveHistory as history, i}
<div class="flex items-stretch border-2 border-black first:border-r-2 first:border-black rounded-xl mb-3">
    <div class="flex justify-between w-3/4">
        <p class="flex items-center px-2 py-2">{ history }</p>
        <span on:click={() => handleHistorRemoveClick(i)} class="text-red-500 border-l-2 border-black px-2 py-2">
            <Icon src={FiDelete} size='24' />
        </span>
    </div>
</div>
{/each}


