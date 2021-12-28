import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
  /* source-sans-pro-regular - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/source-sans-pro-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/source-sans-pro-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/source-sans-pro-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/source-sans-pro-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/source-sans-pro-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/source-sans-pro-v18-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}
/* source-sans-pro-900 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('/fonts/source-sans-pro-v18-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/source-sans-pro-v18-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/source-sans-pro-v18-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/source-sans-pro-v18-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/fonts/source-sans-pro-v18-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/source-sans-pro-v18-latin-900.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/open-sans-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/open-sans-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/open-sans-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/open-sans-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/open-sans-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/open-sans-v27-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-800 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/fonts/open-sans-v27-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/open-sans-v27-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/open-sans-v27-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/open-sans-v27-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/fonts/open-sans-v27-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/open-sans-v27-latin-800.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-600italic - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/open-sans-v27-latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/open-sans-v27-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/open-sans-v27-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/open-sans-v27-latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('/fonts/open-sans-v27-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/open-sans-v27-latin-600italic.svg#OpenSans') format('svg'); /* Legacy iOS */
}
`;
