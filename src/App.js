import logo from './logo.svg';
import './App.css';
import StudentProfile from './Components/StudentProfileBody';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div id="App" className='container-fluid px-0'>
      <header style={{height:'8vh'}} className='bg-warning'>
        <Header/>
      </header>
      <div id='App-Body' style={{width:"100%,height:92vh"}} className='container-fluid d-flex d-flex px-0 gap-3'>
        <aside style={{width:"15%"}} className='bg-primary'>
          <Sidebar/>
        </aside>
        <main style={{width:"85%"}} className='d-flex'>
          <StudentProfile/>
        </main>
      </div>
    </div>
  );
}

export default App;
