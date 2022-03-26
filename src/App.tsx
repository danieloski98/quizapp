import React from 'react';
import {RecoilRoot} from 'recoil'
import {QueryClientProvider, QueryClient} from 'react-query';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Results from './Pages/Results';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="results" element={<Results />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
