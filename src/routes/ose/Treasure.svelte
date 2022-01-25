<script>
    import { getTreasureList } from "./../../service/ose/treasure";
    import BaseTreasure from "./treasure/BaseTreasure.svelte";

    const treasures = getTreasureList();
    $: selectTreasure = null;
    let baseTreasure = [];

    const rollAgain = () => {
        for (let i = 0; i < baseTreasure.length; i++)
            baseTreasure[i].rollAgain();
    }
</script>

<div class='dark:text-black'>
    <select bind:value={selectTreasure}>
    {#each treasures as treasure}
        {#if treasure.type === ''}
        <option value={null}>{treasure.type}</option>
        {:else}
        <option value={treasure}>Type {treasure.type}</option>
        {/if}
    {/each}
    </select>
</div>

{#if selectTreasure !== null}
    <div>
        <div>
            Type { selectTreasure.type } ({ selectTreasure.average }gp average)
            <button on:click={rollAgain}>Roll again</button>
        </div>
        <ul>
            {#each selectTreasure.treasures as t, i}
                <BaseTreasure treasure={t} bind:this={baseTreasure[i]} />
            {/each}
        </ul>
    </div>
{/if}