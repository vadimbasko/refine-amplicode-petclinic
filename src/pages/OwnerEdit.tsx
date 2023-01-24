import React from "react";
import {
  Edit,
  Form,
  Input,
  useForm
} from "@pankod/refine-antd";
import {IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {IOwner} from "../interfaces";
import {capitalCase} from "change-case";

export const OwnerEdit: React.FC<IResourceComponentsProps> = () => {

  const fields = ["firstName", "lastName", "address", "city"];
  const metaData: MetaDataQuery = {
    fields: ["id", ...fields],
  };

  const {formProps, saveButtonProps} = useForm<IOwner>({
    metaData
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
};
