import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
// import LanguageSwitcher from 'components/LanguageSwitcher'
// import { withNamespaces } from 'react-i18next'
import './style.scss'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { location, title } = this.props
    return (
      // <div className="fixed-top">
      <Navbar className="navbar-expand-md navbar-light sticky-top">
        <NavbarBrand>
          <Link to="/">
            <img src="/img/logo.svg" alt={title} width="100px" height="30px" />
          </Link>
        </NavbarBrand>

        {/* Toggler/collapsible Button */}
        <NavbarToggler onClick={this.toggle} className="btn-sm" />

        {/* Navbar links */}
        <Collapse
          isOpen={this.state.isOpen}
          navbar
          className="justify-content-end"
        >
          <Nav navbar>
            <NavItem
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                {/* {t('menu-item-home')} */}
                Home
              </Link>
            </NavItem>
            {/* Sản phẩm */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/Profile/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-product')} */}
                Sản phẩm
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-film')} */}
                    Phim
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-news')} */}
                    Chương trình tin tức
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-gameshows')} */}
                    Gameshows
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-public')} */}
                    Chương trình xã hội
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-product-others')} */}
                    Sản phẩm khác
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Dịch vụ */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/Profile/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-service')} */}
                Dịch vụ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-media')} */}
                    Media
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-pr')} */}
                    Public Relations
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-event')} */}
                    Tổ chức Event
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-digitalMarketing')} */}
                    Digital Marketing
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-ooh')} */}
                    OOH
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Khách hàng */}
            <NavItem
              className={
                location.pathname === '/customers'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                {/* {t('menu-item-customer')} */}
                Khách hàng
              </Link>
            </NavItem>
            {/* Bảng giá */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/Pricing/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-pricing')} */}
                Bảng giá
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-eNews')} */}
                    Báo điện tử
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-newspaper')} */}
                    Báo giấy
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-television')} */}
                    Truyền hình
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {/* {t('menu-subitem-ooh')} */}
                    OOH
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Ngôn ngữ */}
            {/* <LanguageSwitcher /> */}
          </Nav>
        </Collapse>
      </Navbar>
      // </div>
    )
  }
}
// export default withNamespaces('translation')(Navi)
export default Navi
