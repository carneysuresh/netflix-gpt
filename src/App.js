import Body from './components/Body';
import './App.css';
import { Provider } from 'react-redux';
import appstore from './Utils/appstore';


function App() {
  return (
    
    <Provider store={appstore}> 
    <div className="text-4xl font-semibold text-red-950 " >
  
     <Body/>
   
     
    </div>
     </Provider>
  );
}

export default App;
