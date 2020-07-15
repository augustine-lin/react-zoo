import React, { useState, useEffect } from 'react';
import './App.css';
import FakeAnimalList from '../../fakeData/animalList'
function App() {
  const [list, setList] = useState(FakeAnimalList)
  const [detail, setDetail] = useState({
    name: '',
    type: '',
    gender: '',
    imgSrc: '',
    foods: [],
    features: [],
    decription: ''
  })

  const handleTableClcik = (item)=>{
    setDetail(item)
  }

  return (
    <div className="App">
      <div className="header">
        動物園的動物清單
      </div>
      <div className="container">
        <div className="animalTable">
          <table>
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
                    <tr key={animal.name} onClick={()=>handleTableClcik(animal)}>
                      <td>{animal.name}</td>
                      <td>{animal.type}</td>
                      <td>{animal.gender === 'm' ? '男性' : '女性'}</td>
                      <td><img src={animal.imgSrc} alt={animal.name} /></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="animalDetail">
          {detail.name 
            ? <>
                <div className="box">
                  <div>生活照：</div>
                  <img src={detail.imgSrc} alt={detail.name} />
                </div>
                <div className="box">
                  <span>名稱：</span>
                  <span>{detail.name}</span>
                </div>
                <div className="box">
                  <span>類型：</span>
                  <span>{detail.type}</span>
                </div>
                <div className="box">
                  <span>性別：</span>
                  <span>{detail.gender === 'm' ? '男性' : '女性'}</span>
                </div>
                <div className="box">
                  <span>最愛的食物：</span>
                  {
                    detail.foods.length > 0 ? detail.foods.join('、') : '都吃'
                  }
                </div>
                <div className="box">
                  <span>特點：</span>
                  {
                    detail.features.length > 0 ? detail.features.join('、') : '平凡也是種特點'
                  }
                </div>
                <div className="box">
                  <span>描述：</span>
                  <span>{detail.decription}</span>
                </div>
              </>
            : <div className="emptyTip">
              <h3>請於動物列表中選取任一動物</h3>
            </div>    
          }
        </div>
      </div>
      <div className="footer">
        @Austin's Imagined Zoo
      </div>
    </div>
  );
}

export default App;
