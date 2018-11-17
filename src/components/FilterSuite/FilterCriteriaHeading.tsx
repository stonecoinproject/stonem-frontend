import * as React from 'react';
import { Flex } from 'rebass';
import { CapsText } from '../UI';

const FilterCriteriaHeading = () => {
  return (
        <Flex>
            <CapsText
                width={0.3}
                fontSize={1}
                py={3}
            >
                Filters (3/3)
            </CapsText>
            <Flex
                width={0.7}
                flexDirection={'row-reverse'}
            >
                <Flex>
                    <CapsText
                        fontSize={1}
                        py={3}
                        mr={4}
                    >
                        Layout
                    </CapsText>
                </Flex>
            </Flex>
        </Flex>
  );
};

export default FilterCriteriaHeading;
