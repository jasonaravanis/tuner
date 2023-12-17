import { lookupClosestNote } from ".";

it("finds closest note", () => {
  expect(lookupClosestNote(440)).toBe("A");
  expect(lookupClosestNote(520)).toBe("C");
});
