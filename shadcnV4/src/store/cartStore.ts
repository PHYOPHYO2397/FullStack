import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartState {
  carts: CartItem[];
}

interface CartActions {
  getTotalItems: () => number;
  getTotalPrice: () => number;
  addItem: (item: CartItem) => void;
  updateItem: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  carts: [],
};

export const useCartStore = create<CartState & CartActions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      getTotalItems = () => {
        const { carts } = get();
        return carts.reduce((total, product) => total + product.quantity, 0);
      },
      getTotalPrice = () => {
        const { carts } = get();
        return carts.reduce(
          (total, product) => total + product.price * product.quantity,
          0,
        );
      },
      addItem = (item) =>
        set((state) => {
          const existingItem = state.carts.find((i) => {
            i.id == item.id;
          });
          if (existingItem) {
          } else state.carts.push(item);
        }),
      updateItem = () => {},
      removeItem = () => {},
      clearCart = () => {
        set(initialState);
      },
    })),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
