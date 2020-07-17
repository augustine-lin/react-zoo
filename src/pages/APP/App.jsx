/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import './App.css'
import FakeAnimalList from '../../fakeData/animalList'
import AnimalTable from '../../components/AnimalTable'
import AnimalDetail from '../../components/AnimalDetail'
import EmptyTip from '../../components/EmptyTip'

function App() {
  // init Object
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
  // local State
  const [detail, setDetail] = useState(animalObj)
  const [isEdit, setIsEdit] = useState(false)

  const [list, setList] = useState(FakeAnimalList)

  useEffect(() => { // mounted or destroy
    if (localStorage.getItem('animalList')) {
      setList(JSON.parse(localStorage.getItem('animalList')))
    }
  }, [])

  useEffect(() => { // watch list
    // store in localstorage
    localStorage.setItem('animalList', JSON.stringify(list))
  }, [list])

  useEffect(() => {
    console.log('Hey! Mom I am here!')
  })

  /* some function ... */
  const toGender = (gender) => {
    if (gender === 'male') return '男性'
    if (gender === 'female') return '女性'
    return '其他'
  }

  const addAnimal = (newItem) => {
    setList([
      ...list,
      newItem
    ])
  }

  const updateAnimal = (item) => {
    const editIndex = list.findIndex((animal) => animal.id === item.id)
    list[editIndex] = item
    setList([...list])
    setDetail(animalObj)
  }

  const delAnimal = (item) => {
    const delIndex = list.findIndex((animal) => animal.id === item.id)
    list.splice(delIndex, 1)
    setList([...list]) // always return new object
    setDetail(animalObj)
    setIsEdit(false)
  }

  const handleSetDetailClick = (item) => {
    setDetail(item)
  }

  const handleDetailInputChange = (event) => {
    const { target } = event
    const { value } = target
    const { name } = target
    setDetail({
      ...detail,
      [name]: value
    })
  }

  const addDetailArrayItem = (parent, item) => {
    detail[parent].push(item)
    setDetail({
      ...detail
    })
  }

  const delDetailArrayItem = (parent, name) => {
    const delIndex = detail[parent].findIndex((item) => item === name)
    detail[parent].splice(delIndex, 1)
    setDetail({
      ...detail
    })
  }

  const openAdd = () => {
    setDetail(animalObj)
    setIsEdit(true)
  }

  // Main Page - APP
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
            handleSetDetailClick={handleSetDetailClick}
          />
        </div>
        <div className="animalDetailBox">
          {
            !isEdit && !detail.name
              ? <EmptyTip text="請於動物列表中選取任一動物" />
              : (
                <AnimalDetail
                  detail={detail}
                  toGender={toGender}
                  addAnimal={addAnimal}
                  updateAnimal={updateAnimal}
                  addArrayItem={addDetailArrayItem}
                  delArrayItem={delDetailArrayItem}
                  delAnimal={delAnimal}
                  handleInputChange={handleDetailInputChange}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                />
              )
          }
        </div>
      </div>
      <div className="footer">
        @Austin's Imagined Zoo
      </div>
    </div>
  )
}
export default App
