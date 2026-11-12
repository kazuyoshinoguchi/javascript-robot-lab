// Stage 28: typed functions and interface
export type Direction = "up" | "right" | "down" | "left";
export interface Robot { x: number; y: number; energy: number; direction: Direction }
export function moveRobot(robot: Robot, steps: number): Robot {
  return { ...robot, x: robot.x + steps, energy: robot.energy - steps };
}
export const start: Robot = { x: 0, y: 3, energy: 10, direction: "right" };
export const next: Robot = moveRobot(start, 3);
