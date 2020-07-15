import React from 'react'
const AnimalTable = (props) => {
  const { list, toGender, handleSetDetailClick } = props

  return (
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
                <tr key={animal.name} onClick={() => handleSetDetailClick(animal)}>
                  <td>{animal.name}</td>
                  <td>{animal.type}</td>
                  <td>{toGender(animal.gender)}</td>
                  <td><img src={animal.imgSrc} alt={animal.name} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default AnimalTable
