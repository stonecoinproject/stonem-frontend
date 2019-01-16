import * as React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Card,
  CardProps,
  Flex,
} from 'rebass';
import {
  CapsText,
  Input,
} from '../UI';
import { theme } from '../../config';

/**
 * Renders the send and receive action buttons.
 */
const renderTransactionActionButtons = () => (
  <Flex pt={3} mb={4}>
    <Button
      px={5}
      py={3}
      mr={3}
    >
      <CapsText fontWeight={'400'}>Send</CapsText>
    </Button>
    <Button
      px={5}
      py={3}
      mr={2}
      variant={'default'}
    >
      <CapsText>Receive</CapsText>
    </Button>
  </Flex>
);

type transactionFormLabelProps = CardProps & {
  /** Text to be used as label. */
  label: string,
};

/**
 * Creates a form label for the transaction form.
 *
 * @param {String} Object.label - String to use as label.
 *
 * @return {React.ReactNode}
 */
// tslint:disable-next-line:variable-name
const TransactionFormLabel:React.SFC<transactionFormLabelProps> = ({
  label,
  ...props
}) => (
  <Card
    border={1}
    borderColor={theme.colors.bordergray}
    borderRadius={3}
    mr={3}
    px={3}
    {...props}
  >
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      style={{
        height: '100%',
      }}
    >
      <CapsText textAlign={'right'}>{label}</CapsText>
    </Flex>
  </Card>
);

type TransactionFormInputProps = {
  /** Input type. Example: "text", "number", "password". */
  type?: string,
};

/**
 * Input element used for the transaction form.
 *
 * @param {String} Object.type  - Input type of the input element.
 *
 * @returns {React.ReactNode}
 */
// tslint:disable-next-line:variable-name
const TransactionFormInput:React.SFC<TransactionFormInputProps> = ({
  type,
  ...props
}) => (
  <Box width={1} {...props}>
    <Input
      placeholder={''}
      theme={{
        size: 3,
        fontSize: 3,
        focusHighlight: 'blue',
      }}
      style={{
        border: `1px solid ${theme.colors.bordergray}`,
      }}
      width={1}
      type={type}
    />
  </Box>
);

TransactionFormInput.defaultProps = {
  type: 'text',
};

type TransactionFormGroupsProps = BoxProps & {
  /** Label for the form group. */
  label: string,
};

/**
 * Wraps a label and an input together.
 *
 * @param {String} label  - Label for the form group.
 *
 * @returns {React.ReactNode}
 */
// tslint:disable-next-line:variable-name
const TransactionFormGroup:React.SFC<TransactionFormGroupsProps> = ({
  label,
  ...props
}) => (
  <Flex {...props}>
    <TransactionFormLabel
      label={label}
      width={1 / 3}
    />
    <TransactionFormInput />
  </Flex>
);

/**
 * Renders the input groups for the form.
 */
const renderTransactionFormElements = () => (
  <Box>
    <TransactionFormGroup
      label={'Pay To'}
      mb={2}
    />
    <TransactionFormGroup
      label={'Description'}
      mb={2}
    />
    <Flex>
      <TransactionFormLabel
        label={'Amount'}
        width={1 / 4}
      />
      <Flex width={1 / 3}>
        <TransactionFormInput type={'number'} />
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <CapsText ml={3}>Stone</CapsText>
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

/**
 * Renders a transaction form.
 *
 * @returns {React.ReactNode}
 */
const transactionForm:React.SFC<{}> = () => {
  return (
    <Box>
      {renderTransactionActionButtons()}
      {renderTransactionFormElements()}
    </Box>
  );
};

export default transactionForm;
