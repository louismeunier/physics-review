<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css"
    integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="content">
  <slot />
</div>

<style>
  .content {
    text-align: center;
  }
</style>
