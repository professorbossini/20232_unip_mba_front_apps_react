import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/tailwind-light/theme.css'
import { PrimeReactProvider } from 'primereact/api'
ReactDOM.render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
  document.querySelector('#root')
)