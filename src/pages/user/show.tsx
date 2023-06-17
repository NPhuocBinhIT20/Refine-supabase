import { useShow} from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";
import { IAuthUser } from "interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC = () => {
    const { queryResult } = useShow<IAuthUser>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>User:</Title>
            <Text>{record?.fullname || "-"}</Text>

            <Title level={5}>User Phone:</Title>
            <Text>{record?.phone}</Text>

            <Title level={5}>Email:</Title>
            <Text>{record?.email || "-"}</Text>
        </Show>
    );
};
