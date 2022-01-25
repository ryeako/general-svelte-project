<script>
    import SideNavIcon from "./SideNavIcon.svelte";
    import { link } from 'svelte-spa-router';
    import { onMount } from 'svelte';

    import FaSolidFistRaised from "svelte-icons-pack/fa/FaSolidFistRaised";
    import SiAboutDotMe from "svelte-icons-pack/si/SiAboutDotMe";
    import RiWeatherFlashlightLine from "svelte-icons-pack/ri/RiWeatherFlashlightLine";
    import RiMapTreasureMapFill from "svelte-icons-pack/ri/RiMapTreasureMapFill"; 

    const icons = [
        { icon: FaSolidFistRaised, text: "Home", route: '/' },
        { icon: SiAboutDotMe, text:"About", route: '/about' },
        { icon: RiMapTreasureMapFill, text: "OSE", route: '/ose/treasure'}
    ];

    let mode = '';
    $: modeDisplay = '';

    onMount(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            mode = 'dark';
        } else {
            document.documentElement.classList.remove('dark')
            mode = 'light'
        }
        setDisplay();
    });

    function changeMode() {
        if (localStorage.theme !== 'dark') {
            document.documentElement.classList.add('dark')
            updateMode('dark');
        } else {
            document.documentElement.classList.remove('dark')
            updateMode('light');
        }
    }

    function updateMode(modeType) {
        localStorage.theme = modeType;
        mode = modeType;
        setDisplay();
    }

    const setDisplay = () => { 
        const modeCap = capitalize(mode);
        const text = `${modeCap} mode`;
        modeDisplay = text;
    }
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let component = SideNavIcon;
</script>

<div class='justify-start'>
    {#each icons as icon}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a use:link={icon.route}>
            <SideNavIcon icon={icon.icon} text={icon.text} />
        </a>
    {/each}
</div>

<div class='justify-self-end' on:click={changeMode}>
    <SideNavIcon icon={RiWeatherFlashlightLine} text={modeDisplay} />
</div>