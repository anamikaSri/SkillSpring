// import React, { useEffect } from "react";
// import { Card, CardTitle, Row, Col, Button, CardText, CardBody } from "reactstrap";


// const Home = () => {
//     useEffect(()=>{document.title="SkillSpring"},[])
//     return (
//             <Card  color="light" className="text-center" style={{borderRadius:0}}>
//               <CardBody>
//                 <CardTitle tag="h5">
//                     <h2 className="display-3">SkillSpring</h2>
//                 </CardTitle>
//                 <CardText className="display-7">
//                     Where Knowledge Blossoms and Skills Flourish, Igniting Your Path to Success
//                 </CardText>
//                 <div><Button color="primary" size="sm" outline>Start Learning</Button> </div>
//                </CardBody>
//             </Card>
//     )
// }

// export default Home;

import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400/?blur=5',
        altText: 'Slide 1',
        header:"SkillSpring",
        caption: ' Where Knowledge Blossoms and Skills Flourish, Igniting Your Path to Success',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400/?blur=4',
        altText: 'Slide 2',
        header: "SkillSpring",
        caption: ' Where Knowledge Blossoms and Skills Flourish, Igniting Your Path to Success',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400/?blur=5',
        altText: 'Slide 3',
        header: "SkillSpring",
        caption: ' Where Knowledge Blossoms and Skills Flourish, Igniting Your Path to Success',
        key: 3,
    },
];

function Home(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.header}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default Home;