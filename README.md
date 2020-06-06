# Веб-приложение [Mesto](https://DaryaDomoroshchenko.github.io/mesto_service/)
## Проект разработан в рамках обучения в Яндекс.Практикум
### Используемый стек технологий: JS, CSS, HTML, GIT, Webpack
Это веб-приложение, чем-то похожее на Instagram. Пользователи могут добавлять и удалять посты с фотографиями, просматривать публикации других пользователей, ставить им лайки и отслеживать количество лайков на каждом посте. Также добавлена возможность редактирования собственного профиля. Страница подключена к серверу Яндекс.Практикума.  
### Что интересного в коде?
* именование классов и структура файлов выполнены по БЭМ;
* проект адаптирован под различные разрешения экрана;
* выполнена валидация всех форм;
* весь функционал разбит на классы;
* выполняются асинхронные GET-, POST-, PATCH-, PUT- и DELETE-запросы к API;
* пока от сервера идёт ответ, крутится прелоудер;
* произведена настройка Webpack для двух режимов сборки - development и production, хеширования CSS и JS-файлов, hot reload;
* настроена работа Webpack со стилями, шрифтами и изображениями.
### Для запуска проекта необходимо: 
1. установить [Node.js](https://nodejs.org/en/)
2. `git clone git@github.com:DaryaDomoroshchenko/mesto_service.git` - клонировать репозиторий  
3. `npm i` - установить все необходимые зависимости проекта  
4. `npm run build` - произвести сборку проекта
5. `npm run dev` - запустить проект на локальном сервере по адресу localhost:8080  

Актуальная версия v0.0.8
