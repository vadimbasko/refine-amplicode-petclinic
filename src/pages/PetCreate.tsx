import React from "react";
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

interface FieldData {
  errors?: string[];
  name: NamePath;
  touched?: boolean;
  validating?: boolean;
  value?: any;
}

export const PetCreate: React.FC<IResourceComponentsProps> = () => {

  const onMutationError = (error: HttpError, setFields: (fields: FieldData[]) => void) => {

    if (error?.response?.errors?.length && error?.response?.errors?.length > 0) {
      const errors = (error.response.errors as any[]);

      if (errors[0]?.extensions?.path?.length && errors[0]?.extensions?.path?.length > 0) {
        const message = errors[0].message;
        const path = errors[0].extensions.path[0];
        console.log("error path", path);
        console.log("error message", message);
        setFields([{'name': path, errors: [message]}])
      }
    }

    return false;
  }

  const {formProps, saveButtonProps, form} = useForm<IOwner>({
    onMutationError: error => onMutationError(error, form.setFields),
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
      </Form>
    </Create>
  );
};
