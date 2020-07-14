import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [detail, setDetail] = useState({
    name:'',
    imgSrc: '',
    foods:[],
    features:[]
  })

  return (
    <div className="App">
      <div className="header">
        動物園的動物清單
      </div>
      <div className="container">
        <div className="section1">
          顯示動物清單
        </div>
        <div className="section2">
          顯示動物詳細資訊
        </div>
      </div>
      <div className="footer">
        @Austin's Imagined Zoo
      </div>
    </div>
  );
}

export default App;
