import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import './style.scss'

const items = [
  {
    id: 1,
    src:
      'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/42660512_749028275480279_8399454433099907072_o.jpg?_nc_cat=110&_nc_ht=scontent.fdad3-1.fna&oh=58270b6d574314d704b4a0de7b755379&oe=5CA5B99A',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    id: 2,
    src:
      'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/41006969_737700396613067_5465604080413966336_o.jpg?_nc_cat=107&_nc_ht=scontent.fdad3-2.fna&oh=1abbf4c03a71ae0a7c31b2a690ba112e&oe=5CA6F3AF',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    id: 3,
    src:
      'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/40141616_732633677119739_3246191322322698240_n.jpg?_nc_cat=106&_nc_ht=scontent.fdad3-1.fna&oh=e2267832c00d98f9b716853f1c40d7b2&oe=5CD7EC29',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
]

class Banner extends Component {
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

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text-danger"
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      )
    })

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    )
  }
}

export default withNamespaces('translation')(Banner)
