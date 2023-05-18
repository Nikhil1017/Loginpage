/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        '96px':'96px',
        '164':'180px',
        '196':'100%',
        '552px':'552px',
        '268px':'268px',
        '343px':'343px',
        '295px':'295px',
        '133px':'133px',
        '299px':'299px',


        
      },

      fontSize: {
        '15px':['15px','22px'],
        '14px':['14px','20px'],
      },

      padding:{
        '3px':'3px',
        '13px':'13px',
        '19.3px':'19.3px',
        '27px':'27px',
        '34px':'34px',
        '46px':'46px',
        '117px':'117px',
        '123px':'123px',
        '134px':'134px',
      },
      height: {
        '27':'108px',
        '128':'597px',
        '164':'33.6px',
        '196':'100%',
        '46px':'46px',
        '5.29px':'5.29px',
        '84px':'84px',
        '774px':'774px',
        '50px':'50px',
        '52px':'52px',
      },
      margin:{
        '35.5px':'35.5px',
        '31px':'31px',
        '18.17px':'18.17px',
        '26px':'26px',
        '3px':'3px',
        '46px':'46px',
        '504px':'504px',
        '7px':'7px',
        '15px':'15px',
        '39.2px':'39.2px',
        '11.5px':'11.5px',
        '18.33px':'18.33px',
        '9.33px':'9.33px',
        '5px':'5px',
        '19px':'19px',
        '568px':'568px',
        '286px':'286px',
        '255px':'255px',
        '313px':'313px',
        '314px':'289px',
  
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
      'blue-1':'#437EF7',
      'text-gray':'#5F6D7E',
      'white-1':'#FFFFFF',
      'darkbg-black':'#151B28',
      'white-dark':'#F9F9F9',
      'inputbox-black':'#333B48',
      'outside-black':'#1E1E1E',
      'bar-black':'#252D3C',
      'inside-black':'#1C2534',
      'gray-dark':'#A5ACBA',
      'border-dark':'#2E3545',
      'inputbox-dark':'#2E3545',

    },
  },
  plugins: [],
}
