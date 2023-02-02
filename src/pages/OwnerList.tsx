import {HttpError, IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {IOwner} from "../interfaces";
import {
  CreateButton, DeleteButton, EditButton, List, ShowButton, Space,
  Table, useTable
} from "@pankod/refine-antd";
import React from "react";
import {capitalCase} from "change-case";

export const OwnerList: React.FC<IResourceComponentsProps> = () => {

  const fields = ["firstName", "lastName", "address", "city"];

  const metaData: MetaDataQuery = {
    fields: [ {content: ["id", ...fields]} ],
    operation: "ownerListByNamesFilterOffsetPageSorted",
  };

  const {tableProps} = useTable<IOwner,
    HttpError>({
    metaData,
  });
  const dataSource: readonly IOwner[] | undefined = (tableProps.dataSource as any)?.content;

  return (
    <List headerProps={{extra: <CreateButton/>}}>
      <Table rowKey="id" {...tableProps} dataSource={dataSource} >
        {fields.map(name => (
          <Table.Column
            key={name}
            dataIndex={name}
            title={capitalCase(name)}
          />))
        }

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
