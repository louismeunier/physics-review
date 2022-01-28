<script lang="ts">
    import Menu from "./icons/Menu.svelte";
	import { fly } from 'svelte/transition';

    let visible = false;
    let toggleElem:HTMLElement;
    let rotate:NodeJS.Timeout;
    let i = 0;

    const toggleSidebar = () => {
        clearInterval(rotate);
        visible = !visible;
        rotate = setInterval(() => {
            visible ? i += 2 : i -= 2;
            toggleElem.style.transform = `rotate(${i}deg)`;
            if (i % 180 == 0) {
                clearInterval(rotate);
            } 
        }, 5)
    }
</script>

<div class="sidebar-wrapper">
    <div 
        bind:this="{toggleElem}"
        class="toggle" 
        on:click="{toggleSidebar}"
    >
        <Menu/>
    </div>
    {#if visible}
        <div class="sidebar" transition:fly="{{ duration: 400, x: -400 }}">
            <div>
                <h4>item 1</h4>
            </div>
            <div>
                <h4>item 2</h4>
            </div>
            <div>
                <h4>item 3</h4>
            </div>
        </div>
    {/if}
</div>

<style>
    .sidebar-wrapper {
        left: 0;
        display: flex;
        width: 20%;
        height: 100vh;
        flex-direction: column;
        align-items: baseline;
        position: absolute;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: var(--sub-color);
        left: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        padding-top: 45px;
        padding-left: 5px;
    }

    .toggle :global(svg) {
        stroke: var(--text-color);
        height: 45px;
    }
    
    .toggle {
        z-index: 1000;
        transform-origin: center center;
    }

    .toggle:hover {
        cursor: pointer
    }

</style>