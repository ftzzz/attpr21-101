
export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Мой веб-сайт</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Главная</a></li>
          <li><a href="/about" className="hover:underline">О нас</a></li>
        </ul>
      </nav>
    </header>
  );
}
