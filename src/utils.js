const getRandomWholeNumber = (
  multiplier = 1.5,
) => (
  Math
  .floor(
    Math.random() * multiplier
  )
)

export const getRandomColor = () => (
  'rgb'
  .concat('(')
  .concat(getRandomWholeNumber() * 256)
  .concat(',')
  .concat(getRandomWholeNumber() * 256)
  .concat(',')
  .concat(getRandomWholeNumber() * 256)
  .concat(')')
)

export const getRandomTimeout = () => (
  getRandomWholeNumber(
    10000,
  )
  + 1000
)

export const getRandomValue = () => (
  getRandomWholeNumber(
    10,
  )
)