import './App.css';
import unlogo from './unfavicon.png';

function App() {
  return (
    <div>
      <div id="body">
    <div className="chat">
        <p className="server">{'<== Server Turned On ==>'}</p>
        <p className="server">Server Is Online...</p>
    </div>
    <div className="form">
        <input type="text" id="username" title="username"/>
        <input type="name" id="text" title="text"/>
        <button type="submit" id="submit" onClick={save}>Send</button>
        <button id="menu">
            <nav><h1>ECHAT retro</h1></nav>
            <img src={unlogo} alt="error"></img>
        </button>
    </div>
    <div id="help" className="layer"></div>

    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-database.js"></script>
    <script src="./chat.js" defer></script>
    </div>
    </div>
    );
}

export default App;
