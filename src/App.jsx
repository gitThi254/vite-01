import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import TaskForm from "./pages/TaskForm";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import BasisRoutes from "./routes/BasisRoutes";
import ProtectRoutes from "./routes/ProtectRoutes";
import GetTask from "./components/GetTask";
function App() {
  const queryClient = new QueryClient();
  const persister = new createSyncStoragePersister({
    storage: window.localStorage,
  });
  return (
    <>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {" "}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<BasisRoutes />}>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<ProtectRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/new-task' element={<TaskForm />} />
              <Route path='/Tasks' element={<Tasks />} />
              <Route path='/Tasks/:id' element={<GetTask />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
    </>
  );
}

export default App;
