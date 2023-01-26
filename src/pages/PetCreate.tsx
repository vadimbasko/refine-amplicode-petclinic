import React, {useState} from "react";
import {
  Create,
  Form,
  Input,
  useForm
} from "@pankod/refine-antd";
import {HttpError, IResourceComponentsProps} from "@pankod/refine-core";
import {IOwner} from "../interfaces";
import {capitalCase} from "change-case";
import {petFields} from "./PetList";
import {NamePath} from "rc-field-form/es/interface";
import {ErrorMessages} from "./ErrorMessages";

interface FieldData {
  errors?: string[];
  name: NamePath;
  touched?: boolean;
  validating?: boolean;
  value?: any;
}

export const PetCreate: React.FC<IResourceComponentsProps> = () => {

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const onMutationError = (error: HttpError,
                           setFields: (fields: FieldData[]) => void,
                           setFormErrors: (value: (((prevState: string[]) => string[]) | string[])) => void) => {

    petFields.forEach(value => {
      setFields([{name: value, errors: []}]);
    });
    setFormErrors([]);

    if (error?.response?.errors?.length && error?.response?.errors?.length > 0) {
      const errors = (error.response.errors as any[]);

      if (errors[0]?.extensions?.path?.length && errors[0]?.extensions?.path?.length > 0) {
        const message = errors[0].message;
        const path = errors[0].extensions.path[0];

        if (path.length > 0) {
          setFields([{'name': path, errors: [message]}])
        } else {
          setFormErrors([message]);
        }
      }
    }

    return false;
  }

  const {formProps, saveButtonProps, form} = useForm<IOwner>({
    onMutationError: error => onMutationError(error, form.setFields, setFormErrors),
    errorNotification: false,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">

        {petFields.map(name =>
          <Form.Item
            label={capitalCase(name)}
            name={name}
          >
            <Input/>
          </Form.Item>
        )}
        <ErrorMessages errorMessages={formErrors} />
      </Form>
    </Create>
  );
};
