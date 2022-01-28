<script lang="ts">
    import Menu from "./icons/Menu.svelte";
	import { fade } from 'svelte/transition';

    let visible = false;

    const toggleSidebar = () => {
        visible = !visible;
    }
</script>

<div class="sidebar-wrapper">
    <div 
        class="toggle" 
        on:click="{toggleSidebar}"
    >
        <Menu/>
    </div>
    {#if visible}
        <div class="sidebar" transition:fade="{{ duration: 300 }}">
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
        flex-direction: column;
        align-items: baseline;
        position: absolute;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: var(--sub-color);
        left: 0;
        padding-top: 45px;
        padding-left: 5px;
    }

    .toggle :global(svg) {
        stroke: var(--text-color);
        height: 45px;
    }
    
    .toggle {
        position: sticky;
        z-index: 1000;
    }

    .toggle:hover {
        cursor: pointer
    }

</style>