<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiFillCaretRight from "svelte-icons-pack/ai/AiFillCaretRight"; 
    import { getGemValue } from './../../../service/ose/treasure'

    export let treasure;
    export let isFound;
    export let percentRolledDisplay;
    export let percentDisplay;
    export let total;


    const gemValue = getGemValue();
    //$: totalValue = total;
    $: gemsValue = gemValue * total;
</script>

<li>{percentDisplay}: {treasure.dieType} {treasure.currency}</li>
{#if isFound}
<li class='border-2 border-black pl-2 rounded-2xl'>
    <Icon src={AiFillCaretRight} size='24' className='inline-block' /> {percentRolledDisplay}: {total} {treasure.currency}({gemValue}) - {gemsValue}gp
</li>
{/if}