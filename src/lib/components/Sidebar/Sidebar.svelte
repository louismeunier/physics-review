<script lang="ts">
  import constants from '../../utils/constants';

  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import Menu from '../icons/Menu.svelte';
  import SidebarSection from './SidebarSection.svelte';
  import SidebarItem from './SidebarItem.svelte';
  import External from '../icons/External.svelte';

  let visible = false;
  let toggleElem: HTMLElement;
  let rotate: NodeJS.Timeout;
  let i = 0;

  const toggleSidebar = () => {
    clearInterval(rotate);
    visible = !visible;
    rotate = setInterval(() => {
      visible ? (i += 2) : (i -= 2);
      toggleElem.style.transform = `rotate(${i}deg)`;
      if (i % 180 == 0) {
        clearInterval(rotate);
      }
    }, 4);
  };

  onMount(() => {
    document.addEventListener('keydown', key => {
      if (key.code === 'Escape' && visible === true) {
        toggleSidebar();
      }
      if (
        key.code === 'Enter' &&
        document.activeElement ===
          document.getElementsByClassName('sidebar-wrapper')[0]
      ) {
        toggleSidebar();
      }
    });
    document
      .getElementsByClassName('sidebar-wrapper')[0]
      .addEventListener('focusout', () => {
        if (visible === true) {
          toggleSidebar();
        }
      });
  });
</script>

<div class="sidebar-wrapper" tabindex="0">
  <div bind:this="{toggleElem}" class="toggle" on:click="{toggleSidebar}">
    <Menu />
  </div>
  {#if visible}
    <div class="sidebar" transition:fly="{{ duration: 500, x: -400 }}">
      <SidebarSection>
        <SidebarItem path="/" name="Home" />
        <SidebarItem path="/about" name="About" />
        <SidebarItem
          path="{constants.GITHUB}"
          isExternal="{true}"
          name="Source"
        />
      </SidebarSection>
      <SidebarSection>
        <SidebarItem path="/review/kinematics" name="Kinematics" />
        <SidebarItem path="/review/dynamics" name="Dynamics" />
        <SidebarItem path="/review/work&energy" name="Work and Energy" />
        <SidebarItem path="/review/momentum" name="Momentum" />
        <SidebarItem path="/review/rotation" name="Rotations" />
      </SidebarSection>
    </div>
  {/if}
</div>

<style>
  .sidebar-wrapper {
    left: 0;
    display: flex;
    min-width: 20vw;
    white-space: nowrap;
    height: 100vh;
    flex-direction: column;
    align-items: baseline;
    overflow-y: auto;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: var(--sub-color);
    left: 0;
    bottom: 0;
    top: 0;
    min-width: 20vw;
    min-height: calc(100vh - 50px);
    height: fit-content;
    padding-top: 50px;
    border-right: 2px solid var(--text-color);
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
    cursor: pointer;
  }
</style>
