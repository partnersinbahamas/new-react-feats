import './App.css'
import Transition from './Transition';
import Optimistic from './Optimistic';
import Counter from './Counter';
import { Suspense, useState } from 'react';
import UseSuspense from './UseSuspense';
import { mockServerError, mockServerSuccess } from './utils';
import { ErrorBoundary } from 'react-error-boundary';
import Deffered from './Deffered';
import ActivityComponent from './ActivityComponent';
import Form from './Form';


function App() {
  // const helloWorldPromise = mockServerSuccess('hello world');
  // const helloWorldPromise = mockServerError();


  return (
    <main>
      {/* <Optimistic /> */}
      {/* <h1>React v19</h1> */}
      <ErrorBoundary fallback="Boundary fallback">
        <Form />
      </ErrorBoundary>
      {/* <Counter /> */}
      {/* <Transition />
      <ErrorBoundary fallback="Error in Form">
        <Action />
      </ErrorBoundary>
      <ErrorBoundary fallback="error....">
        <Suspense fallback="loading....">
          <UseSuspense promise={helloWorldPromise} />
        </Suspense>
      </ErrorBoundary>
      <ActivityComponent /> */}

    </main>
  )
}

export default App
