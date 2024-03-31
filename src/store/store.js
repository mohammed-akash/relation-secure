import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const useStore = create(
    persist(
        (set, get) => ({
            CartPrice: 0,
            FavourateList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
        {
            name: 'relation-secure',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)