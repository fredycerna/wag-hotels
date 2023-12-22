import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL, LOGIN_ENDPOINT } from './constants';
import { ApiError, AuthResponse, Credentials } from '../types/types';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (
  credentials: Credentials,
): Promise<AuthResponse> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
  };

  try {
    const response: AxiosResponse<AuthResponse> = await api.post(
      LOGIN_ENDPOINT,
      credentials,
      config,
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message,
        status: axiosError.status,
      } as ApiError;
    } else {
      throw error;
    }
  }
};
