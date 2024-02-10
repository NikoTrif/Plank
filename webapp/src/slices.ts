import {
    combineReducers,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { UserApi } from "./api";

export interface UserState {
        id: string | undefined,
        userError: string | undefined | unknown,
        loading: boolean | undefined,
        connectionError: string | undefined | unknown
}

export interface PayloadUserByLogin {
    email: string;
    password: string;
}

// Actions
export const fetctUserByLogin = createAsyncThunk(
    "user/fetchUserByLogin",
    async (payload: PayloadUserByLogin[], {rejectWithValue}) => {
        try {
            const response = await new UserApi(
                payload[0].email,
                payload[0].password
            ).Get();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Slices
const UserSlice = createSlice({
    name: "user",
    initialState: {id: undefined, loading: false, userError: undefined, connectionError: undefined} as UserState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetctUserByLogin.rejected, (state, action) => {
            state.loading = false as boolean;
            state.connectionError = action?.payload;
            return state;
        });
        builder.addCase(fetctUserByLogin.pending, (state) => {
            state.loading = true as boolean;
            return state;
        });
        builder.addCase(fetctUserByLogin.fulfilled, (state, action) => {
            state.loading = false as boolean;
            if (action?.payload.length > 1) {
                state.userError = "ERROR: User error" as string;
                return state;
            } else if(action?.payload.length < 1) {
                state.userError = "ERROR: User doesn't exist" as string;
                return state;
            }

            try {
                state.id = action?.payload[0].id as string;
            } catch (error) {
                state.userError = error;
            }
            return state;
        });
    },
});

// Combine Reducers
const rootReducer = combineReducers({
    user: UserSlice.reducer,
});

// Exports
export default rootReducer;
