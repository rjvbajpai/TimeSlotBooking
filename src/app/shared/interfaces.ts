export interface IUserLogin {
    email: string;
    password: string;
}
export interface IToken {
    access_token: string;
    expires_in: number;
    token_type : string;
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}