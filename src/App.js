import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Calculator from './pages/Calculator'

function App() {
  return (
    <div className='react-portfolio p-2'>
      <AppHeader />
      {/*router*/}
      <Calculator />
      <AppFooter />
    </div>
  );
}

export default App;
