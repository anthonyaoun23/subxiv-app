/**
 * API client for communicating with the backend
 */

// Base API URL - use environment variable in production
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';

// Types
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  user: User | null;
  error?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

// Helper function for fetch with credentials
async function fetchWithCredentials(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${API_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
    credentials: 'include' as RequestCredentials,
  };

  return fetch(url, config);
}

// API client
export const api = {
  // Auth endpoints
  auth: {
    // Login
    async login(data: LoginData): Promise<AuthResponse> {
      try {
        const response = await fetchWithCredentials('/auth/login', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          return { 
            user: null, 
            error: result.error || 'Login failed' 
          };
        }

        return result;
      } catch (error) {
        console.error('Login error:', error);
        return { 
          user: null, 
          error: 'Network error, please try again' 
        };
      }
    },

    // Register
    async register(data: RegisterData): Promise<AuthResponse> {
      try {
        const response = await fetchWithCredentials('/auth/register', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          return { 
            user: null, 
            error: result.error || 'Registration failed' 
          };
        }

        return result;
      } catch (error) {
        console.error('Registration error:', error);
        return { 
          user: null, 
          error: 'Network error, please try again' 
        };
      }
    },

    // Logout
    async logout(): Promise<{ success: boolean; error?: string }> {
      try {
        const response = await fetchWithCredentials('/auth/logout', {
          method: 'POST',
        });

        const result = await response.json();

        if (!response.ok) {
          return { 
            success: false, 
            error: result.error || 'Logout failed' 
          };
        }

        return { success: true };
      } catch (error) {
        console.error('Logout error:', error);
        return { 
          success: false, 
          error: 'Network error, please try again' 
        };
      }
    },

    // Get current user
    async getCurrentUser(): Promise<AuthResponse> {
      try {
        const response = await fetchWithCredentials('/auth/me');
        const result = await response.json();

        if (!response.ok) {
          return { user: null };
        }

        return result;
      } catch (error) {
        console.error('Get current user error:', error);
        return { user: null };
      }
    },
  },
};