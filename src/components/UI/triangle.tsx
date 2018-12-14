import * as React from 'react';
import { theme } from '../../config';

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

const triangle = ({
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
