import './App.css'
import Transition from './Transition';
import Optimistic from './Optimistic';
import Action from './Action';
import { Suspense } from 'react';
import UseSuspense from './UseSuspense';
import { mockServerError, mockServerSuccess } from './utils';
import { ErrorBoundary } from 'react-error-boundary';
import Deffered from './Deffered';
import ActivityComponent from './ActivityComponent';

function App() {
  const helloWorldPromise = mockServerSuccess('hello world');
  // const helloWorldPromise = mockServerError();

  return (
    <main>
      <h1>React v19</h1>

      <Transition />
      <Optimistic />
      <ErrorBoundary fallback="Error in Form">
        <Action />
      </ErrorBoundary>
      <ErrorBoundary fallback="error....">
        <Suspense fallback="loading....">
          <UseSuspense promise={helloWorldPromise} />
        </Suspense>
      </ErrorBoundary>
      {/* <Deffered /> */}
      <ActivityComponent />

    </main>
  )
}

export default App
