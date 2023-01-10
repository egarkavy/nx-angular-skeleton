export type ResponseModel<TData> = {
    message?: string;
    success: boolean;
    data: TData;
}
