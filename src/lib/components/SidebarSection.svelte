<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: max-content;
    border-bottom: 2px solid var(--text-color);
    /* padding-top: 1em; */
    /* padding-bottom: 1em; */
  }
</style>
