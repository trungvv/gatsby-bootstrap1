import React, { Component } from 'react'
import Slider from 'react-slick'
import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import './style.scss'

const items = [
  {
    id: 1,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_concert_2-min-370x222.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    category: 'Phim',
    title: 'Media',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    id: 2,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_sport_2-2-370x222.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    category: 'Phim',
    title: 'Public Relations',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 3,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_3-min-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Tổ chức sự kiện',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 4,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Digital Marketing',
    desc:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 5,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_3-min-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'OOH',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 6,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Khác',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
]

class SectionService extends Component {
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
        <div className="col-md-6 col-lg-4" key={item.id}>
          <div className="media border media-style">
            <div className="mr-3 btn rounded-circle bg-secondary num">
              {item.id}
            </div>
            <div className="media-body">
              <h3 className="media-title">{item.title}</h3>

              <div className="overflow-hidden">
                <p className="media-text ">{item.desc}</p>
              </div>

              {/* <Link to="#" className="btn btn-outline-secondary">
              {t('btn-detail')}
            </Link> */}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="jumbotron container-fluid rounded-0 mb-0">
        <h1 className="display-4 text-center">{t('service-title')}</h1>

        <p className="lead text-center">{t('service-subtitle')}</p>

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        <div className="row mt-5">{slides}</div>
        {/* <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p> */}
        {/* </div> */}
      </div>
    )
  }
}

export default withNamespaces('translation')(SectionService)
