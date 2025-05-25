

import './App.css'

function App() {

  return (
    <>


    </>

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {  RouterProvider, createRouter } from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient()

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
>>>>>>>>> Temporary merge branch 2
  )
}

export default App;
