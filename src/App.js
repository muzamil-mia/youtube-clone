import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import VideoContainer from "./components/VideoContainer";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>



    // Head
    //Body
    //  Sidebar
    //    Menu Items
    //Main Container
    //   ButtonsList
    //   VideoContainer
    //   VideoCard

  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <VideoContainer/>
      },
      {
        path: "demo",
        element: <Demo/>
      }
    ]
  },
])

export default App;
