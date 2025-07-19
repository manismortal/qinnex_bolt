import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  theme: 'light' | 'dark';
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string, referralId: string | null) => Promise<void>;
  logout: () => void;
  toggleTheme: () => void;
}

export const useZustandStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  theme: 'light',
  login: async (username, password) => {
    // Placeholder login logic
    const mockUser = {
      id: '1',
      username: username,
      email: 'test@example.com',
      balance: 100,
    };
    set({ isLoggedIn: true, user: mockUser });
  },
  register: async (username, email, password, referralId) => {
    // Placeholder registration logic
    console.log('Registering', username, email, password, referralId);
    // Here you would typically make an API call to register the user
    // and handle the referral ID
    if (referralId) {
      console.log('Referral ID:', referralId);
      // Here you would typically credit the referrer
    }
    const mockUser = {
      id: '2',
      username: username,
      email: email,
      balance: 0,
    };
    set({ isLoggedIn: true, user: mockUser });
  },
  logout: () => set({ isLoggedIn: false, user: null }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));
