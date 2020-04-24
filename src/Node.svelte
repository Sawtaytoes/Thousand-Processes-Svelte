<script>
  import { afterUpdate, onDestroy, onMount } from 'svelte'

  import { getRandomTimeout } from './utils.js'

  export let addToQueue
  export let color
  export let id
  export let value

  let previousColor
  let previousValue

  let timeoutId

  const queueUpdate = () => {
    if (
      previousColor === color
      && previousValue === value
    ) {
      return
    }

    previousColor = color
    previousValue = value

    clearTimeout(timeoutId)

    timeoutId = (
      setTimeout(
        () => addToQueue(id),
        getRandomTimeout(),
      )
    )
  }

  afterUpdate(queueUpdate)

  onDestroy(() => {
    clearTimeout(timeoutId)
  })

  onMount(queueUpdate)
</script>

<div style="color: {color};">
  {value}
</div>
