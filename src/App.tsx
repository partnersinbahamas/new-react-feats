import './App.css'
import Transition from './Transition';
import Optimistic from './Optimistic';
import Form from './Form';
import { Suspense } from 'react';
import UseSuspense from './UseSuspense';
import { mockServerError, mockServerSuccess } from './utils';
import { ErrorBoundary } from 'react-error-boundary';
import Deffered from './Deffered';

function App() {
  const helloWorldPromise = mockServerSuccess('hello world');
  // const helloWorldPromise = mockServerError();

  return (
    <main>
      <h1>React v19</h1>

      <Transition />
      <Optimistic />
      <Form />
      <ErrorBoundary fallback="error....">
        <Suspense fallback="loading....">
          <UseSuspense promise={helloWorldPromise} />
        </Suspense>
      </ErrorBoundary>
      <Deffered />

    </main>
  )
}

export default App
