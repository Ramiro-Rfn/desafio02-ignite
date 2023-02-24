import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: none;
    }

    :root {
        font-size: 87.5%;
    }

    body {
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1,h2, h3,h4, h5, h6 {
        font-family: 'Baloo 2', sans-serif;
        line-height: 1.3;
    }
`
