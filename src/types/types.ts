export interface Credentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
}

export interface ApiError {
  status: number | undefined;
  message: string;
}

export interface CookieOptions {
  [key: string]: string | boolean;
}
