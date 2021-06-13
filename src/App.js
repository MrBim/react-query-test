import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ResultsArea from './components/ResultsArea/ResultsArea';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ResultsArea />
      </QueryClientProvider>
    </div>
  );
}

export default App;
