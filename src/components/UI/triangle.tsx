import * as React from 'react';
import { theme } from '../../config';

/**
 * Ratios the lenghtier triangle side to the minumum side length.
 */
const SCALING_FACTOR = 1.156;

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

type triangleProps = {
  children?: React.ReactNode,
  direction?: Direction,
  bg?: string,
  size?: number,
};

type triangleDirectionsStyleMapProps = {
  [up: string]: object,
};

/**
 * Creates a configurable triangle.
 *
 * @param {string}          bg        - The background color of the triangle.
 * @param {React.ReactNode} children  - Child elements within triangle.
 * @param {string}          direction - Only 'up', 'down', 'left' and 'right'.
 * @param {number}          size      - Width and height for this triangle.
 *
 * @returns React.ReactNode.
 */
const triangle:React.SFC<triangleProps> = ({
    bg,
    children,
    direction,
    size,
}: triangleProps) => {
  const bottomWidth: string = `${size / SCALING_FACTOR}px`;
  const sideWidth: string = `${size / 2}px`;

  const triangleDirectionsStyleMap:triangleDirectionsStyleMapProps = {
    up: {
      borderWidth: `0 ${sideWidth} ${bottomWidth} ${sideWidth}`,
      borderColor: `transparent transparent ${bg} transparent`,
    },
    left: {
      borderWidth: `${sideWidth} ${bottomWidth} ${sideWidth} 0`,
      borderColor: `transparent ${bg} transparent transparent`,
    },
    right: {
      borderWidth: `${sideWidth} 0 ${sideWidth} ${bottomWidth}`,
      borderColor: `transparent transparent transparent ${bg}`,
    },
    down: {
      borderWidth: `${bottomWidth} ${sideWidth} 0 ${sideWidth}`,
      borderColor: `${bg} transparent transparent transparent`,
    },
  };
  const triangleStyle = triangleDirectionsStyleMap[direction];

  return (
        <div
          style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            ...triangleStyle,
          }}
        >
            {children}
        </div>
  );
};

triangle.defaultProps = {
  bg: theme.colors.darkgray,
  direction: Direction.UP,
  size: 20,
};

export default triangle;
