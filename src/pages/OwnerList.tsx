import {HttpError, IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {IOwner} from "../interfaces";
import {
  CreateButton, DeleteButton, EditButton, List, ShowButton, Space,
  Table, useTable
} from "@pankod/refine-antd";
import React from "react";

export const OwnerList: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    fields: [
      "id",
      "firstName",
      "lastName",
    ],
  };

  const {tableProps} = useTable<IOwner,
    HttpError>({
    metaData,
  });

  return (
    <List headerProps={{extra: <CreateButton/>}}>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="firstName"
          dataIndex="firstName"
          title="First Name"
        />
        <Table.Column
          key="lastName"
          dataIndex="lastName"
          title="Last Name"
        />
        <Table.Column<IOwner>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  )

}
