<script>
    import Error from "../lib/components/icons/Error.svelte";
</script>

<div class="content">
    <h1>404</h1>
    <Error/>
    <h2>Page not found!</h2>
    <h3>Try <a href="/">going home</a>.</h3>
</div>

<style>
    h1 {
        color: var(--red-ish);
        font-style: italic bold;
    }
    div {
        text-align: center;
    }

    div :global(svg) {
        width: 30%;
    }
</style>