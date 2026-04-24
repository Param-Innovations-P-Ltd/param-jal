import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import Assured from './pages/Assured';
import Atmanirbhar from './pages/Atmanirbhar';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="technology" element={<Technology />} />
        <Route path="impact" element={<Impact />} />
        <Route path="assured" element={<Assured />} />
        <Route path="atmanirbhar" element={<Atmanirbhar />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
