import ChatWidget from './ChatWidget';

//const chat = new ChatWidget(document.body, 'ws://localhost:7070');
const chat = new ChatWidget(document.body, 'wss://ahj89ws.herokuapp.com');

chat.init();
