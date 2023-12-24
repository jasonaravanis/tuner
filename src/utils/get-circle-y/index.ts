/**
 * @param x x axis coordinate of dot to paint on a circle within SVG dial
 * @param radius how large to make the circle
 * @returns a y-axis value in terms of container SVG height i.e '25%'.
 */

export const getCircleY = (x: number, radius: number): string => {
  // center of circle x coordinate
  const a = 100;
  // center of circle y coordinate
  const b = -100;
  // scale x value by 2 as painting to svg with width equal to 2 * height
  const yCoord = Math.sqrt(Math.pow(radius, 2) - Math.pow(2 * x - a, 2)) + b;
  const y = Math.abs(yCoord);
  const result = `${y}%`;
  return result;
};
