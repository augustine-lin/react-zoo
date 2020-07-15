import React,{useState, useEffect} from 'react';
import './App.css';
import FakeAnimalList from '../../fakeData/animalList'
function App() {
  const [list, setList] = useState(FakeAnimalList)
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
          <table className="animalTable">
            <thead>
              <tr>
                <td>名稱</td>
                <td>種類</td>
                <td>性別</td>
                <td>生活照</td>
              </tr>
            </thead>
            <tbody>
            {
              list.map(animal => {
                return (
                  <tr>
                    <td>{animal.name}</td>
                    <td>{animal.type}</td>
                    <td>{animal.gender === 'm' ? '男性' : '女性'}</td>
                    <td><img src={animal.imgSrc} alt={animal.name}/></td>
                  </tr>
                )
              })
            }
            </tbody>
           
          </table>
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
