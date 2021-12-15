<script>
    import Icon from "svelte-icons-pack/Icon.svelte";

    export let icon;
    export let text;
</script>

<div class="sidebar-icon group">
    <Icon src={icon} size="32" />   
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
</div>