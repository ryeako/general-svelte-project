<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiDelete from "svelte-icons-pack/fi/FiDelete"; 
    import { moveHistory } from "./../../store/stores";
    import { onDestroy } from "svelte";

    let moveHistoryContent = [];
    const subMoveHistory = moveHistory.subscribe(moves => moveHistoryContent = moves);

    export function addHistory(move) {
        moveHistory.update(() => {
            const newHistory = [...moveHistory, move];
            if (moveHistory.length > 10) moveHistory.shift();
            return newHistory;
        });
    }

    const handleHistorRemoveClick = (index) => {
        moveHistory.update(() => {
            const newHistory = moveHistory.splice(index, 1);
            return newHistory;
        });
    }

    onDestroy(subMoveHistory);
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


