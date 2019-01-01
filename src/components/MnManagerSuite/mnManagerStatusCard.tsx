import * as React from 'react';
import {
  Flex,
  Text,
} from 'rebass';
import { theme } from '../../config';
import {
  CapsText,
  DeadCentered,
  DisplayCard,
  Dot,
} from '../UI';

/**
 * Masternode status code map values.
 *
 * @property {String} title                - Corresponding title to display for this code. Example: "Enabled".
 * @property {String} indicatorBg         - Background color of indicator. Example: rebeccapurple.
 * @property {String} indicatorHighlight  - Border color of indicator. Example: #333.
 */
type mnManagerStatusCode = {
  title: string,
  indicatorBg: string,
  indicatorHighlight: string,
};

/** Type values for the masternodes status code maps. */
type mnManagerStatusCodes = {
  [status:string]: mnManagerStatusCode,
};

/**
 * Values map for each status code.
 * These maps contain the indicator background color and border (highlight).
 */
const mnManagerStatusCodes:mnManagerStatusCodes = {
  off: {
    title: 'Off',
    indicatorBg: 'lightred',
    indicatorHighlight: 'red',
  },
  enabled: {
    title: 'Enabled',
    indicatorBg: 'lightgreen',
    indicatorHighlight: 'green',
  },
  'restart-required': {
    title: 'New Start Required',
    indicatorBg: 'lightorange',
    indicatorHighlight: 'orange',
  },
};

/** Masternodes status codes can only be one of these values. */
type mnStatusCodes = 'off' | 'enabled' | 'restart-required';

type mnManagerStatusCardProps = {
  /** Will provide a highlight around the card if set to true. */
  isHighlighted?: boolean,
  /** The date of the last renewal payment for this masternode. */
  mnLastRenewalDate: string,
  /** Time of the last renewal payment for this masternode. */
  mnLastRenewalTime: string,
  /** Title for the masternode whose status is shown.  */
  mnTitle: string,
  /** Status code for the masternode. Possible values: off, enabled, restart-required.  */
  mnStatusCode: mnStatusCodes,
  /** CSS styling. */
  style?: React.CSSProperties,
  props?: any,
  pb?: number,
  py?: number,
  px?: number,
};

/**
 * Displays an image and a caption.
 *
 * @param   { String }      isHighlighted     - Provides a shadow as a highlight.
 * @param   { String }      mnLastRenewalDate - Date at which the masternode was renewed.
 * @param   { String }      mnLastRenewalTime - Time at which the masternode was renewed.
 * @param   { TypedString } mnStatusCode      - Current status of the masternodes.
 *
 * @returns { React.ReactNode }
 */
const mnManagerStatusCard: React.SFC<mnManagerStatusCardProps> = ({
  isHighlighted,
  mnLastRenewalDate,
  mnLastRenewalTime,
  mnStatusCode,
  mnTitle,
  ...props
}) => {
  // Access the `mnManagerStatusCodes` map with the `mnStatusCode` value as the key.
  const mnStatus = mnManagerStatusCodes[mnStatusCode];

  return (
    <DisplayCard
      borderWidth={isHighlighted ? '4px' : '2px'}
      isHighlighted={isHighlighted}
      style={{
        paddingBottom: `${theme.space[4]}px`,
      }}
      {...props}
    >
      <Flex px={3}>
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Dot
            bg={theme.colors[mnStatus.indicatorBg]}
            style={{
              border: `1px solid ${mnStatus.indicatorHighlight}`,
            }}
          />
        </Flex>
        <CapsText
          color={theme.colors.placeholdergray}
          fontSize={0}
          ml={2}
        >
          {mnStatus.title}
        </CapsText>
      </Flex>

      <DeadCentered my={3}>
        <CapsText fontSize={4}>{mnTitle}</CapsText>
      </DeadCentered>
      <Text
        color={theme.colors.placeholdergray}
        fontSize={1}
        textAlign={'center'}
      >
        <p>Last Payment:</p>
        {mnLastRenewalDate} at {mnLastRenewalTime}
      </Text>
    </DisplayCard>
  );
};

mnManagerStatusCard.defaultProps = {
  mnStatusCode: 'off',
  isHighlighted: false,
};

export default mnManagerStatusCard;
