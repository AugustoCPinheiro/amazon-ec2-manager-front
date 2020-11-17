import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Routes from './Routes/Routes.component';

const queryCache = new QueryCache();
const GlobalStyles = createGlobalStyle`
  .App {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  #root{
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

function App() {
  return (
    <div className="App">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <GlobalStyles />
        {/* <Modal /> */}
        <Routes />
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
