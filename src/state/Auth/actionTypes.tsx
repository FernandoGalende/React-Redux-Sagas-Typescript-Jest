export const GET_TOKEN = 'GET_TOKEN';
export interface GetTokenAction {
    type: typeof GET_TOKEN;
    content: any
}

export const SET_USER = 'SET_USER';
export interface SetUserAction {
    type: typeof SET_USER;
    content: any
}

export const SET_TOKEN = 'SET_TOKEN';
export interface SetTokenAction {
    type: typeof SET_TOKEN;
    content: string;
}

export type AuthAction =
  | GetTokenAction
  | SetTokenAction
  | SetUserAction;
