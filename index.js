module.exports = array => {
  if (
    !Array.isArray(array) ||
    array.length % 2 === 0 ||
    !array.every(
      i =>
        Array.isArray(i) &&
        i.length === array.length &&
        i.every(j => j !== undefined),
    )
  ) {
    throw new Error("Expected a 2n-1-dimensional array")
  }

  const middleIndex = Math.floor(array[0].length / 2)

  const result = []

  let spiralLoop = 0

  let i = middleIndex

  let j = middleIndex

  let top = false

  let right = false

  let bottom = false

  let left = false

  while (array[i][j] !== undefined) {
    result.push(array[i][j])

    if (i < middleIndex + spiralLoop && bottom) {
      ++i

      continue
    }

    if (i === middleIndex + spiralLoop) {
      bottom = false

      right = true
    }

    if (j < middleIndex + spiralLoop && right) {
      ++j

      continue
    }

    if (j === middleIndex + spiralLoop) {
      right = false

      top = true
    }

    if (i > middleIndex - spiralLoop && top) {
      --i

      continue
    }

    if (i === middleIndex - spiralLoop) {
      top = false

      left = true
    }

    if (j > middleIndex - spiralLoop && left) {
      --j

      continue
    }

    if (j === middleIndex - spiralLoop) {
      left = false

      ++spiralLoop

      --j

      bottom = true
    }
  }

  return result
}
