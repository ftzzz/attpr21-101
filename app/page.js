"use client";

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import '../styles/global.css';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Switch from '../components/Switch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LOGIN_CREDENTIALS = {
  username: 'Admin',
  password: 'pswrd'
};

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      router.push('/main');
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/main');
    } else {
      alert('Неверные учетные данные!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-900 to-gray-800 text-white font-sans">
      <Head>
        <title>Next.js Premium Web App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" />
      </Head>
      
      <Header showLogout={false} className="shadow-lg bg-gradient-to-r from-gray-900 to-blue-900 py-6 px-12 text-white text-2xl font-bold uppercase tracking-wide" />
      
      <main className="flex flex-col items-center justify-center flex-grow p-12 bg-gray-900 rounded-lg shadow-xl max-w-3xl mx-auto border border-gray-700 fade-in">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-8 drop-shadow-lg">Авторизация</h1>
        <p className="text-gray-300 mb-8 text-xl text-center leading-relaxed">Введите логин и пароль</p>

        <form onSubmit={handleLogin} className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300">Логин:</label>
            <input
              type="text"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Пароль:</label>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg text-white font-bold hover:bg-blue-700">
            Войти
          </button>
        </form>
      </main>
      
      <Footer className="mt-12 bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 text-center text-lg shadow-xl" />
    </div>
  );
}

// Главная страница с историей колледжа
export function MainPage() {
  const router = useRouter();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
      <Head>
        <title>История Колледжа</title>
      </Head>
      
      <Header showLogout={true} onLogout={handleLogout} className="shadow-lg bg-gradient-to-r from-gray-900 to-blue-900 py-6 px-12 text-white text-2xl font-bold uppercase tracking-wide" />
      
      <main className="flex flex-col items-center justify-center flex-grow p-12 bg-white rounded-lg shadow-xl max-w-4xl mx-auto border border-gray-300 fade-in">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">История нашего колледжа</h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed mb-8">
          Наш колледж был основан в 1965 году и с тех пор подготовил тысячи специалистов
          различных направлений. Мы гордимся нашими выпускниками и тем, что предоставляем
          качественное образование в различных сферах.
        </p>
        <img src="/college-photo.jpg" alt="Фото колледжа" className="rounded-lg shadow-lg w-full max-w-2xl mb-8" />
        <button onClick={handleLogout} className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all">
          Выйти
        </button>
      </main>
      
      <Footer className="mt-12 bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 text-center text-lg shadow-xl" />
    </div>
  );
}