import * as React from 'react';
import ToggleProvider, { ToggleChildProps } from '../../providers/ToggleProvider';
import {
  Box,
  Flex,
} from 'rebass';
import {
  CapsText,
  Caret,
} from '../../components/UI';
import { theme } from '../../config';
import styledComponents from 'styled-components';

type ComponentProps = {
  children?: React.ReactNode,
  /** Collapsible component title. */
  title?: string,
};

type CollapsibleProps = ComponentProps & ToggleChildProps;

// tslint:disable-next-line:variable-name
const CollapsibleBase = styledComponents(Flex)`
  cursor: pointer;

  &:hover {
    background: ${theme.colors.lightgray};
  }
`;

/**
 * Handles the render props callback function for the collapsible component.
 *
 * @param {React.ReactNode} children         - Child elements to render within the collapsible component.
 * @param {Function}        Object.doToggle  - Runs the toggle action when called.
 * @param {Boolean}         Object.isOn      - Denotes the state of the toggle. Is it active or inactive?
 * @param {String}          Object.title     - Title of the collapsible panel.
 *
 * @returns {React.ReactNode}
 */
const handleRenderAction = ({
  children,
  doToggle,
  isOn,
  title }: CollapsibleProps) => {
  const caretTransformStyle:string = isOn ? 'rotateX(180deg)' : 'rotateX(0deg)';

  return (
    <Box>
      <CollapsibleBase
        alignItems={'center'}
        mt={3}
        py={3}
        px={2}
        onClick={doToggle}
        style={{
          borderBottom: `1px solid ${theme.colors.gray}`,
          borderRadius: theme.radiusSizes[1],
        }}
        width={1}
      >
        <CapsText
          color={'coolgray'}
          width={1}
        >
          {title}
        </CapsText>
        <Caret
          mr={2}
          style={{
            transition: 'transform 0.5s ease-in',
            transform: caretTransformStyle,
          }}
          theme={{
            caretColor: theme.colors.coolgray,
            size: 8,
          }}
          width={10}
        />
      </CollapsibleBase>

      <Box
        style={{
          height: isOn ? '100%' : '0',
          overflowY: 'hidden',
          transition: 'height 0.3s ease-in',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

/**
 * Creates a component that can be collapsed and expanded to show/hide content.
 *
 * @param { React.ReactNode } children  - Child elements to render within the collapsible component.
 * @param { React.ReactNode } title     - Title of the collapsible component.
 *
 * @returns { React.ReactNode }
 */
const collapsible:React.SFC<ComponentProps> = ({
  children,
  title,
}) => {
  return (
    <ToggleProvider
    render={({ doToggle, isOn }) =>
      handleRenderAction({
        title,
        children,
        doToggle,
        isOn,
      })}
    />
  );
};

collapsible.defaultProps = {
  title: 'Title',
};

export default collapsible;
