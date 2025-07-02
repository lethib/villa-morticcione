import { Link, Route, Routes, useLocation } from "react-router";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Villa from "./pages/Villa";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/villa", label: "La Villa" },
  { path: "/calendar", label: "Calendrier et Tarifs" },
  { path: "/contact", label: "Nous contacter" },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex justify-center mt-6 mb-4">
      <div className="flex gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-1 rounded-t-md shadow-md border border-gray-200 transition 
              ${
                location.pathname === item.path
                  ? "bg-orange-400 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="text-center my-1">
      <h1 className="text-5xl font-bold text-gray-700 mt-2 mb-2 tracking-wide">
        Villa Morticcione
      </h1>
      <h2 className="text-2xl text-gray-500 mb-3 tracking-wider">
        Plage de Saint Cyprien - Porto Vecchio
      </h2>
      <p className="text-gray-500 text-lg tracking-widest leading-snug mb-8 max-w-3xl mx-auto">
        Charmante villa située à 1 kilomètre de la magnifique plage de Saint
        Cyprien. Avec sa piscine privée, elle vous attend pour des vacances de
        détente, au grand calme, sous le soleil de la Corse.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
