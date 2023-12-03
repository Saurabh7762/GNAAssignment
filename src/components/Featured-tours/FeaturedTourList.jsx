import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";

const FeaturedTourList = ({ tours }) => {
  return (
    <>
      {tours.length > 0 ? (
        tours.map((tour) => (
          <Col lg="12" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))
      ) : (
        <div>No Results Found</div>
      )}
    </>
  );
};

export default FeaturedTourList;
