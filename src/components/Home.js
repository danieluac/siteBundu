import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Container,
  Row,
  Button,
} from 'reactstrap';
import CardHomePage from './card/CardHomePage';

const items = [
  {
    src: 'img/9.jpg',
    altText: `Os melhores cursos de desenvolvimento, programação e marketing digital`,
    caption: `com suporte, certificado e plano de carreira para você decolar na web`
  },
  {
    src: 'img/8.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/9.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="header-img" src={item.src} alt={item.altText} />
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
        <Carousel activeIndex={activeIndex} next={next} previous={previous} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        
        <Container fluid>
        <Row className="p-5">            
                <CardHomePage imgSrc="img/1.png" imgTitle="Curso 1" />
                <CardHomePage imgSrc="img/4.png" imgTitle="Curso 3"/>
                <CardHomePage imgSrc="img/5.png" imgTitle="Curso 5"/>
        </Row>        
        </Container>
        <Jumbotron className="blue-container p-5" fluid>
        <Container  fluid>
            <h3 className="display-4">Cadastra-se e tenha beneficios de um VIP!</h3>
            <p className="lead">Seja um Estudante desta Plataforma</p>
            <Button className="btn-lg" color="primary" outline>Cadastra-se</Button>
        </Container>
        </Jumbotron>
   </div>
  );
}

export default Home;