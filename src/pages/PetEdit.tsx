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
import {petFields} from "./PetList";

export const PetEdit: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    fields: ["id", ...petFields],
  };

  const {formProps, saveButtonProps} = useForm<IOwner>({
    metaData
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
};
