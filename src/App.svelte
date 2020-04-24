<script>
  import Nodes from './Nodes.svelte'
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ccc;
    font-family: monospace;
    font-size: 24px;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    width: 100vw;
  }
</style>

<div
  style="
    align-items: center;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  "
>
  <div
    style="
      display: flex;
      font-family: monospace;
      font-size: 24px;
      flex-wrap: wrap;
      line-height: 1;
    "
  >
    <Nodes />
  </div>
</div>
