
import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {MainPage} from "./components/mainPage";


function App() {
  return (
      <MantineProvider>
        <div className="App">
        <MainPage/>
        </div>
      </MantineProvider>
  );
}

export default App;
