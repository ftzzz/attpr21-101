import Head from 'next/head';
import '../styles/global.css';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Switch from '../components/Switch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

export default function Home() {
    return ( <
        div className = "min-h-screen flex flex-col justify-between bg-gray-100" >
        <
        Head >
        <
        title > Next.js Web App < /title> <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1.0" / >
        <
        link rel = "preconnect"
        href = "https://fonts.googleapis.com" / >
        <
        link rel = "stylesheet"
        href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" / >
        <
        /Head>

        <
        Header / >

        <
        main className = "flex flex-col items-center justify-center flex-grow p-4" >
        <
        h1 className = "text-2xl font-bold" > Добро пожаловать < /h1> <
        p className = "text-gray-600 mb-4" > Это веб - приложение с кастомными компонентами < /p>

        { /* Кастомная кнопка с анимацией увеличения при наведении */ } <
        Button text = "Нажми меня"
        bgColor = "blue-500"
        textColor = "white"
        onClick = {
            () => alert('Кнопка нажата!') }
        className = "transform hover:scale-105 transition-transform duration-200" / >

        { /* Поле ввода с анимацией увеличения при наведении */ } <
        InputField placeholder = "Введите текст"
        bgColor = "gray-200"
        textColor = "black"
        onChange = {
            (val) => console.log(val) }
        className = "transform hover:scale-105 transition-transform duration-200" / >

        { /* Переключатель (Switch) */ } <
        Switch text = "Тема"
        bgColor = "gray-300"
        textColor = "black"
        onChange = {
            (checked) => console.log('Switch:', checked) }
        />

        { /* Форма авторизации */ } <
        AuthForm / >
        <
        /main>

        <
        Footer / >
        <
        /div>
    );
}