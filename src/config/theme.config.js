import { createTheme } from "@mui/material/styles";
// import { PoppinsFonts } from "assets/fonts/poppins";
// import { componentsTheme } from "mui-core";
const getAppTheme = (mode) => {
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#7960DF",
        dark: "#4635AC",
        light: "#AF8EFF",
      },
      secondary: {
        main: "#1DB0F8",
        dark: "#0081C5",
        light: "#6EE2FF",
      },
      success: {
        main: "#52c41a",
        light: "#689f38",
        contrastText: "white", // for button: success status
      },
      purplebg4perc: {
        main: "#7960DF0A", // '#faf9fd',
      },
      purplebg8perc: {
        main: "#efebfa", // '#7960DF14',
      },
      purplebg12perc: {
        main: "#7960DF1F",
      },
      darkGray: {
        main: "#333333",
      },
      orange: {
        main: "#FFB400",
      },
      lightBlue: {
        main: "#3bc4ff",
      },
      grayLight: {
        main: "#f9f8ff",
      },
      midGray: {
        main: "#a0a4b5",
        contrastText: "white",
      },
      grayBorder: {
        main: "#D8D8D8",
      },
    },
    components: {
      //   ...componentsTheme.components,
      //   MuiCssBaseline: {
      //     styleOverrides: `
      //     @font-face {
      //       font-family: 'Poppins';
      //       src:  url('${PoppinsFonts.REGULAR.EOT}');
      //       src:  url('${PoppinsFonts.REGULAR.EOT}?#iefix') format('embedded-opentype'),
      //             url('${PoppinsFonts.REGULAR.WOFF2}') format('woff2'),
      //             url('${PoppinsFonts.REGULAR.OTF}') format('otf'),
      //             url('${PoppinsFonts.REGULAR.WOFF}') format('woff'),
      //             url('${PoppinsFonts.REGULAR.TTF}') format('truetype');
      //       font-weight: normal;
      //       font-style: normal;
      //       font-display: swap;
      //     }
      //     @font-face {
      //       font-family: 'Poppins';
      //       src:  url('${PoppinsFonts.LIGHT.EOT}');
      //       src:  url('${PoppinsFonts.LIGHT.EOT}?#iefix') format('embedded-opentype'),
      //             url('${PoppinsFonts.LIGHT.WOFF2}') format('woff2'),
      //             url('${PoppinsFonts.LIGHT.WOFF}') format('woff'),
      //             url('${PoppinsFonts.LIGHT.TTF}') format('truetype');
      //       font-weight: 300;
      //       font-style: normal;
      //       font-display: swap;
      //     }
      //     @font-face {
      //       font-family: 'Poppins';
      //       src:  url('${PoppinsFonts.MEDIUM.EOT}');
      //       src:  url('${PoppinsFonts.MEDIUM.EOT}?#iefix') format('embedded-opentype'),
      //             url('${PoppinsFonts.MEDIUM.WOFF2}') format('woff2'),
      //             url('${PoppinsFonts.MEDIUM.WOFF}') format('woff'),
      //             url('${PoppinsFonts.MEDIUM.TTF}') format('truetype');
      //       font-weight: 500;
      //       font-style: normal;
      //       font-display: swap;
      //     }
      //     @font-face {
      //       font-family: 'Poppins';
      //       src:  url('${PoppinsFonts.BOLD.EOT}');
      //       src:  url('${PoppinsFonts.BOLD.EOT}?#iefix') format('embedded-opentype'),
      //             url('${PoppinsFonts.BOLD.WOFF2}') format('woff2'),
      //             url('${PoppinsFonts.BOLD.WOFF}') format('woff'),
      //             url('${PoppinsFonts.BOLD.TTF}') format('truetype');
      //       font-weight: 600;
      //       font-style: normal;
      //       font-display: swap;
      //     }
      //     /* Scrollbar styles */
      //     &::-webkit-scrollbar {
      //       width: 4px !important;
      //       height: 4px !important;
      //       background-color: rgba(123, 96, 223, 0.3);
      //     }
      //     &::-webkit-scrollbar-thumb {
      //       background-color: #7960DF !important;
      //       border-radius: 14px;
      //     }
      // `,
      //   },
    },
    typography: {
      fontFamily: [
        "var(--poppins-family-bold)",
        "var(--poppins-family-light)",
        "var(--poppins-family-regular)",
        "var(--poppins-family-medium)",
      ],
      // fontFamilyBold: 'Poppins Bold',
      subtitle2: {
        fontSize: "13px",
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: "15px",
        fontWeight: 400,
      },
      h1: {
        // fontFamily: 'Poppins Bold',
        fontSize: "50px",
        fontWeight: 600,
      },
      h2: {
        // fontFamily: 'Poppins Bold',
        fontSize: "25px",
        fontWeight: 600,
      },
      h3: {
        // fontFamily: 'Poppins Bold',
        fontSize: "22px",
        fontWeight: 500,
      },
      h4: {
        // fontFamily: 'Poppins Bold',
        fontSize: "20px",
        fontWeight: 500,
      },
      h5: {
        // fontFamily: 'Poppins Regular',
        fontSize: "17px",
        fontWeight: 500,
      },
      h6: {
        // fontFamily: 'Poppins Regular',
        fontSize: "15px",
        fontWeight: 500,
      },
      body1: {
        fontSize: "15px",
        fontWeight: 400,
      },
      body2: {
        fontSize: "12px",
        fontWeight: 400,
      },
      overline: {
        fontSize: "12px",
        fontWeight: 400,
      },
      caption: {
        fontSize: "14px",
        fontWeight: 400,
      },
      button: {
        fontWeight: 400,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1400,
        xl: 1536,
      },
    },
  });
  // custom compoonents
  // typography
  theme.typography["pagetitle"] = {
    fontFamily: "Poppins",
    lineHeight: "60px",
    fontWeight: 600,
    fontSize: 50,
    [theme.breakpoints.down("md")]: {
      lineHeight: "30px",
      fontSize: 30,
    },
  };
  theme.typography["programtitle"] = {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 34,
    [theme.breakpoints.down("md")]: {
      lineHeight: "30px",
      fontSize: 24,
    },
  };
  theme.typography["pagedesc"] = {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 17,
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  };
  return theme;
};

export { getAppTheme };
