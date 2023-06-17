import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";

import { useTable, List,ShowButton, EditButton,} from "@refinedev/antd";

import { Table, Space } from "antd";



import { IAuthUser } from "interfaces";


export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable<IAuthUser>();
    return (
        <List>  
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex = "id" title="Email" /> 
                <Table.Column dataIndex="fullname" title="FullName" />
                <Table.Column dataIndex="phone" title="Phone" />
                <Table.Column<IAuthUser>
                            title="Actions"
                            dataIndex="actions"
                            render={(_, record): React.ReactNode => {
                                return (
                                    <Space>
                                        <ShowButton
                                            size="small"
                                            recordItemId={record.id}
                                            hideText
                                        />
                                        <EditButton
                                            size="small"
                                            recordItemId={record.id}
                                            hideText
                                        />
                                    </Space>
                                );
                            }}
                        />
            </Table>
        </List>
    );
};
