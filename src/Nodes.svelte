<script>
  import { onDestroy, onMount } from 'svelte'

  import Node from './Node.svelte'
  import { getRandomColor, getRandomValue } from './utils.js'

  const generateNodes = (
    numberOfNodes,
  ) => (
    Array(numberOfNodes)
    .fill()
    .map((
      item,
      index,
    ) => ({
      color: getRandomColor(),
      id: index,
      value: getRandomValue(),
    }))
  )

  let nodes = generateNodes(12220)

  let queue1 = []
  let queue2 = []

  let currentQueue = queue1

  const addToQueue = (
    id,
  ) => (
    currentQueue
    .push(id)
  )

  let intervalId

  let updateNodes = () => {
    currentQueue = (
      queue1.length > 0
      ? queue2
      : queue1
    )

    const tempQueue = (
      queue1.length > 0
      ? queue1
      : queue2
    )

    if (tempQueue.length < 0) {
      return
    }

    for (const id of tempQueue) {
      nodes[id] = {
        ...nodes[id],
        color: getRandomColor(),
        value: getRandomValue(),
      }
    }

    // Removes all items from `tempQueue`
    tempQueue
    .splice(
      0,
      tempQueue.length,
    )
  }

  onMount(() => {
    intervalId = (
      setInterval(
        updateNodes,
        40,
      )
    )
  })

  onDestroy(() => {
    clearInterval(intervalId)
  })
</script>

{#each nodes as { color, id, value } (id)}
  <Node
    addToQueue={addToQueue}
    color={color}
    id={id}
    value={value}
  />
{/each}
