import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const authStateInitialData = {
  user: null,
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      ...authStateInitialData,
      // 로그인
      login: async (params) => {
        console.log('params', params);
        const newUser = { ...params };
        set({ user: newUser });
      },
      // 로그아웃
      logout: async () => {
        set({ ...authStateInitialData });
      },
      // // 내 정보 가져오기
      // getProfile: async () => {
      //   try {
      //     const res = await Auth.getProfile();
      //     if (res === undefined) return;
      //     if (res.data === undefined) return;
      //     const newUser = { ...res.data.data };
      //     delete newUser.password;
      //     set({ user: newUser });
      //     // 내 정보 가져온 후 메뉴 리스트 받아오기
      //     useMenusStore.getState().getGuiGradeMine();
      //   } catch (error) {
      //     console.log('error', error);
      //   }
      // },
    }),
    {
      name: 'authStore', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
