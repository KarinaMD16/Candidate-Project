import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {  RouterProvider, createRouter } from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routeTree } from './routeTree.gen';
import './App.css'
import { AplicacionesProvider } from './context/ofertas/aplicacionesContextProvider';
import { HabilidadesProvider } from './context/habilidades/habilidadesContextProvider';

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
      <HabilidadesProvider >
        <AplicacionesProvider>
          <RouterProvider router={router} />
        </AplicacionesProvider>
      </HabilidadesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default App;
