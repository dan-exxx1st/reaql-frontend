import { createContext, Dispatch, useReducer } from 'react';
import { User } from 'lib/graphql/types';

export const SAVE_USER = 'SAVE_USER';

export interface SaveUser {
    type: typeof SAVE_USER;
    payload: { user: User };
}

export type UserReducerActions = SaveUser;

export interface IUserReducerState {
    user?: User;
}

export const UserReducer = (
    state: IUserReducerState,
    action: UserReducerActions
) => {
    switch (action.type) {
        case SAVE_USER: {
            const { user } = action.payload;

            return {
                ...state,
                user,
            };
        }
        default:
            return state;
    }
};

export function useUserReducer(): IUserContext {
    const initialState: IUserReducerState = {};

    const [state, dispatch] = useReducer(UserReducer, initialState);

    return {
        state,
        dispatch,
    };
}

interface IUserContext {
    dispatch?: Dispatch<SaveUser>;
    state?: IUserReducerState;
}

export const UserContext = createContext<IUserContext>({});
const UserContextProvider = UserContext.Provider;

export { UserContextProvider };
