import { ChangeEventHandler } from 'react';
export interface IUser {
    _id: string | null;
    email: string | null;
    name: string | null;
}

export type IProps = {
    className?: string;
    children?: React.ReactNode;
    value?: string;
    src?: string;
    type?:"button" | "submit" | "reset";
}

export type IInput = {
    id?:string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    type?: string;
    className?: string;
    placeholder?:string;
}

export type IInputDiv = {
    type?: string;
    level?: string;
    className?: string;
    placeholder?:string;
}