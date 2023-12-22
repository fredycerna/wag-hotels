import { AuthResponse, CookieOptions } from '../types/types';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const saveTokensToCookies = (authResponse: AuthResponse): void => {
  const cookieOptions: CookieOptions = {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    httpOnly: true,
  };

  document.cookie = `${ACCESS_TOKEN_KEY}=${authResponse.access}; ${serialize(
    cookieOptions,
  )}`;
  document.cookie = `${REFRESH_TOKEN_KEY}=${authResponse.refresh}; ${serialize(
    cookieOptions,
  )}`;
};
export const getAccessTokenFromCookies = (): string | boolean | null => {
  return parseCookies()[ACCESS_TOKEN_KEY] || null;
};

export const getRefreshTokenFromCookies = (): string | boolean | null => {
  return parseCookies()[REFRESH_TOKEN_KEY] || null;
};

const serialize = (options: CookieOptions): string => {
  return Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
};

const parseCookies = (): CookieOptions => {
  return document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as CookieOptions);
};
