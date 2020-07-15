import React, { useState, useEffect } from 'react';
import './App.css';
import FakeAnimalList from '../../fakeData/animalList'
import AnimalTable from '../../components/animalTable'
import AnimalDetail from '../../components/animalDetail'
function App() {
  const animalObj = {
    id: '',
    name: '',
    type: '',
    gender: '',
    imgSrc: '',
    foods: [],
    features: [],
    decription: ''
  }
  const [list, setList] = useState(FakeAnimalList)
  const [detail, setDetail] = useState(animalObj)
  const [isEdit, setIsEdit] = useState(false)

  const toGender = (gender) => {
    if(gender === 'male') return '男性'
    if(gender === 'female') return '女性'
    if(gender === 'other' ) return '其他'
  }

  const addAnimal = (newItem) => {
    setList([
      ...list,
      newItem
    ])
  }

  const updateAnimal = (item) => {
    const editIndex = list.findIndex(animal => animal.id === item.id)
    list[editIndex] = item
    setList([ ...list ])
    setDetail(animalObj)
  }

  const delAnimal = (item) => {
    const delIndex = list.findIndex(animal => animal.id === item.id)
    list.splice(delIndex, 1)
    setList([ ...list ]) // always return new object
    setDetail(animalObj)
    setIsEdit(false)
  }

  const handleSetDetailClick = (item)=>{
    setDetail(item)
  }

  const handleDetailInputChange = (event)=>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDetail({
      ...detail,
      [name]:value
    })
  }

  const addDetailArrayItem = (parent, item) => {
    detail[parent].push(item)
    setDetail({
      ...detail
    })
  }
  const delDetailArrayItem = (parent, name) => {
    let delIndex = detail[parent].findIndex(item => {
      return item === name
    })
    detail[parent].splice(delIndex, 1)
    setDetail({
      ...detail
    })
  }

  const openAdd = () => {
    setDetail(animalObj)
    setIsEdit(true)
  }

  const EmptyTip = ({text}) => (
    <div className="emptyTip">
      <h3>{ text }</h3>
    </div>
  )

  return (
    <div className="App">
      <div className="header">
        動物園的動物清單
      </div>
      <div className="container">
        <div className="animalTableBox">
          <div className="topBar">
            <button className="btn success" onClick={openAdd}>新增動物</button>
          </div>
          <AnimalTable
            list={list}
            toGender={toGender}
            handleSetDetailClick={handleSetDetailClick}/>
        </div>
        <div className="animalDetailBox">
          {
            !isEdit && !detail.name
            ? <EmptyTip text={'請於動物列表中選取任一動物'}/>
            : <AnimalDetail
                detail={detail}
                toGender={toGender}
                addAnimal={addAnimal}
                updateAnimal={updateAnimal}
                addArrayItem={addDetailArrayItem}
                delArrayItem={delDetailArrayItem}
                delAnimal={delAnimal}
                handleInputChange={handleDetailInputChange}
                isEdit={isEdit}
                setIsEdit={setIsEdit}/>
          }
        </div>
      </div>
      <div className="footer">
        @Austin's Imagined Zoo
      </div>
    </div>
  )
}
export default App;
