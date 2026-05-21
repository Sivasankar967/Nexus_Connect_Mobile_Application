import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import {
  DEMO_CREDENTIALS,
  CURRENT_USER_ID,
  getEmployeeById,
  recognitionPosts as initialPosts,
  addRecognitionPost as seedAddPost,
} from '../data/seed';

const TOKEN_KEY = 'nexusconnect_token';
const USER_KEY = 'nexusconnect_user_id';

export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  recognitionPosts: [...initialPosts],

  hydrate: async () => {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const userId = await SecureStore.getItemAsync(USER_KEY);
      if (token && userId) {
        const user = getEmployeeById(userId);
        if (user) {
          set({ isAuthenticated: true, user: { ...user }, isLoading: false });
          return;
        }
      }
    } catch (e) {
      console.warn('Hydrate failed', e);
    }
    set({ isAuthenticated: false, user: null, isLoading: false });
  },

  login: async (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (
      normalizedEmail !== DEMO_CREDENTIALS.email ||
      password !== DEMO_CREDENTIALS.password
    ) {
      throw new Error('Invalid email or password');
    }

    const user = getEmployeeById(CURRENT_USER_ID);
    if (!user) throw new Error('User not found');

    await SecureStore.setItemAsync(TOKEN_KEY, 'mock-jwt-token-nexusconnect');
    await SecureStore.setItemAsync(USER_KEY, CURRENT_USER_ID);

    set({ isAuthenticated: true, user: { ...user }, isLoading: false });
    return user;
  },

  logout: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER_KEY);
    set({ isAuthenticated: false, user: null });
  },

  refreshUser: () => {
    const { user } = get();
    if (!user) return;
    const fresh = getEmployeeById(user.id);
    if (fresh) set({ user: { ...fresh } });
  },

  addRecognitionPost: ({ toEmployeeId, badgeId, message }) => {
    const { user } = get();
    if (!user) throw new Error('Not authenticated');

    const post = seedAddPost({
      fromEmployeeId: user.id,
      toEmployeeId,
      badgeId,
      message,
    });

    const freshUser = getEmployeeById(user.id);
    set((state) => ({
      recognitionPosts: [post, ...state.recognitionPosts],
      user: freshUser ? { ...freshUser } : state.user,
    }));

    return post;
  },

  getRecognitionPosts: () => get().recognitionPosts,
}));
