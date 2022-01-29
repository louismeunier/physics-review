<script lang="ts">
  import External from '../icons/External.svelte';

  export let path: string;
  export let name: string;
  export let isExternal = false;
</script>

{#if !isExternal}
  <a href="{path}"><div>{name}</div></a>
{:else}
  <a href="{path}" target="_blank">
    <div>
      {name}
      <External />
    </div>
  </a>
{/if}

<style>
  a {
    text-decoration: none;
    font-size: 1.2em;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 0.4em;
  }

  div:hover {
    background-color: var(--dark-navy);
    opacity: 50%;
  }

  div :global(svg) {
    height: 20px;
    stroke: var(--green);
  }
</style>
