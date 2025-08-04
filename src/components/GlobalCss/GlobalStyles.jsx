import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Color Palette */
    --color-primary: #3b82f6;       /* blue-500 */
    --color-primary-light: #60a5fa; /* blue-400 */
    --color-primary-dark: #2563eb;  /* blue-600 */
    --color-secondary: #06b6d4;     /* cyan-500 */
    --color-accent: #f59e0b;        /* amber-500 */
    --color-danger: #ef4444;        /* red-500 */
    --color-success: #10b981;       /* emerald-500 */
    --color-gray-900: #111827;
    --color-gray-800: #1f2937;
    --color-gray-700: #374151;
    --color-gray-600: #4b5563;
    --color-gray-500: #6b7280;
    --color-gray-400: #9ca3af;
    --color-gray-300: #d1d5db;
    --color-gray-200: #e5e7eb;
    --color-gray-100: #f3f4f6;
    --color-white: #ffffff;

    /* Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                 'Helvetica Neue', Arial, sans-serif;
    --font-mono: 'Fira Code', 'SFMono-Regular', Menlo, Monaco, Consolas, 
                 'Liberation Mono', 'Courier New', monospace;
    --text-base: 1rem;
    --text-sm: 0.875rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;

    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;

    /* Border Radius */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    --shadow-blue: 0 0 0 3px rgba(59, 130, 246, 0.5);

    /* Transitions */
    --transition-fast: all 0.1s ease-in-out;
    --transition-normal: all 0.2s ease-in-out;
    --transition-slow: all 0.3s ease-in-out;
    --transition-transform: transform 0.2s ease-in-out;

    /* Gradients */
    --gradient-primary: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    --gradient-dark: linear-gradient(to right, var(--color-gray-900), var(--color-gray-800));
    --gradient-blue: linear-gradient(to right, var(--color-primary-dark), var(--color-primary));
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    line-height: 1.5;
    color: var(--color-gray-900);
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-bold);
    line-height: 1.2;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-normal);
    
    &:hover {
      color: var(--color-primary-dark);
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: var(--transition-normal);
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: var(--transition-normal);
  }

  /* Utility Classes */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--space-4);
    
    @media (min-width: 640px) {
      max-width: 640px;
    }
    
    @media (min-width: 768px) {
      max-width: 768px;
    }
    
    @media (min-width: 1024px) {
      max-width: 1024px;
    }
    
    @media (min-width: 1280px) {
      max-width: 1280px;
    }
  }

  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export default GlobalStyle;