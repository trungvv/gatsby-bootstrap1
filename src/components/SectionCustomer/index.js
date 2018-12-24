import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
// import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

const items = [
  {
    id: 1,
    src: 'customers/hp-logo.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    category: 'Customer',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 2,
    src: 'customers/ichnhan-logo.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 3,
    src: 'customers/namduoc-logo.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 4,
    src: 'customers/pnj-logo.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 5,
    src: 'customers/rmit-logo.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    category: 'Customer',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 6,
    src: 'customers/sabeco.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
]

class SectionCustomer extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    const { t } = this.props
    const slides = items.map(item => {
      return (
        <div className="col" key={item.id}>
          <img className="card-img-top" src={item.src} alt={item.desc} />
        </div>
      )
    })

    return (
      <div className="jumbotron bg-light mb-0">
        <h1 className="display-4 text-center">
          {/* {t('customer-title')} */}
          Khách hàng
        </h1>

        {/* <p className="lead text-center">{t('customer-subtitle')}</p> */}

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        <Slider {...settings} className="mt-sm-5">
          {slides}
        </Slider>
        {/* </div> */}
      </div>
    )
  }
}

// export default withNamespaces('translation')(SectionCustomer)
export default SectionCustomer
