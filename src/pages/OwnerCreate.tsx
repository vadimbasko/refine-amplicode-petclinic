import React from "react";
import {
  Create,
  Form,
  Input,
  useForm
} from "@pankod/refine-antd";
import {IResourceComponentsProps} from "@pankod/refine-core";
import {IOwner} from "../interfaces";
import {capitalCase} from "change-case";

export const OwnerCreate: React.FC<IResourceComponentsProps> = () => {
  const {formProps, saveButtonProps} = useForm<IOwner>();
  const fields = ["firstName", "lastName", "address", "city"];
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">

        {fields.map(name =>
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
