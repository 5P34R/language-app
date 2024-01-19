import * as jose from 'jose';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const decodeToken = async (cookie: string) => {
  try {
      const token = cookie.split('=')[1];
      console.log('Decoding token...', token);
      const { payload, protectedHeader } = await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      console.log(payload);
      return payload;
  } catch (error) {
      console.error('Error decoding token:', error);
      return null;
  }
};