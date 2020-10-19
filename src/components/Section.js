import React from 'react';
import {Carousel} from 'react-bootstrap';

export default function Section(props) {
  return (
    <div className="section" id={props.id}>
      <h3>
        {props.title}
      </h3>
      {!!props.images.length &&
        <Carousel className="">
          {props.images.map(image =>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
              />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      }
      <p className="text-md-left">
        {props.content}
      </p>
      {!!props.links &&
        <ul>
          {props.links.map(link =>
            <li className="linkItem">
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
            </li>
          )}
        </ul>
      }
    </div>
  );
}
