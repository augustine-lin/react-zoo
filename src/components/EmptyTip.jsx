import React from 'react'

const EmptyTip = (props) => {
  const { text = '目前有點空' } = props
  return (
    <div className="emptyTip">
      <h3>{text}</h3>
      {
        text === '目前有點空'
        && (
          <span className="ml-2">
            <i className="far fa-flushed" />
          </span>
        )
      }
    </div>
  )
}

export default EmptyTip
