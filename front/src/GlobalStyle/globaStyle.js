const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #1B1A1B;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

     * {
        padding: 0;
        margin: 0;
        list-style: none;
        border: none;
    }
`
export default GlobalStyle