import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

class SectionContact extends Component {
  render() {
    const { t } = this.props
    const slides = (
      <div className="row mt-5">
        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {t('contact-headquarter')}
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-address')}</p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-phone')}</p>
                <p className="media-title">{t('contact-fax')}</p>
                <p className="media-title">{t('contact-hotline')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {t('contact-office-hn')}
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-address-hn')}</p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-phone-hn')}</p>
                <p className="media-title">{t('contact-fax-hn')}</p>
                <p className="media-title">{t('contact-hotline-hn')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {t('contact-office-hcm')}
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-address-hcm')}</p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">{t('contact-phone-hcm')}</p>
                <p className="media-title">{t('contact-fax-hcm')}</p>
                <p className="media-title">{t('contact-hotline-hcm')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="jumbotron container-fluid bg-light rounded-0 mb-0 contact-styled">
        <h1 className="display-4 text-center">{t('contact-title')}</h1>

        <p className="lead text-center">{t('contact-subtitle')}</p>

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        {slides}
        {/* </div> */}
      </div>
    )
  }
}

export default withNamespaces('translation')(SectionContact)
