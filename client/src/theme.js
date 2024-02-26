export const tokenDark = {
    blueGrey: {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
    },
    primary: {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c'
    },
    secondary: {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92'
    }
}

function reverseTokens(tokenDark) {
    const reverseTokens = {}
    for (const color in tokenDark) {
        reverseTokens[color] = {}
        for (const shade in tokenDark[color]) {
            reverseTokens[color][shade] = tokenDark[color][shade]
        }
    }
    return reverseTokens
}
export const tokenLight = reverseTokens(tokenDark)

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                // palette values for dark mode
                primary: {
                    ...tokenDark.primary,
                    main: tokenDark.primary[900],
                    light: tokenDark.primary[100],
                },
                secondary: {
                    ...tokenDark.secondary,
                    main: tokenDark.secondary[500],
                    light: tokenDark.secondary[100],
                },
                tertiary: {
                    ...tokenDark.blueGrey,
                    main: tokenDark.blueGrey[500],
                    light: tokenDark.blueGrey[100],
                },
            } : {
                // palette values for light mode
                primary: {
                    ...tokenLight.primary,
                    main: tokenLight.primary[50],
                    light: tokenLight.primary[100],
                },
                secondary: {
                    ...tokenLight.secondary,
                    main: tokenLight.secondary[50],
                    light: tokenLight.secondary[100],
                },
                tertiary: {
                    ...tokenLight.blueGrey,
                    main: tokenLight.blueGrey[50],
                    light: tokenLight.blueGrey[100],
                },
            }),
        },
        typography: {
            fontFamily: ["Philosopher", "sans-serif"].join(','),
            fontSize: 14,
            h1: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 40,
                fontWeight: 500,
            },
            h2: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 36,
                fontWeight: 400,
            },
            h3: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 30,
                fontWeight: 400,
            },
            h4: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 24,
                fontWeight: 300,
            },
            h5: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 18,
                fontWeight: 300,
            },
            h6: {
                fontFamily: ["Philosopher", "sans-serif"].join(','),
                fontSize: 14,
                fontWeight: 200,
            },
        }
    }
}
