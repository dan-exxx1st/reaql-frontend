import { parse } from 'querystring';

export function getDialogIdFromSearch(search: string) {
    const params = parse(search);

    const dialogId = Object.entries(params)
        .map(([key, value]) => key.indexOf('dialog') !== -1 && value)
        .toString();

    return dialogId;
}
