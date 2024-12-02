import axios from 'axios'
import './App.css'

function App() {

    const apiCall = () => {
        axios.get('http://localhost:8080').then(()=> {
            console.log('woo!!')
        })
    }

  return (

    <button onClick={apiCall}>
        Make api call
    </button>
  )
}

export default App
