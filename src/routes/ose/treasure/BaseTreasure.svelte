<script>
    import { onMount } from 'svelte';
    import rollerService from './../../../service/shared/roller';
    import Money from './Money.svelte';
    import GemJewlery from './GemJewlery.svelte';
    import MagicTreasure from './MagicTreasure.svelte';
    export let treasure;

    $: total = 0;
    $: isFound = false;
    $: percentRolled = 0;
    $: rolled = null;

    onMount(() => {
        rollAgain();
    });

    export function rollAgain() {
        if (treasure === undefined) return;

        if (treasure.dieType) {
            const roll = rollerService.rollDice(treasure.dieType);
            rolled = roll;
            if (treasure.multiplier !== undefined)
                total = roll.total*treasure.multiplier;
            else
                total = roll.total;
        }

        percentRolled = Math.random().toFixed(2);
        isFound = (treasure.percent >= percentRolled);
    }

    const percentDisplay = (percent) => {
        return `${parseInt(percent * 100)}%`
    }
</script>

{#if treasure.type === 'money'}
    <Money treasure={treasure} percentDisplay={percentDisplay(treasure.percent)} total={total} isFound={isFound} percentRolledDisplay={percentDisplay(percentRolled)} />
{:else if treasure.type === 'gem' || treasure.type === 'jewelry'}
    <GemJewlery  treasure={treasure} percentDisplay={percentDisplay(treasure.percent)} total={total} isFound={isFound} percentRolledDisplay={percentDisplay(percentRolled)} />
{:else if treasure.type === 'magic'}
    <MagicTreasure treasure={treasure} percentDisplay={percentDisplay(treasure.percent)} total={total} isFound={isFound} percentRolledDisplay={percentDisplay(percentRolled)} />
{/if}