export interface ICategory {
    id: string;
    title: string;
}
export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}
export interface IPost {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    images: IFile[];
}
export interface ILabel {
    id: string;
    title: string;
    color: string;
}
export interface IPriority {
    id: string;
    title: string;
}
export interface IStatus {
    id: string;
    title: string;
}
export interface ITask {
    id: string;
    title: string;
    description: string;
    start_time: string;
    end_time: string;
    label: string;
    priority: string;
    status: string;
    users: string;
}
export interface ITaskFilterVariables {
    title: string;
    label: string;
    priority: string;
    users: string;
    status: string;
    start_time: [Dayjs, Dayjs];
    end_time: [Dayjs, Dayjs];
}
export interface IAuthUser {
    id: string;
    email: string;
    phone: string;
    fullname: string;
    avatar: string;
}
export interface ILoginForm {
    email: string;
    password: string;
}