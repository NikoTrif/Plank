import {
    PayloadAction,
    combineReducers,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { UserApi } from "./api";
import { Type } from "react-bootstrap-icons";

export interface UserState {
    id: string | undefined;
    //userError: string | undefined | unknown,
    loading: boolean | undefined;
    error: string | undefined | unknown;
}

export interface PayloadUserByLogin {
    email: string;
    password: string;
}

export interface IDarkMode {
    darkMode: boolean
}

// Actions
export const fetctUserByLogin = createAsyncThunk(
    "user/fetchUserByLogin",
    async (payload: PayloadUserByLogin[], { rejectWithValue }) => {
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
    initialState: {
        id: undefined,
        loading: false,
        error: undefined,
    } as UserState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetctUserByLogin.rejected, (state, action) => {
            state.loading = false as boolean;
            state.id = undefined;
            state.error = action?.payload;
            return state;
        });
        builder.addCase(fetctUserByLogin.pending, (state) => {
            state.loading = true as boolean;
            state.id = undefined;
            state.error = undefined;
            return state;
        });
        builder.addCase(fetctUserByLogin.fulfilled, (state, action) => {
            state.loading = false as boolean;
            state.id = undefined;
            if (action?.payload.length > 1) {
                state.error = "ERROR: User error" as string;
                return state;
            } else if (action?.payload.length < 1) {
                state.error = "ERROR: User doesn't exist" as string;
                return state;
            }

            try {
                state.id = action?.payload[0].id as string;
            } catch (error) {
                state.error = error;
            }
            return state;
        });
    },
});

export const DarkModeSlice = createSlice({
    name: "darkMode",
    initialState: false,
    reducers: {
        darkModeToggle: (state) => {
            state = !state;
            return state;
        },
    },
});


// Combine Reducers
const rootReducer = combineReducers({
    user: UserSlice.reducer,
    darkMode: DarkModeSlice.reducer,
});

// Exports
// Actions
export const { darkModeToggle } = DarkModeSlice.actions;

// Reducer
export default rootReducer;
