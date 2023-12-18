import { getClosestNote } from ".";

it("gets closest note", () => {
  expect(getClosestNote(440)).toBe("A");
  expect(getClosestNote(520)).toBe("C");
});
