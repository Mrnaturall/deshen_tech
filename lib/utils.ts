import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// for format error
interface ZodError {
  name: 'ZodError';
  errors: Array<{
    path: (string | number)[];
    message: string;
  }>;
}

interface ValidationError {
  name: 'ValidationError';
  errors: Record<string, { message: string }>;
}

interface MongoError {
  code: number;
  keyValue?: Record<string, unknown>;
}

interface ErrorWithMessage {
  message: string | unknown;
}

type KnownError = ZodError | ValidationError | MongoError | ErrorWithMessage;

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}

// PROMPT: [ChatGTP] create toSlug ts arrow function that convert text to lowercase, remove non-word, non-whitespace, non-hyphen characters, replace whitespace, trim leading hyphens and trim trailing hyphens
export const toSlug = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NG', {
  currency: 'NGN', // Nigerian Naira
  style: 'currency',
  minimumFractionDigits: 2,
})

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-NG')
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number)
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join('')

// users - removed unused eslint-disable comment
export function formatError(error: unknown): string {
  // Handle known class-based error
  if (error instanceof Error) {
    return error.message;
  }

  // Handle string errors directly
  if (typeof error === 'string') {
    return error;
  }

  // Handle object-based errors
  if (error && typeof error === 'object') {
    const err = error as KnownError;
    
    // Zod validation error
    if ('name' in err && err.name === 'ZodError' && 'errors' in err) {
      const zodErrors = err.errors || [];
      const fieldErrors = zodErrors.map((fieldError) => {
        return `${fieldError.path.join('.')}: ${fieldError.message}`;
      });
      return fieldErrors.join('. ');
    }

    // Mongoose validation error
    if ('name' in err && err.name === 'ValidationError' && 'errors' in err) {
      const errors = err.errors || {};
      const fieldErrors = Object.keys(errors).map((field) => {
        return errors[field].message;
      });
      return fieldErrors.join('. ');
    }

    // MongoDB duplicate key error
    if ('code' in err && err.code === 11000) {
      const duplicateField = Object.keys((err as MongoError).keyValue || {})[0];
      return `${duplicateField} already exists`;
    }

    // Generic object with message
    if ('message' in err && typeof err.message === 'string') {
      return err.message;
    }

    // If message is an object or unknown
    if ('message' in err) {
      return JSON.stringify(err.message);
    }
  }

  // Fallback message
  return 'An unknown error occurred';
}

export function calculateFutureDate(days: number) {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + days)
  return currentDate
}



export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }
  const dateOptions: Intl.DateTimeFormatOptions = {
    // weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    'en-US',
    dateTimeOptions
  )
  const formattedDate: string = new Date(dateString).toLocaleString(
    'en-US',
    dateOptions
  )
  const formattedTime: string = new Date(dateString).toLocaleString(
    'en-US',
    timeOptions
  )
  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  }
}

export function formatId(id: string) {
  return `..${id.substring(id.length - 6)}`
}
