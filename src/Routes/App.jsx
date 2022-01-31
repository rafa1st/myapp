import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import TestPage from "../pages/TestPage";
import TodoPage from "../pages/TodoPage";
import Whatsapp from "../pages/Whatsapp";
import SelectPage from "../pages/SelectPage";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="todo" element={<TodoPage/>}></Route>
          <Route path="whatsapp" element={<Whatsapp/>}></Route>
          <Route path="Select" element={<SelectPage/>}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
