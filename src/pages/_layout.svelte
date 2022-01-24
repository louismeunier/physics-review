<script lang="ts">
    import { toggleSiteTheme, getSiteTheme, getSiteThemePreference, setSiteTheme } from "../utils/theme";
    import Moon from "../lib/components/icons/Moon.svelte"
    import Sun from "../lib/components/icons/Sun.svelte"
    import { onMount } from "svelte";

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
</div>

<style>
    :root {
        font-family: 'CMU Bright Roman', 'Sans Serif';
    }

    div {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(0, 2em) 1fr minmax(0, 2em);
    }

    div :global(*) {
        grid-column-start: 2;
        grid-row-start: 1;
    }

    button {
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        background: transparent;
        height: 50px;
        width: 50px;
    }
</style>