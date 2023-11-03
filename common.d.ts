declare module 'odash' {
    export function isEmpty(value: any): boolean;
    export function isUndefined(value: any): boolean;
    export function sumBy(collection: any[], iteratee: string | ((item: any) => number)): number;
    export function delay(ms?: number): Promise<null>;
    export function validatePassword(password: string): boolean;
    export function concatStrings(array: (string | { [key: string]: string })[], separator?: string, key?: string): string;
    export function filterArray(array: any[], value: any, key?: string): any[];
    export function replaceElement(array: any[], key: string, value: any, newData: any): any[];
    export function concatArrays(firstChunk: any[], secondChunk: any[]): any[];
    export function getDropdownOptions(object: { [key: string]: string }, value?: string): { label: string; value: string }[] | { label: string; value: string } | string;
    export function positiveNumberCheck(value: any): boolean;
    export function getDates(noOfDays: number): { endDate: Date; startDate: Date };
    export function validateObject(object: { [key: string]: any }): boolean;
    export function sumOfArray(arr: any[], key: string): number;
    export function dateStr(date: Date): string;
    export const emptyObjectValues: (object: { [key: string]: any }) => boolean;
    export const removeEmptyFields: (object: { [key: string]: any }) => { [key: string]: any };
    export const downloadFileFromUrl: (url: string, fileName: string) => void;
    export const isEmptyString: (value: any) => boolean;
}

export = o_;
export as namespace o_;