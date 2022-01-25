<script>
    export let treasure;
    export let percentDisplay;
    export let isFound;
    export let percentRolledDisplay;
</script>

<li>
    {percentDisplay}:
    {#if treasure.items > 0}
        {treasure.items} magic items
    {/if}
    {#if treasure.potion > 0}
        {treasure.potion} potions
    {/if}
    {#if treasure.scroll > 0}
        {treasure.scroll} scrolls
    {/if}
</li>
{#if isFound}
<li>{percentRolledDisplay}</li>
{/if}