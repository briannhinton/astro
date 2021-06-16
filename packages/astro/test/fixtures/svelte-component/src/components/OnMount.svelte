<script lang="ts">
  let word = 'Hello';
  import { onMount } from "svelte";

  onMount(() => {
    word = 'World';
  });
</script>

<h1 id="svelte-h1">{word}</h1>
