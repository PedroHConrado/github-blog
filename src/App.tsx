import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './contexts/PostsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

      </PostsProvider>
    </ThemeProvider>
  )
}

export default App
