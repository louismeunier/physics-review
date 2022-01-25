<script lang="ts">
    import { toggleSiteTheme, getSiteTheme, getSiteThemePreference, setSiteTheme } from "../lib/utils/theme";
    import Moon from "../lib/components/icons/Moon.svelte"
    import Sun from "../lib/components/icons/Sun.svelte"
    import { onMount } from "svelte";
    import Footer from "../lib/components/Footer.svelte";

    onMount(() => {
        setSiteTheme(getSiteThemePreference())
    })

    let currentTheme = getSiteTheme();

    function toggleTheme() {
        toggleSiteTheme();
        currentTheme = currentTheme == 'light' ? 'dark' : 'light';
        console.log(currentTheme);
    }
</script>

<div>
    <button on:click="{toggleTheme}">
        {#if currentTheme == "light"}
            <Moon/>
        {:else}
            <Sun/>
        {/if}
    </button>
    <slot/>
    <div class='footer'>
        <Footer/>
    </div>
</div>

<style>
    :root {
        font-family: 'CMU Bright Roman', 'Sans Serif';
    }

    div {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: minmax(0, 2em) 1fr minmax(0, 2em);
        grid-template-rows: 1fr auto;
        grid-template-areas: 
            'main' 
            'footer'; 
    }

    div :global(*) {
        grid-column-start: 2;
    }

    .footer {
        width: 100%;
        text-align: center;
    }
    button {
        border: none;
        position: fixed;
        right: 0;
        top: 0;
        background: transparent;
        height: 55px;
        width: 55px;
    }
</style>