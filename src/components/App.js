//importing react router
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom';


//importing layouts
import RootLayout from '../layouts/RootLayout';
import InformationLayout from '../layouts/InformationLayout';

//imported components
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route exact index element={<Home />} />
      <Route path='information' element={<InformationLayout />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
