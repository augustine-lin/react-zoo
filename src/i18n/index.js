/* eslint-disable camelcase */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import zh_TW from './zh_TW'
import zh_CN from './zh_CN'

const resources = {
  en: {
    translation: en
  },
  zh_TW: {
    translation: zh_TW
  },
  zh_CN: {
    translation: zh_CN
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh_TW', // 預設語言
  fallbackLng: 'zh_TW', // 如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false // false才可以使用巢狀的語言檔
  }
})

export default i18n
