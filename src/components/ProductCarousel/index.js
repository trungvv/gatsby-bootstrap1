import React, { Component } from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Carousel,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import './style.scss'

const items = [
  {
    id: 1,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_concert_2-min-370x222.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 2,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_sport_2-2-370x222.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    category: 'Phim',
    title: 'Card title',
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
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 4,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
]

class ProductCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { t } = this.props
    const slides = items.map(item => {
      return (
        <Card className="col-md-4" key={item.id}>
          <CardImg top width="100%" src={item.src} alt="Card image cap" />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle>{item.category}</CardSubtitle>
            <CardText>{item.desc}</CardText>
            <Button>{t('btn-detail')}</Button>
          </CardBody>
        </Card>
      )
    })

    return (
      <div className="container">
        <div className="row">
          {/* <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
          {slides}
          {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel> */}
        </div>
      </div>
    )
  }
}

export default withNamespaces('translation')(ProductCarousel)
