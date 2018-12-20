import * as React from 'react';
import { Box } from 'rebass';
import { IAuthInputField } from '../../config/fields';
import { Input } from '../UI';

type authDialogFormProps = {
  fields: IAuthInputField[],
};

const authDialogForm: React.SFC<authDialogFormProps> = ({ fields }: authDialogFormProps) => {
  return (
    <div>
      {fields.map((field, key) => {
        return (
          <Box
            key={key}
            mb={3}
          >
            <Input
              data-testid={field.testID}
              placeholder={field.label}
              theme={{
                size: 3,
              }}
              type={field.type}
            />
          </Box>
        );
      })}
    </div>
  );
};

export default authDialogForm;
