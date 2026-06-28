export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-4xl text-center">

        <p className="text-blue-400 text-lg font-medium">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold mt-4">
          Meer Kalal Arshad
        </h1>

        <h2 className="text-3xl text-gray-300 mt-4">
          Computer Science Student | Aspiring Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          I build modern, responsive and scalable web applications using
          React, Next.js and Node.js. I'm passionate about creating
          beautiful user experiences and solving real-world problems.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            Hire Me
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl transition">
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}