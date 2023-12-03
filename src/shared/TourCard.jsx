import React from "react";
import { Col,Row, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./tour-card.css";

const TourCard = ({ tour }) => {
  const {
    id,
    title,
    city,
    photo,
    price,
    avgRating,
    reviews,
    cancellationPolicy,
    categoryType,
    duration,
    languages,
  } = tour;

  const isFreeCancellation = cancellationPolicy === "Free Cancellation";
  const cancellationTextColor = isFreeCancellation
    ? "cancellation__Green"
    : "cancellation__Red";

  return (
    <>
      <div className="tour__card d-flex justify-content-between gap-4 shadow-sm p-3 mb-5 bg-white rounded">
        <Card>
          <div className="tour__img">
            <img src={photo} alt="tour-img" />
          </div>
        </Card>

        <CardBody>
          <Row>
            <Col>
              <div className="tour__location d-flex flex-column gap-1">
                <p className="d-flex gap-2">
                  {duration}
                  <span>
                    <li>{categoryType}</li>
                  </span>
                </p>
                <h5 className="tour__title">
                  <Link to={`/tours/${id}`}>{title}</Link>
                </h5>
                <span className="tour__location d-flex align-items-center gap-1">
                  <i class="ri-map-pin-line"></i>
                  {city}
                </span>
                <p>Taking safety measures</p>
                {/* <p>Languages: {languages.join(", ")}</p> */}
                <p className={cancellationTextColor}>{cancellationPolicy}</p>
              </div>
            </Col>

            <Col lg="4">
              <div className="card__bottom d-flex flex-column">
                <span className="tour__rating d-flex align-items-center justify-content-end gap-1">
                  <i class="ri-star-fill"></i>
                  {avgRating} <span>({reviews.length})</span>
                </span>
                <p className="text-end">
                  <p className="mt-4 mb-1">From</p>
                  <h5 className="mb-0">${price}</h5>
                  <p>per adult</p>
                </p>
                <button className="btn booking__btn">
                  <Link to={`/tours/${id}`}>
                    View Details
                    <i class="ri-arrow-right-up-line"></i>
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default TourCard;
