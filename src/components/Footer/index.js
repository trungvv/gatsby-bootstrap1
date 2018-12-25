import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="container-fluid bg-primary footer">
    <div className="container">
      <div className="row pt-5 pb-3">
        {/* Col 1 */}
        <div className="col-sm-12 col-md-12 col-lg-3">
          <h5>Hai Nam Media</h5>
          <hr />
          <p>
            Với phương châm: “ Sử dụng các sản phẩm của mình phục vụ cho những
            nhu cầu thiết thực nhất của người dân để làm cho cuộc sống tốt đẹp
            hơn www.hainammedia.com là Cầu nối thông tin ngành truyền thông.
          </p>
        </div>
        {/* Col 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h5>Trang chủ</h5>
          <hr />
          <ul className="footer-list-style">
            <li>
              <Link to="#">Giới thiệu</Link>
            </li>
            <li>
              <Link to="#">Sản phẩm</Link>
            </li>
            <li>
              <Link to="#">Dịch vụ</Link>
            </li>
            <li>
              <Link to="#">Bảng giá</Link>
            </li>
          </ul>
        </div>
        {/* Col 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h5>Khác</h5>
          <hr />
          <ul className="footer-list-style">
            <li>
              <Link to="#">Hải Namer</Link>
            </li>
            <li>
              <Link to="#">Tuyển dụng</Link>
            </li>
          </ul>
        </div>
        {/* Col 4 */}
        <div className="col-sm-12 col-md-4 col-lg-3">
          <h5>Newsletter</h5>
          <hr />
          <p>Subscribe to our newsletter and get all the cool news</p>
          <div className="subcribe-email">
            <input type="text" id="subcribe" />
            {/* <div className="subcribe-icon"> */}
            <FontAwesomeIcon icon={faPaperPlane} className="subcribe-icon" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="row bg-primary footer-line text-footer-line">
      <div className="col ">
        <p className="float-md-left">Bản quyền Hải Nam Media 2018</p>
      </div>
      <div className="col">
        <ul className="list-inline float-md-right">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li className="list-inline-item">
            {' '}
            <FontAwesomeIcon icon={faPinterest} />
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
