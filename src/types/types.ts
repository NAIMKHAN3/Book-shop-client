import { ChangeEventHandler } from 'react';
export interface IUser {
    _id: string | null;
    email: string | null;
    name: string | null;
    token: string | null;
}
export type IError = {
    status?: number;
    data?: {
        success?: boolean;
        statusCode?: number;
        message?: string;
        stack?: string;
    }
}
export type IProps = {
    className?: string;
    children?: React.ReactNode;
    value?: string;
    src?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type IInput = {
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    type?: string;
    className?: string;
    placeholder?: string;
}

export type IInputDiv = {
    type?: string;
    level?: string;
    className?: string;
    placeholder?: string;
}

export type IBook = {
    title: string;
    genre: string;
    price: number;
    image: string;
}

export type IImageResponse = {
    data: {
        message: string;
        data: any;
    }
}