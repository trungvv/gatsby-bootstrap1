import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }
  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }
  renderLanguageChoice({ code, label }) {
    return (
      <button key={code} onClick={() => this.handleChangeLanguage(code)}>
        {code}
      </button>
    )
  }

  render() {
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'vi', label: 'Tiếng Việt' },
    ]
    return (
      <div className="navbar-item">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    )
  }
}

export default withNamespaces('LanguageSwitcher')(LanguageSwitcher)
