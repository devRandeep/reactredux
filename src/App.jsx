import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Products from './Components/Products'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Header />
      </Provider>
      <Products />
    </>
  )
}

export default App
