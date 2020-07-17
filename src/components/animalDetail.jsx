/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'

const AnimalDetail = (props) => {
  const {
    detail,
    toGender,
    addAnimal,
    updateAnimal,
    addArrayItem,
    delArrayItem,
    delAnimal,
    handleInputChange,
    isEdit,
    setIsEdit
  } = props

  const [cloneDetail] = useState(detail)
  const openEdit = () => {
    setIsEdit(true)
  }
  const closeEdit = () => {
    setIsEdit(false)
  }
  const cancelEdit = () => {
    updateAnimal(cloneDetail)
    closeEdit()
  }
  const saveEdit = () => {
    if (detail.id) {
      updateAnimal(detail)
    } else {
      addAnimal(detail)
    }
    closeEdit()
  }

  const handleSaveClick = (name) => {
    const el = document.querySelector(`#${name}-addInput`)
    addArrayItem(name, el.value)
  }
  const handleClearClick = (name) => {
    const el = document.querySelector(`#${name}-addInput`)
    el.value = ''
  }
  const AddInput = ({ name }) => (
    <>
      <input id={`${name}-addInput`} placeholder="新項目" className="mr-2" />
      <button type="button" className="mr-2" onClick={() => handleSaveClick(name)}>save</button>
      <button type="button" onClick={() => handleClearClick(name)}>clear</button>
    </>
  )
  return (
    <>
      <div className="animalDetail">
        <div className="box">
          <button type="button" className="btn" onClick={openEdit}>編輯</button>
        </div>
        <div className="box">
          <div>生活照：</div>
          <img src={detail.imgSrc} alt={detail.name} />
        </div>
        <div className="box">
          <span>名稱：</span>
          {
            isEdit
              ? <input name="name" value={detail.name} onChange={handleInputChange} />
              : <span>{detail.name}</span>
          }
        </div>
        <div className="box">
          <span>類型：</span>
          {
            isEdit
              ? <input name="type" value={detail.type} onChange={handleInputChange} />
              : <span>{detail.type}</span>
          }
        </div>
        <div className="box">
          <span>性別：</span>
          {
            isEdit
              ? (
                <div className="radioBtn">
                  <input type="radio" id="male" name="gender" value="male" checked={detail.gender === 'male'} onChange={handleInputChange} />
                  <label htmlFor="male">男性</label>
                  <input type="radio" id="female" name="gender" value="female" checked={detail.gender === 'female'} onChange={handleInputChange} />
                  <label htmlFor="female">女性</label>
                  <input type="radio" id="other" name="gender" value="other" checked={detail.gender === 'other'} onChange={handleInputChange} />
                  <label htmlFor="other">其他</label>
                </div>
              )
              : <span>{toGender(detail.gender)}</span>
          }
        </div>
        <div className="box">
          <span>最愛的食物：</span>
          {
            isEdit
              ? (
                <div>
                  {
                  detail.foods.length > 0 && detail.foods.map((food, index) => (
                    <div className="p-2" key={food}>
                      <span>{index + 1} - </span>
                      <span>{food} </span>
                      <span role="presentation" onClick={(e) => delArrayItem('foods', food, e)}>
                        <i className="fas fa-trash-alt" />
                      </span>
                    </div>
                  ))
                }
                  <AddInput className="p-2" name="foods" />
                </div>
              )
              : detail.foods.length > 0 ? detail.foods.join('、') : '都吃'
          }
        </div>
        <div className="box">
          <span>特點：</span>
          {
            isEdit
              ? (
                <div>
                  {
                  detail.features.length > 0 && detail.features.map((feature, index) => (
                    <div className="p-2" key={feature}>
                      <span>{index + 1} - </span>
                      <span>{feature} </span>
                      <span role="presentation" onClick={() => delArrayItem('features', feature)}>
                        <i className="fas fa-trash-alt" />
                      </span>
                    </div>
                  ))
                }
                  <AddInput className="p-2" name="features" />
                </div>
              )
              : detail.features.length > 0 ? detail.features.join('、') : '平凡也是種特點'
          }
        </div>
        <div className="box">
          <span>描述：</span>
          {
            isEdit
              ? <input name="decription" value={detail.decription} onChange={handleInputChange} />
              : <span>{detail.decription}</span>
          }
        </div>
        {
         isEdit && (
         <div className="flex justify-between">
           {
              detail.name && (
              <div className="box">
                <button
                  type="button"
                  className="btn small danger"
                  onClick={() => delAnimal(detail)}
                >
                  移除
                </button>
              </div>
              )
            }
           <div className="box">
             <button
               type="button"
               className="btn small mr-1"
               onClick={cancelEdit}
             >
               取消
             </button>
             <button
               className="btn small success"
               onClick={saveEdit}
             >
               確認
             </button>
           </div>
         </div>
         )
        }
      </div>
    </>
  )
}

export default AnimalDetail
