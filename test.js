const arrayToSpiral = require(".")

test("converts a 1-dimensional array to a spiral", () => {
  const source = [[5]]

  const expected = [5]

  expect(arrayToSpiral(source)).toEqual(expected)
})

test("converts a 7-dimensional array to a spiral", () => {
  const source = [
    [49, 48, 47, 46, 45, 44, 43],
    [26, 25, 24, 23, 22, 21, 42],
    [27, 10, 9, 8, 7, 20, 41],
    [28, 11, 2, 1, 6, 19, 40],
    [29, 12, 3, 4, 5, 18, 39],
    [30, 13, 14, 15, 16, 17, 38],
    [31, 32, 33, 34, 35, 36, 37],
  ]

  const expected = new Array(49).fill(0).map((_, index) => index + 1)

  expect(arrayToSpiral(source)).toEqual(expected)
})

test("throws an error", () => {
  const sources = [
    1,
    "1",
    false,
    null,
    undefined,
    NaN,
    {},
    () => {},
    [6],
    [[49, 48, 47, 46, 45, 44, 43], [26, 25, 24, 23, 22], [27, 10, 9]],
    [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ],
  ]

  sources.forEach(source =>
    expect(() => arrayToSpiral(source)).toThrowError(
      "Expected a 2n-1-dimensional array",
    ),
  )
})
