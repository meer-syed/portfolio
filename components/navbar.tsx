export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">
          Meer Kalal Arshad
        </h1>

        <ul className="flex gap-8">

          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}