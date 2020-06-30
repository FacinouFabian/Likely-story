const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        'xlg': {'min': '1324px', 'max': '1324px'},
      },
      colors: {
        'dominant': '#5214ff',
        'header': '#fc589f',
      },
      zIndex: {
        '1': 1,
      },
      fontFamily: {
        'cera-bold': 'cera-bold',
        'cera-regular': 'cera-regular',
        'cera-italic': 'cera-italic',
        'cera-basic': 'cera-basic', 
        'cera-medium': 'cera-medium'
      },
      backgroundColor: {
        'sectionOne': '#9f79fa',
        'sectionTwo': '#ffbc42',
        'sectionTree': '#40296d',
        'sectionFour': '#ffbfdd',
        'footer': '#141221',
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      },
      inset: {
        'm-illo': '-24rem',
        '12': '12rem',
      },
      width: {
        '35rem': '35rem'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus'],
    overflow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    plugin(function({ addUtilities, variants }) {
      const newUtilities = {
        '.transition-all-03': {
          transitionProperty: 'all',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease',
          transitionDelay: '0s',
        },
        '.transition-all-02': {
          transitionProperty: 'all',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease',
          transitionDelay: '0s',
        },
        '.container': {
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: '100%',
          paddingLeft: '8rem',
          paddingRight: '8rem',
          height: '100%',
        },
        '.header__title': {
          'margin-bottom': '1.5rem',
          'line-height': '1.22',
        },
        '.header__subtitle': {
          fontWeight: 600,
        },
        '.fh': {
          height: '100vh',
        },
        '.section__img': {
          backgroundSize: '80rem',
          backgroundPosition: 'right bottom',
          top: '-10rem',
          bottom: '-10rem',
        }, 
        '.bg-imgHeader': {
          backgroundImage: 'url(https://likely-story.co.uk/wp-content/uploads/2019/06/Home@2x.png)',
          transform: 'translate3d(0px, 5px, 0px)',
        },
        '.bg-imgOne': {
          backgroundImage: 'url(https://likely-story.co.uk/wp-content/uploads/2019/10/Henley-Header@2x-2.png)',
          transform: 'translate3d(0px, 5px, 0px)',
        },
        '.section__wrapper': {
          display: '-webkit-box',
          display: '-ms-flexbox',
          display: 'flex',
          '-webkit-box-orient': 'vertical',
          '-webkit-box-direction': 'normal',
          '-ms-flex-direction': 'column',
          'flex-direction': 'column',
          'max-width': '85.71429%',
        },
        '.section__clip': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clip: 'rect(0,auto,auto,0)',
        },
        '.bg-imgTree': {
          backgroundImage: 'url(https://likely-story.co.uk/wp-content/uploads/2019/06/WeSpeak-Header-Optimized-BH01@2x-1.png)',
          transform: 'translate3d(0px, 5px, 0px)',
          backgroundSize: '80%',
        },
        '.bg-imgFour': {
          backgroundImage: 'url(https://likely-story.co.uk/wp-content/uploads/2019/05/DAP-Header-Optimized-@2x.png)',
          transform: 'translate3d(0px, 5px, 0px)',
          backgroundSize: '80%',
        },
        '.footer': {
          padding: '3rem 0 3.8rem',
          height: '28rem',
        },
        '.footer-lg': {
          padding: 0,
          height: '16rem',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        },
        '.footer__container': {
          display: '-webkit-box',
          display: '-ms-flexbox',
          '-webkit-box-align': 'center',
          '-ms-flex-align': 'center',
          '-webkit-box-pack': 'justify',
          '-ms-flex-pack': 'justify',
        },
        '.header__illo': {
          position: 'absolute',
          bottom: 0,
          right: '-14rem',
          maxWidth: '60rem',
          display: 'none',
        },
        '.section__preheader-label': {
         '-webkit-transition': '-webkit-transform .8s cubic-bezier(.77,0,.175,1) .7s',
          transition: '-webkit-transform .8s cubic-bezier(.77,0,.175,1) .7s',
          transition: 'transform .8s cubic-bezier(.77,0,.175,1) .7s',
          transition: 'transform .8s cubic-bezier(.77,0,.175,1) .7s,-webkit-transform .8s cubic-bezier(.77,0,.175,1) .7s',
        },
        '.split-line': {
          '-webkit-transition': '-webkit-transform .8s cubic-bezier(.165,.84,.44,1) .2s',
          transition: '-webkit-transform .8s cubic-bezier(.165,.84,.44,1) .2s',
          transition: 'transform .8s cubic-bezier(.165,.84,.44,1) .2s',
          transition: 'transform .8s cubic-bezier(.165,.84,.44,1) .2s,-webkit-transform .8s cubic-bezier(.165,.84,.44,1) .2s',
        },
      }

      addUtilities(newUtilities, variants('customPlugin'))
    })
  ],
}
