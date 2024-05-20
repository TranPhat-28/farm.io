import "./styles/index.scss";
import { Farm } from "./components";
import { SidebarLayout } from "./layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {

  const user = useSelector((state: RootState) => state.authUser.user);

  return (
    <Routes>
      <Route path={'/'} element={user ? <Navigate to={"/home"} /> : <LoginLayout />} />
      {user && <Route path={'/home'} element={
        <SidebarLayout>
          <Farm />
        </SidebarLayout>
      } />}
      <Route path={"*"} element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
