<script lang="ts">
  export let path: string;
  export let name: string;
</script>

<a href="{path}"><div>{name}</div></a>

<style>
  a {
    text-decoration: none;
  }

  div {
    padding: 0.4em;
  }

  div:hover {
    background-color: var(--dark-navy);
    opacity: 50%;
  }
</style>
