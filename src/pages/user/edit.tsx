import { IResourceComponentsProps } from "@refinedev/core";

import { useForm, Edit } from "@refinedev/antd";

import { Form, Input } from "antd";

import { IAuthUser } from "interfaces";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<IAuthUser>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} wrapperCol={{ span: 12 }} layout="vertical">
                <Form.Item label="Phone" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="FullName" name="fullname">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
