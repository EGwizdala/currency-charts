import StoreProvider from './store/StoreProvider';
import Currency from './pages/Currency/Currency';


function App() {
  return (
    <StoreProvider >
     <Currency />
    </StoreProvider>
  );
}

export default App;
