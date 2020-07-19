/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '../store/features/lang'
import langImg from '../assets/image/translate.png'

const HeaderBlock = (props) => {
  const { t } = useTranslation()
  const langList = [
    { text: 'EN', value: 'en' },
    { text: '繁體中文', value: 'zh_TW' },
    { text: '简体中文', value: 'zh_CN' }
  ]
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const handleLangChange = (e, val) => {
    e.preventDefault()
    props.changeLanguage({ lang: val })
    setIsOpenDropdown(false)
  }
  return (
    <div className="header">
      <div>{t('title')}</div>
      <div className="dropdown">
        <button
          type="button"
          className="dropbtn"
          onClick={() => setIsOpenDropdown(true)}
        >
          <img src={langImg} alt="" srcSet="" />
        </button>
        <div className={isOpenDropdown ? 'show dropdown-content' : 'dropdown-content'}>
          {langList.map((item) => (
            <a
              key={item.text}
              onClick={(e) => handleLangChange(e, item.value)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// redux state
const mapState = (state) => ({ lang: state.lang })

// redux action
const mapDispatchToProps = { changeLanguage }

export default connect(mapState, mapDispatchToProps)(HeaderBlock)
