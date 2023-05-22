import logo from './logo.svg';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import drive from './Images/Drive.png'
import maps from './Images/Maps.png'
import calender from './Images/Calendar.png'
import tasks from './Images/Tasks.png'
import contacts from './Images/Contacts.png'

 

function App() {
  
  return (
    <>
      <Header/>
      
      
       <div className='side'>
        <div className='editor'> 
            <Editor/>
        </div>
        
      <div className='panel'>
        <div className='quick'>
          {/* for google accounts */}
          <img src={drive}></img> 
          
        </div>
        <div className='imgg'>
          <img src={maps}></img>
        </div>
        <div className='imgg'>
          <img src={calender}></img>
        </div>
        <div className='imgg'>
          <img src={tasks}></img>
        </div>
        <div className='imgg'>
          <img src={contacts}></img>
        </div>
      </div>
      </div> 
    </>
  );
}

export default App;
