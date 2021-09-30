import LandingPage from './components/pages/LandingPage'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/pages/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  return code ? <Dashboard code={code} /> :(
    <div >
  <LandingPage/>
    </div>
  );
}

export default App;
