import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { loginUser } from './api';
import { type LoginCredentials, type AuthResponse } from '@/lib/types/member';
import { AxiosError } from 'axios';

interface UserState {
    user: AuthResponse | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

interface UserActions {
    login: (credentials: LoginCredentials) => Promise<AuthResponse | undefined>;
    logout: () => void;

}

type AppStoreUser = UserActions & UserState;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createUserSlice = (set: any): AppStoreUser => ({
    user: null,
    isAuthenticated: false, 
    isLoading: false,
    error: null,
    login: async (credentials: LoginCredentials) => {
        set({ isLoading: true });
        try{
            const response: AuthResponse = await loginUser(credentials);
            set({ user: response, isAuthenticated: true, isLoading: false})
            return response;
        }catch(error){
            console.log('### error', error);
            if (error instanceof AxiosError) {
                set({ error: error.response?.data.message, isLoading: false});
            } else {
                set({ error: 'An unknown error occured', isLoading: false})
            }
        }

    },
    logout: () => {
        set({ user: null, isAuthenticated: false, error: null});
    }
});

export const useAppStore = create<AppStoreUser>()(
        persist((set) => ({
            ...createUserSlice(set)
        }),
        {

            name: 'connect-app-storage',
            storage: createJSONStorage(() => localStorage),
            // only persists two parts of the store in localstorage
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
            }),
        }
    )
);