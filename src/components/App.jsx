import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import TestPage from "../pages/TestPage";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import TodoPage from "../pages/TodoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="todo" element={<TodoPage/>}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
