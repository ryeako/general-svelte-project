<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiFillCaretRight from "svelte-icons-pack/ai/AiFillCaretRight"; 

    export let treasure;
    export let isFound;
    export let percentRolledDisplay;
    export let percentDisplay;
    export let total;
</script>

<li>{percentDisplay}: {treasure.dieType} X {treasure.multiplier}{treasure.currency}</li>
{#if isFound}
<li class='border-2 border-black pl-2 rounded-2xl'>
    <Icon src={AiFillCaretRight} size='24' className='inline-block' /> {percentRolledDisplay}: {total}{treasure.currency}
</li>
{/if}