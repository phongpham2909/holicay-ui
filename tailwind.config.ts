import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    colors: {
      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        50: "var(--color-secondary-50)",
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
      gray: {
        50: "var(--color-gray-50)",
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      error: {
        50: "var(--color-error-50)",
        100: "var(--color-error-100)",
        200: "var(--color-error-200)",
        300: "var(--color-error-300)",
        400: "var(--color-error-400)",
        500: "var(--color-error-500)",
        600: "var(--color-error-600)",
        700: "var(--color-error-700)",
        800: "var(--color-error-800)",
        900: "var(--color-error-900)",
      },
      warning: {
        50: "var(--color-warning-50)",
        100: "var(--color-warning-100)",
        200: "var(--color-warning-200)",
        300: "var(--color-warning-300)",
        400: "var(--color-warning-400)",
        500: "var(--color-warning-500)",
        600: "var(--color-warning-600)",
        700: "var(--color-warning-700)",
        800: "var(--color-warning-800)",
        900: "var(--color-warning-900)",
      },
      success: {
        50: "var(--color-success-50)",
        100: "var(--color-success-100)",
        200: "var(--color-success-200)",
        300: "var(--color-success-300)",
        400: "var(--color-success-400)",
        500: "var(--color-success-500)",
        600: "var(--color-success-600)",
        700: "var(--color-success-700)",
        800: "var(--color-success-800)",
        900: "var(--color-success-900)",
      },
      info: {
        50: "var(--color-info-50)",
        100: "var(--color-info-100)",
        200: "var(--color-info-200)",
        300: "var(--color-info-300)",
        400: "var(--color-info-400)",
        500: "var(--color-info-500)",
        600: "var(--color-info-600)",
        700: "var(--color-info-700)",
        800: "var(--color-info-800)",
        900: "var(--color-info-900)",
      },
      additional: {
        50: "var(--color-additional-50)",
        100: "var(--color-additional-100)",
        200: "var(--color-additional-200)",
        300: "var(--color-additional-300)",
        400: "var(--color-additional-400)",
        500: "var(--color-additional-500)",
        600: "var(--color-additional-600)",
        700: "var(--color-additional-700)",
        800: "var(--color-additional-800)",
        900: "var(--color-additional-900)",
      },
      white: "var(--color-base-white)",
      black: "var(--color-base-black)",
      "base-primary": "var(--color-gray-900)",
      "base-primary_disabled": "var(--color-gray-400)",
      "base-secondary": "var(--color-gray-700)",
      "base-secondary_hover": "var(--color-gray-800)",
      "base-secondary_active": "var(--color-gray-900)",
      "base-secondary_disabled": "var(--color-gray-400)",

      "base-tertiary": "var(--color-gray-600)",
      "base-tertiary_hover": "var(--color-gray-700)",
      "base-tertiary_active": "var(--color-gray-800)",
      "base-tertiary_disabled": "var(--color-gray-400)",
      "base-subtle": "var(--color-gray-500)",
      "base-subtle_hover": "var(--color-gray-600)",
      "base-subtle_active": "var(--color-gray-700)",
      "base-subtle_disabled": "var(--color-gray-400)",

      "brand-red-primary": "var(--color-primary-500)",
      "brand-red-primary_hover": "var(--color-primary-600)",
      "brand-red-primary_active": "var(--color-primary-700)",
      "brand-red-primary_disabled": "var(--color-primary-200)",

      "brand-green-primary": "var(--color-secondary-400)",
      "brand-green-primary_hover": "var(--color-secondary-500)",
      "brand-green-primary_active": "var(--color-secondary-600)",
      "brand-green-primary_disabled": "var(--color-secondary-200)",
      "brand-green-secondary": "var(--color-secondary-300)",
      "brand-green-secondary_hover": "var(--color-secondary-400)",
      "brand-green-secondary_active": "var(--color-secondary-500)",
      "brand-green-secondary_disabled": "var(--color-secondary-100)",

      "warning-primary": "var(--color-warning-500)",
      warning_hover: "var(--color-warning-600)",
      warning_active: "var(--color-warning-700)",
      warning_disabled: "var(--color-warning-200)",

      "success-primary": "var(--color-success-500)",
      success_hover: "var(--color-success-600)",
      success_active: "var(--color-success-700)",
      success_disabled: "var(--color-success-200)",

      "error-primary": "var(--color-error-500)",
      error_hover: "var(--color-error-600)",
      error_active: "var(--color-error-700)",
      error_disabled: "var(--color-error-200)",

      "info-primary": "var(--color-info-500)",
      info_hover: "var(--color-info-600)",
      info_active: "var(--color-info-700)",
      info_disabled: "var(--color-info-200)",

      "additional-primary": "var(--color-additional-500)",
      additional_hover: "var(--color-additional-600)",
      additional_active: "var(--color-additional-700)",
      additional_disabled: "var(--color-additional-200)",
    },
    extend: {
      spacing: {
        none: "0rem", // 0px
        xxs: "0.125rem", // 2px
        xs: "0.25rem", // 4px
        sm: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24px
        "4xl": "2rem", // 32px
        "5xl": "2.5rem", // 40px
        "6xl": "3rem", // 48px
        "7xl": "4rem", // 64px
        "8xl": "5rem", // 80px
        "9xl": "6rem", // 96px
        "10xl": "7rem", // 128px
        "11xl": "8rem", // 160px
      },
      width: {
        xxs: "20rem", // 320px
        xs: "24rem", // 384px
        sm: "30rem", // 480px
        md: "40rem", // 560px
        lg: "45rem", // 640px
        xl: "48rem", // 768px
        "2xl": "64rem", // 1024px
        "3xl": "80rem", // 1280px
        "4xl": "90rem", // 1440px
        "5xl": "100rem", // 1600px
        "6xl": "120rem", // 1920px
      },
      borderRadius: {
        none: "0rem", // 0px
        xxs: "0.25rem", // 4px
        xs: "0.375rem", // 6px
        sm: "0.5rem", // 8px
        md: "0.625rem", // 10px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24px
        "4xl": "2rem", // 32px
        "5xl": "2.5rem", // 40px
        full: "3rem", // 48px
      },
      backgroundColor: {
        "surface-base-primary": "var(--color-base-white)",
        "surface-base-primary_hover": "var(--color-gray-50)",
        "surface-base-primary_active": "var(--color-gray-100)",
        "surface-base-primary_disabled": "var(--color-gray-100)",
        "surface-base-secondary": "var(--color-gray-50)",
        "surface-base-secondary_hover": "var(--color-gray-100)",
        "surface-base-secondary_active": "var(--color-gray-200)",
        "surface-base-secondary_disabled": "var(--color-gray-200)",
        "surface-base-tertiary": "var(--color-gray-100)",
        "surface-base-tertiary_hover": "var(--color-gray-200)",
        "surface-base-tertiary_active": "var(--color-gray-300)",
        "surface-base-tertiary_disabled": "var(--color-gray-300)",

        "surface-brand-red-primary": "var(--color-primary-50)",
        "surface-brand-red-primary_hover": "var(--color-primary-100)",
        "surface-brand-red-primary_active": "var(--color-primary-200)",
        "surface-brand-red-primary_disabled": "var(--color-primary-200)",
        "surface-brand-red-secondary": "var(--color-primary-100)",
        "surface-brand-red-secondary_hover": "var(--color-primary-200)",
        "surface-brand-red-secondary_active": "var(--color-primary-300)",
        "surface-brand-red-secondary_disabled": "var(--color-primary-300)",
        "surface-brand-red-tertiary": "var(--color-primary-100)",
        "surface-brand-red-tertiary_hover": "var(--color-primary-200)",
        "surface-brand-red-tertiary_active": "var(--color-primary-300)",
        "surface-brand-red-tertiary_disabled": "var(--color-primary-300)",

        "surface-brand-green-primary": "var(--color-secondary-50)",
        "surface-brand-green-primary_hover": "var(--color-secondary-100)",
        "surface-brand-green-primary_active": "var(--color-secondary-200)",
        "surface-brand-green-primary_disabled": "var(--color-secondary-200)",
        "surface-brand-green-secondary": "var(--color-secondary-100)",
        "surface-brand-green-secondary_hover": "var(--color-secondary-200)",
        "surface-brand-green-secondary_active": "var(--color-secondary-300)",
        "surface-brand-green-secondary_disabled": "var(--color-secondary-300)",
        "surface-brand-green-tertiary": "var(--color-secondary-100)",
        "surface-brand-green-tertiary_hover": "var(--color-secondary-200)",
        "surface-brand-green-tertiary_active": "var(--color-secondary-300)",
        "surface-brand-green-tertiary_disabled": "var(--color-secondary-300)",

        "surface-warning-primary": "var(--color-warning-50)",
        "surface-warning-primary_hover": "var(--color-warning-100)",
        "surface-warning-primary_active": "var(--color-warning-200)",
        "surface-warning-primary_disabled": "var(--color-warning-200)",
        "surface-warning-secondary": "var(--color-warning-100)",
        "surface-warning-secondary_hover": "var(--color-warning-200)",
        "surface-warning-secondary_active": "var(--color-warning-300)",
        "surface-warning-secondary_disabled": "var(--color-warning-300)",
        "surface-warning-tertiary": "var(--color-warning-100)",
        "surface-warning-tertiary_hover": "var(--color-warning-200)",
        "surface-warning-tertiary_active": "var(--color-warning-300)",
        "surface-warning-tertiary_disabled": "var(--color-warning-300)",

        "surface-success-primary": "var(--color-success-50)",
        "surface-success-primary_hover": "var(--color-success-100)",
        "surface-success-primary_active": "var(--color-success-200)",
        "surface-success-primary_disabled": "var(--color-success-200)",
        "surface-success-secondary": "var(--color-success-100)",
        "surface-success-secondary_hover": "var(--color-success-200)",
        "surface-success-secondary_active": "var(--color-success-300)",
        "surface-success-secondary_disabled": "var(--color-success-300)",
        "surface-success-tertiary": "var(--color-success-100)",
        "surface-success-tertiary_hover": "var(--color-success-200)",
        "surface-success-tertiary_active": "var(--color-success-300)",
        "surface-success-tertiary_disabled": "var(--color-success-300)",

        "surface-error-primary": "var(--color-error-50)",
        "surface-error-primary_hover": "var(--color-error-100)",
        "surface-error-primary_active": "var(--color-error-200)",
        "surface-error-primary_disabled": "var(--color-error-200)",
        "surface-error-secondary": "var(--color-error-100)",
        "surface-error-secondary_hover": "var(--color-error-200)",
        "surface-error-secondary_active": "var(--color-error-300)",
        "surface-error-secondary_disabled": "var(--color-error-300)",
        "surface-error-tertiary": "var(--color-error-100)",
        "surface-error-tertiary_hover": "var(--color-error-200)",
        "surface-error-tertiary_active": "var(--color-error-300)",
        "surface-error-tertiary_disabled": "var(--color-error-300)",

        "surface-info-primary": "var(--color-info-50)",
        "surface-info-primary_hover": "var(--color-info-100)",
        "surface-info-primary_active": "var(--color-info-200)",
        "surface-info-primary_disabled": "var(--color-info-200)",
        "surface-info-secondary": "var(--color-info-100)",
        "surface-info-secondary_hover": "var(--color-info-200)",
        "surface-info-secondary_active": "var(--color-info-300)",
        "surface-info-secondary_disabled": "var(--color-info-300)",
        "surface-info-tertiary": "var(--color-info-100)",
        "surface-info-tertiary_hover": "var(--color-info-200)",
        "surface-info-tertiary_active": "var(--color-info-300)",
        "surface-info-tertiary_disabled": "var(--color-info-300)",

        "surface-additional-primary": "var(--color-additional-50)",
        "surface-additional-primary_hover": "var(--color-additional-100)",
        "surface-additional-primary_active": "var(--color-additional-200)",
        "surface-additional-primary_disabled": "var(--color-additional-200)",
        "surface-additional-secondary": "var(--color-additional-100)",
        "surface-additional-secondary_hover": "var(--color-additional-200)",
        "surface-additional-secondary_active": "var(--color-additional-300)",
        "surface-additional-secondary_disabled": "var(--color-additional-300)",
        "surface-additional-tertiary": "var(--color-additional-100)",
        "surface-additional-tertiary_hover": "var(--color-additional-200)",
        "surface-additional-tertiary_active": "var(--color-additional-300)",
        "surface-additional-tertiary_disabled": "var(--color-additional-300)",

        "fill-base-primary": "var(--color-gray-300)",
        "fill-base-primary_hover": "var(--color-gray-400)",
        "fill-base-primary_active": "var(--color-gray-500)",
        "fill-base-primary_disabled": "var(--color-gray-200)",
        "fill-base-primary_subtle": "var(--color-gray-200)",
        "fill-base-secondary": "var(--color-gray-500)",
        "fill-base-secondary_hover": "var(--color-gray-600)",
        "fill-base-secondary_active": "var(--color-gray-700)",
        "fill-base-secondary_disabled": "var(--color-gray-400)",
        "fill-base-secondary_subtle": "var(--color-gray-400)",
        "fill-base-tertiary": "var(--color-gray-100)",
        "fill-base-tertiary_hover": "var(--color-gray-200)",
        "fill-base-tertiary_active": "var(--color-gray-300)",
        "fill-base-tertiary_disabled": "var(--color-gray-100)",
        "fill-base-tertiary_subtle": "var(--color-gray-100)",

        "fill-brand-red-primary": "var(--color-primary-500)",
        "fill-brand-red-primary_hover": "var(--color-primary-600)",
        "fill-brand-red-primary_active": "var(--color-primary-700)",
        "fill-brand-red-primary_disabled": "var(--color-primary-400)",
        "fill-brand-red-primary_subtle": "var(--color-primary-400)",
        "fill-brand-red-secondary": "var(--color-primary-300)",
        "fill-brand-red-secondary_hover": "var(--color-primary-400)",
        "fill-brand-red-secondary_active": "var(--color-primary-500)",
        "fill-brand-red-secondary_disabled": "var(--color-primary-200)",
        "fill-brand-red-secondary_subtle": "var(--color-primary-200)",
        "fill-brand-red-tertiary": "var(--color-primary-100)",
        "fill-brand-red-tertiary_hover": "var(--color-primary-200)",
        "fill-brand-red-tertiary_active": "var(--color-primary-300)",
        "fill-brand-red-tertiary_disabled": "var(--color-primary-100)",
        "fill-brand-red-tertiary_subtle": "var(--color-primary-100)",

        "fill-brand-green-primary": "var(--color-secondary-500)",
        "fill-brand-green-primary_hover": "var(--color-secondary-600)",
        "fill-brand-green-primary_active": "var(--color-secondary-700)",
        "fill-brand-green-primary_disabled": "var(--color-secondary-400)",
        "fill-brand-green-primary_subtle": "var(--color-secondary-400)",
        "fill-brand-green-secondary": "var(--color-secondary-300)",
        "fill-brand-green-secondary_hover": "var(--color-secondary-400)",
        "fill-brand-green-secondary_active": "var(--color-secondary-500)",
        "fill-brand-green-secondary_disabled": "var(--color-secondary-200)",
        "fill-brand-green-secondary_subtle": "var(--color-secondary-200)",
        "fill-brand-green-tertiary": "var(--color-secondary-100)",
        "fill-brand-green-tertiary_hover": "var(--color-secondary-200)",
        "fill-brand-green-tertiary_active": "var(--color-secondary-300)",
        "fill-brand-green-tertiary_disabled": "var(--color-secondary-100)",
        "fill-brand-green-tertiary_subtle": "var(--color-secondary-100)",

        "fill-warning-primary": "var(--color-warning-500)",
        "fill-warning-primary_hover": "var(--color-warning-600)",
        "fill-warning-primary_active": "var(--color-warning-700)",
        "fill-warning-primary_disabled": "var(--color-warning-400)",
        "fill-warning-primary_subtle": "var(--color-warning-400)",
        "fill-warning-secondary": "var(--color-warning-300)",
        "fill-warning-secondary_hover": "var(--color-warning-400)",
        "fill-warning-secondary_active": "var(--color-warning-500)",
        "fill-warning-secondary_disabled": "var(--color-warning-200)",
        "fill-warning-secondary_subtle": "var(--color-warning-200)",
        "fill-warning-tertiary": "var(--color-warning-100)",
        "fill-warning-tertiary_hover": "var(--color-warning-200)",
        "fill-warning-tertiary_active": "var(--color-warning-300)",
        "fill-warning-tertiary_disabled": "var(--color-warning-100)",
        "fill-warning-tertiary_subtle": "var(--color-warning-100)",

        "fill-success-primary": "var(--color-success-500)",
        "fill-success-primary_hover": "var(--color-success-600)",
        "fill-success-primary_active": "var(--color-success-700)",
        "fill-success-primary_disabled": "var(--color-success-400)",
        "fill-success-primary_subtle": "var(--color-success-400)",
        "fill-success-secondary": "var(--color-success-300)",
        "fill-success-secondary_hover": "var(--color-success-400)",
        "fill-success-secondary_active": "var(--color-success-500)",
        "fill-success-secondary_disabled": "var(--color-success-200)",
        "fill-success-secondary_subtle": "var(--color-success-200)",
        "fill-success-tertiary": "var(--color-success-100)",
        "fill-success-tertiary_hover": "var(--color-success-200)",
        "fill-success-tertiary_active": "var(--color-success-300)",
        "fill-success-tertiary_disabled": "var(--color-success-100)",
        "fill-success-tertiary_subtle": "var(--color-success-100)",

        "fill-error-primary": "var(--color-error-500)",
        "fill-error-primary_hover": "var(--color-error-600)",
        "fill-error-primary_active": "var(--color-error-700)",
        "fill-error-primary_disabled": "var(--color-error-400)",
        "fill-error-primary_subtle": "var(--color-error-400)",
        "fill-error-secondary": "var(--color-error-300)",
        "fill-error-secondary_hover": "var(--color-error-400)",
        "fill-error-secondary_active": "var(--color-error-500)",
        "fill-error-secondary_disabled": "var(--color-error-200)",
        "fill-error-secondary_subtle": "var(--color-error-200)",
        "fill-error-tertiary": "var(--color-error-100)",
        "fill-error-tertiary_hover": "var(--color-error-200)",
        "fill-error-tertiary_active": "var(--color-error-300)",
        "fill-error-tertiary_disabled": "var(--color-error-100)",
        "fill-error-tertiary_subtle": "var(--color-error-100)",

        "fill-info-primary": "var(--color-info-500)",
        "fill-info-primary_hover": "var(--color-info-600)",
        "fill-info-primary_active": "var(--color-info-700)",
        "fill-info-primary_disabled": "var(--color-info-400)",
        "fill-info-primary_subtle": "var(--color-info-400)",
        "fill-info-secondary": "var(--color-info-300)",
        "fill-info-secondary_hover": "var(--color-info-400)",
        "fill-info-secondary_active": "var(--color-info-500)",
        "fill-info-secondary_disabled": "var(--color-info-200)",
        "fill-info-secondary_subtle": "var(--color-info-200)",
        "fill-info-tertiary": "var(--color-info-100)",
        "fill-info-tertiary_hover": "var(--color-info-200)",
        "fill-info-tertiary_active": "var(--color-info-300)",
        "fill-info-tertiary_disabled": "var(--color-info-100)",
        "fill-info-tertiary_subtle": "var(--color-info-100)",

        "fill-additional-primary": "var(--color-additional-500)",
        "fill-additional-primary_hover": "var(--color-additional-600)",
        "fill-additional-primary_active": "var(--color-additional-700)",
        "fill-additional-primary_disabled": "var(--color-additional-400)",
        "fill-additional-primary_subtle": "var(--color-additional-400)",
        "fill-additional-secondary": "var(--color-additional-300)",
        "fill-additional-secondary_hover": "var(--color-additional-400)",
        "fill-additional-secondary_active": "var(--color-additional-500)",
        "fill-additional-secondary_disabled": "var(--color-additional-200)",
        "fill-additional-secondary_subtle": "var(--color-additional-200)",
        "fill-additional-tertiary": "var(--color-additional-100)",
        "fill-additional-tertiary_hover": "var(--color-additional-200)",
        "fill-additional-tertiary_active": "var(--color-additional-300)",
        "fill-additional-tertiary_disabled": "var(--color-additional-100)",
        "fill-additional-tertiary_subtle": "var(--color-additional-100)",

        "surface-overlay-w": "var(--surface-overlay-w)",
        "surface-overlay-w_hover": "var(--surface-overlay-w_hover)",
        "surface-overlay-w_active": "var(--surface-overlay-w_active)",
        "surface-overlay-w_disabled": "var(--surface-overlay-w_disabled)",
      },
      borderColor: {
        "base-primary": "var(--color-gray-300)",
        "base-primary_hover": "var(--color-gray-400)",
        "base-primary_active": "var(--color-gray-500)",
        "base-primary_disabled": "var(--color-gray-200)",
        "base-secondary": "var(--color-gray-200)",
        "base-secondary_hover": "var(--color-gray-300)",
        "base-secondary_active": "var(--color-gray-400)",
        "base-secondary_disabled": "var(--color-gray-50)",

        "brand-red-primary": "var(--color-primary-300)",
        "brand-red-primary_hover": "var(--color-primary-400)",
        "brand-red-primary_active": "var(--color-primary-500)",
        "brand-red-primary_disabled": "var(--color-primary-200)",
        "brand-red-secondary": "var(--color-primary-200)",
        "brand-red-secondary_hover": "var(--color-primary-300)",
        "brand-red-secondary_active": "var(--color-primary-400)",
        "brand-red-secondary_disabled": "var(--color-primary-50)",
        "brand-red-solid": "var(--color-primary-500)",
        "brand-red-solid_hover": "var(--color-primary-600)",
        "brand-red-solid_active": "var(--color-primary-700)",
        "brand-red-solid_disabled": "var(--color-primary-200)",

        "brand-green-primary": "var(--color-secondary-300)",
        "brand-green-primary_hover": "var(--color-secondary-400)",
        "brand-green-primary_active": "var(--color-secondary-500)",
        "brand-green-primary_disabled": "var(--color-secondary-200)",
        "brand-green-secondary": "var(--color-secondary-200)",
        "brand-green-secondary_hover": "var(--color-secondary-300)",
        "brand-green-secondary_active": "var(--color-secondary-400)",
        "brand-green-secondary_disabled": "var(--color-secondary-50)",
        "brand-green-solid": "var(--color-secondary-500)",
        "brand-green-solid_hover": "var(--color-secondary-600)",
        "brand-green-solid_active": "var(--color-secondary-700)",
        "brand-green-solid_disabled": "var(--color-secondary-200)",

        "warning-primary": "var(--color-warning-300)",
        "warning-primary_hover": "var(--color-warning-400)",
        "warning-primary_active": "var(--color-warning-500)",
        "warning-primary_disabled": "var(--color-warning-200)",
        "warning-secondary": "var(--color-warning-200)",
        "warning-secondary_hover": "var(--color-warning-300)",
        "warning-secondary_active": "var(--color-warning-400)",
        "warning-secondary_disabled": "var(--color-warning-50)",
        "warning-solid": "var(--color-warning-500)",
        "warning-solid_hover": "var(--color-warning-600)",
        "warning-solid_active": "var(--color-warning-700)",
        "warning-solid_disabled": "var(--color-warning-200)",

        "success-primary": "var(--color-success-300)",
        "success-primary_hover": "var(--color-success-400)",
        "success-primary_active": "var(--color-success-500)",
        "success-primary_disabled": "var(--color-success-200)",
        "success-secondary": "var(--color-success-200)",
        "success-secondary_hover": "var(--color-success-300)",
        "success-secondary_active": "var(--color-success-400)",
        "success-secondary_disabled": "var(--color-success-50)",
        "success-solid": "var(--color-success-500)",
        "success-solid_hover": "var(--color-success-600)",
        "success-solid_active": "var(--color-success-700)",
        "success-solid_disabled": "var(--color-success-200)",

        "error-primary": "var(--color-error-300)",
        "error-primary_hover": "var(--color-error-400)",
        "error-primary_active": "var(--color-error-500)",
        "error-primary_disabled": "var(--color-error-200)",
        "error-secondary": "var(--color-error-200)",
        "error-secondary_hover": "var(--color-error-300)",
        "error-secondary_active": "var(--color-error-400)",
        "error-secondary_disabled": "var(--color-error-50)",
        "error-solid": "var(--color-error-500)",
        "error-solid_hover": "var(--color-error-600)",
        "error-solid_active": "var(--color-error-700)",
        "error-solid_disabled": "var(--color-error-200)",

        "info-primary": "var(--color-info-300)",
        "info-primary_hover": "var(--color-info-400)",
        "info-primary_active": "var(--color-info-500)",
        "info-primary_disabled": "var(--color-info-200)",
        "info-secondary": "var(--color-info-200)",
        "info-secondary_hover": "var(--color-info-300)",
        "info-secondary_active": "var(--color-info-400)",
        "info-secondary_disabled": "var(--color-info-50)",
        "info-solid": "var(--color-info-500)",
        "info-solid_hover": "var(--color-info-600)",
        "info-solid_active": "var(--color-info-700)",
        "info-solid_disabled": "var(--color-info-200)",

        "additional-primary": "var(--color-additional-300)",
        "additional-primary_hover": "var(--color-additional-400)",
        "additional-primary_active": "var(--color-additional-500)",
        "additional-primary_disabled": "var(--color-additional-200)",
        "additional-secondary": "var(--color-additional-200)",
        "additional-secondary_hover": "var(--color-additional-300)",
        "additional-secondary_active": "var(--color-additional-400)",
        "additional-secondary_disabled": "var(--color-additional-50)",
        "additional-solid": "var(--color-additional-500)",
        "additional-solid_hover": "var(--color-additional-600)",
        "additional-solid_active": "var(--color-additional-700)",
        "additional-solid_disabled": "var(--color-additional-200)",
      },
      fontWeight: {
        "weight-custom": "520",
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        serif: ['var(--font-display)'],
        primary: ["var(--font-primary)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        xs: "0px 1px 2px 0px var(--elevation-shadow_low)",
        sm: "0px 1px 2px 0px var(--elevation-shadow_low), 0px 1px 3px 0px var(--elevation-shadow_low)",
        md: "0px 2px 4px -2px var(--elevation-shadow_low), 0px 4px 8px -2px var(--elevation-shadow_low)",
        lg: "0px 4px 6px -2px var(--elevation-shadow_low), 0px 12px 16px -4px var(--elevation-shadow_low)",
        xl: "0px 8px 8px -4px var(--elevation-shadow_low), 0px 20px 24px -4px var(--elevation-shadow_low)",
        "2xl": "0px 24px 48px -12px var(--elevation-shadow_high)",
        "3xl": "0px 32px 64px -12px var(--elevation-shadow_high)",
        focused:
          "0px 1px 2px 0px var(--elevation-shadow_low), 0px 0px 0px 2px var(--color-base-white), 0px 0px 0px 4px var(--color-primary-400)",
        "danger-focused":
          "0px 1px 2px 0px var(--elevation-shadow_low), 0px 0px 0px 2px var(--color-base-white), 0px 0px 0px 4px var(--color-error-400)",
      },
    },
  },
  plugins: [],
} satisfies Config;
