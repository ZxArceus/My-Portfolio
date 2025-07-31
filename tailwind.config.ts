import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        // Light Theme Colors
        background: '#FFFFFF', // White
        foreground: '#333333', // Dark Gray
        card: {
          DEFAULT: '#F0F0F0', // Light Gray
          foreground: '#333333', // Dark Gray
        },
        popover: {
          DEFAULT: '#FFFFFF', // White
          foreground: '#333333', // Dark Gray
        },
        primary: {
          DEFAULT: '#007BFF', // Moderate Blue
          foreground: '#FFFFFF', // White
        },
        secondary: {
          DEFAULT: '#28A745', // Subtle Green
          foreground: '#FFFFFF', // White
        },
        muted: {
          DEFAULT: '#F0F0F0', // Light Gray
          foreground: '#555555', // Medium Gray
        },
        accent: {
          DEFAULT: '#28A745', // Subtle Green
          foreground: '#FFFFFF', // White
        },
        destructive: {
          DEFAULT: '#DC3545', // Red
          foreground: '#FFFFFF', // White
        },
        border: '#CED4DA', // Light Blue-Gray
        input: '#CED4DA', // Light Blue-Gray
        ring: '#007BFF', // Moderate Blue
        chart: {
          '1': '#007BFF',
          '2': '#28A745',
          '3': '#FFC107',
          '4': '#DC3545',
          '5': '#6610F2',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
