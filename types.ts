export type RecordOfTruthyValues<T> = Record<string, T extends false | null | undefined | 0 | "" ? never : T>;

export type falsyValues = string | undefined | null 