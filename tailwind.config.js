/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    letterSpacing: {
      'minus0.1px':'-0.1px',
    },
    extend: {
      width: {
        '128':'648px',
        '164':'180px',
        '196':'100%',
        '552px':'552px',
        '268px':'268px',
        
      },
      height: {
        '27':'108px',
        '128':'704px',
        '164':'33.6px',
        '196':'100%',
        '46px':'46px',
        '5.29px':'5.29px',
      },
      margin:{
        '35.5px':'35.5px',
        '18.17px':'18.17px',
        '26px':'26px',
        '3px':'3px',
  
    },
    spacing:{
      '421.83px':'421.83px',
      '421.83px':'421.83px',

  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
    },
    colors:{
      'shadow':'#FAFBFC',
      'boxshadow':'#DAE0E6',
      'gray-1':'#272D37',
    },
  },
  plugins: [],
}
