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
import LanguageSwitcher from 'components/LanguageSwitcher'
import { withNamespaces } from 'react-i18next'
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
    const { location, title, t } = this.props
    return (
      <Navbar className="navbar-expand-md navbar-light fixed-top">
        <NavbarBrand>
          <img src="/img/logo.svg" alt="{title}" width="100px" height="30px" />
        </NavbarBrand>

        {/* Toggler/collapsible Button */}
        <NavbarToggler onClick={this.toggle} />

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
                {t('menu-item-home')}
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
                {t('menu-item-product')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-film')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-news')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-gameshows')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-public')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-product-others')}
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
                {t('menu-item-service')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-media')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-pr')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-event')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-digitalMarketing')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-ooh')}
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
                {t('menu-item-customer')}
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
                {t('menu-item-pricing')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-eNews')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-newspaper')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-television')}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Profile/" className="nav-link">
                    {t('menu-subitem-ooh')}
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Ngôn ngữ */}
            <LanguageSwitcher />
          </Nav>
          {/* <select data-width="fit">
                <option data-content='<span class="flag-icon flag-icon-us"></span> En'>En</option>
                <option data-content='<span class="flag-icon flag-icon-vi"></span> Vi'>Vi</option>
            </select> */}
        </Collapse>
      </Navbar>
    )
  }
}
export default withNamespaces('translation')(Navi)
