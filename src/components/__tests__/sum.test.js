import {Sum} from "../Sum";

test("should return the calculated sum", () => {
  const result = Sum(3, 4);
  expect(result).toEqual(7);
})
