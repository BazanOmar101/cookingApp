import { useEffect, useState } from 'react'
import TitlePage from './assets/unAuth/titlePage'
import MainPage from './assets/unAuth/mainPage'

const isMainPage = () => window.location.hash === '#main'

function App() {
  const [started, setStarted] = useState(isMainPage)

  useEffect(() => {
    const handlePopState = () => {
      setStarted(isMainPage())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleGetStarted = () => {
    window.history.pushState(null, '', '#main')
    setStarted(true)
  }

  return started ? (
    <MainPage />
  ) : (
    <TitlePage onGetStarted={handleGetStarted} />
  )
}

export default App
