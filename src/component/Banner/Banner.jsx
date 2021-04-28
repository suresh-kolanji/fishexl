import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import ban1 from "./../images/Banner1.jpg";
import ban4 from "./../images/Banner1.jpg";

export const Banner = (params) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban1}
          width={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Why Vancharam</h3>
          <p>
            Eating Vancharam fish is an important source of omega-3 fatty acids.
            These essential nutrients keep our heart and brain healthy. Two
            omega-3 fatty acids found in fish are EPA (eicosapentaenoic acid)
            and DHA (docosahexaenoic acid). Our bodies don't produce omega-3
            fatty acids so we must get them through the food we eat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban4}
          width={500}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Why Sheela</h3>
          <p>
            Eating Sheela fish is an important source of omega-3 fatty acids.
            These essential nutrients keep our heart and brain healthy. Two
            omega-3 fatty acids found in fish are EPA (eicosapentaenoic acid)
            and DHA (docosahexaenoic acid). Our bodies don't produce omega-3
            fatty acids so we must get them through the food we eat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban1}
          width={500}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Why Nethili</h3>
          <p>
            Eating Nethili fish is an important source of omega-3 fatty acids.
            These essential nutrients keep our heart and brain healthy. Two
            omega-3 fatty acids found in fish are EPA (eicosapentaenoic acid)
            and DHA (docosahexaenoic acid). Our bodies don't produce omega-3
            fatty acids so we must get them through the food we eat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban4}
          width={500}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Why Mathi</h3>
          <p>
            Eating Mathi fish is an important source of omega-3 fatty acids.
            These essential nutrients keep our heart and brain healthy. Two
            omega-3 fatty acids found in fish are EPA (eicosapentaenoic acid)
            and DHA (docosahexaenoic acid). Our bodies don't produce omega-3
            fatty acids so we must get them through the food we eat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ban1}
          width={500}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
