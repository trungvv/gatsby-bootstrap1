import React, { Component } from 'react'
// import { withNamespaces } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

class SectionContact extends Component {
  render() {
    // const { t } = this.props
    const slides = (
      <div className="row mt-5">
        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {/* {t('contact-headquarter')} */}
                Trụ sở chính
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-address')} */}
                  147 Thanh Thủy, Phường Thanh Bình, Quận Hải Châu, TP. Đà Nẵng
                </p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-phone')} */}
                  Điện thoại: 0236.3550.288 - 0236.3711.031
                </p>
                <p className="media-title">
                  {/* {t('contact-fax')} */}
                  Fax: 0236.3550.28
                </p>
                <p className="media-title">
                  {/* {t('contact-hotline')} */}
                  Hotline: 0903.531.777
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {/* {t('contact-office-hn')} */}
                VP Hà Nội
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-address-hn')} */}
                  Phòng 1012- Toà nhà An Lạc. Ngõ 43 Phùng Khoang – Từ Liêm – Hà
                  Nội
                </p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-phone-hn')} */}
                  Điện thoại: 024.62875362
                </p>
                <p className="media-title">
                  {/* {t('contact-fax-hn')} */}
                  Fax: 024.62875361
                </p>
                <p className="media-title">
                  {/* {t('contact-hotline-hn')} */}
                  Hotline: 0912.825.126
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="d-flex flex-column border-styled">
            <div className="p-2 mt-4">
              <h3 className="media-title title-center">
                {/* {t('contact-office-hcm')} */}
                VP Hồ Chí Minh
              </h3>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-address-hcm')} */}
                  Số 30 Đặng Tất. Phường Tân Định, Quận 1 – TP.HCM
                </p>
              </div>
            </div>

            <div className="p-2 media">
              <div className="icon-styled">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="media-body">
                <p className="media-title">
                  {/* {t('contact-phone-hcm')} */}
                  Điện thoại: 028.62730592
                </p>
                <p className="media-title">
                  {/* {t('contact-fax-hcm')} */}
                  Fax: 028.730.48179
                </p>
                <p className="media-title">
                  {/* {t('contact-hotline-hcm')} */}
                  Hotline: 0916.245.008
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="jumbotron container-fluid bg-light rounded-0 mb-0 contact-styled">
        <h1 className="display-4 text-center">
          {/* {t('contact-title')} */}
          Liên hệ
        </h1>

        <p className="lead text-center">
          {/* {t('contact-subtitle')} */}
          There is a lot of exciting stuff going on in the stars above us that
          makes
        </p>

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        {slides}
        {/* </div> */}
      </div>
    )
  }
}

// export default withNamespaces('translation')(SectionContact)
export default SectionContact
