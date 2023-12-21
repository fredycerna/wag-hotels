// types.ts
import { AxiosError } from 'axios';

export interface Credentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
}

export type AxiosErrorWithData = AxiosError & {
  response?: {
    data?: unknown;
  };
};
