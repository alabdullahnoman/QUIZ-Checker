import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import BLog from './Component/Blog/BLog';
import Statis from './Component/Statistics/Statis';
import Main from './Component/Main/Main';
import Topiz from './Component/topicz/Topiz'
import Question from './Component/Question/Question';



function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {path:'/',
        loader: async()=> fetch('quiz.json'),
       element:<Main></Main>},
        {path:'/blog', element:<BLog></BLog>},
        {path:'/statistics',
        loader: async()=> fetch('quiz.json'),
        element:<Statis></Statis>},
        {path:'/topic',
        loader: async()=> fetch('quiz.json')
        ,element:<Topiz></Topiz>},
        {
          path: 'topic/:ID',
          loader: async({params}) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.ID}`),
          element:<Question></Question>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router
      }></RouterProvider>
    </div>
  );
}

export default App;
