import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { loginUser } from './api';
import { type LoginCredentials, type AuthResponse } from '@/lib/types/member';

interface UserState {
    user: AuthResponse | null;
    isAuthenticated: Boolean;
    isLoading: boolean;
    error: string | null;
}

interface UserActions {
    login: (credentials: LoginCredentials) => Promise<AuthResponse | undefined>;
    logout: () => void;

}

type AppStoreUser = UserActions & UserState;

const createUserSlice = (set): AppStoreUser => ({
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
            set({ error: (error as Error).message, isLoading: false});
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