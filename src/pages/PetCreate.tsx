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
import {petFields} from "./PetList";

export const PetCreate: React.FC<IResourceComponentsProps> = () => {
  const {formProps, saveButtonProps} = useForm<IOwner>();
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
