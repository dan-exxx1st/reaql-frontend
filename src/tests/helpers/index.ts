import { format } from 'date-fns';

export const GenerateDate = format(new Date(2020, 9, 9), "hh:mm aaaaa'm'");

export type ChildType = JSX.Element | JSX.Element[];
