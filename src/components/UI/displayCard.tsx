import * as React from 'react';
import {
  Box,
  Card,
  Image,
} from 'rebass';
import { theme } from '../../config';
import {
  CapsText,
  DeadCentered,
} from '../UI';

type displayCardProps = {
  borderWidth?: string,
  children?: React.ReactNode,
  /** Filename of image to display within card. */
  displayPhoto?: string,
  /** Caption to be displayed within card. */
  displayCaption?: string,
  /** Will provide a highlight around the card if set to true. */
  isHighlighted?: boolean,
  /** CSS styling. */
  style?: React.CSSProperties,
  props?: any,
};

/**
 * Displays an image and a caption.
 *
 * @param { React.ReactNode } children.
 * @param { String } displayCaption - Text to be displayed within card.
 * @param { String } displayPhoto - Filename of image to be displayed within card.
 * @param { String } isHighlighted - Provides a shadow as a highlight.
 *
 * @returns { React.ReactNode }
 */
const displayCard: React.SFC<displayCardProps> = ({
  borderWidth,
  children,
  displayCaption,
  displayPhoto,
  isHighlighted,
  style,
  ...props
}) => {
  const highlight = `0 0 0 1.4px ${theme.colors.blue} inset`;
  return (
    <Card
      border={1}
      borderRadius={theme.radiusSizes[1]}
      borderColor={'gray'}
      boxShadow={isHighlighted ? highlight : 'none'}
      py={3}
      style={{
        border: `${borderWidth} solid rgba(77, 161, 255, 0.07)`,
        ...style,
      }}
      {...props}
    >
        {children}
        <DeadCentered>
          {displayPhoto &&
          <Box mb={2}>
            <Image
              width={50}
              src={require(`../IncomeStatsSuite/${displayPhoto}`)}
            />
          </Box>
          }

          {displayCaption && <CapsText textAlign={'center'}>{displayCaption}</CapsText>}
        </DeadCentered>
    </Card>
  );
};

displayCard.defaultProps = {
  borderWidth: '5px',
  isHighlighted: false,
};

export default displayCard;
