const gn = (a:number,b:number) => {
  return a + b
}
describe('fn test', () => {
  test('sum', () => {
    expect(gn(1,2)).toEqual(3)
  })
})
