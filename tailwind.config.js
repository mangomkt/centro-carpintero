module.exports = {
  content: ["./src/**/*.{vue}"],
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    }
  },
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',
        accenta: 'var(--bg-background-accenta)',
        accentb: 'var(--bg-background-accentb)',
        white:  'var(--bg-background-white)',
        light:  'var(--bg-background-light)',
        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      primary: 'var(--bg-background-primary)',
      secondary: 'var(--bg-background-secondary)',
      tertiary: 'var(--bg-background-tertiary)',
      accenta: 'var(--bg-background-accenta)',
      accentb: 'var(--bg-background-accentb)',

      green: {
        100: '#023D34',
        200: '#023D34',
        300: '#023D34',
        400: '#023D34',
        500: '#023D34',
        600: '#023D34',
        700: '#023D34',
        800: '#023D34',
        900: '#023D34',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      body: [
        'Open Sans',
        'Arial',
        'sans-serif',
      ],
      sans: [
        'Open Sans',
        'Arial',
        'sans-serif',
      ],
      serif: [
        'Merriweather',
        'serif',
      ]
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
