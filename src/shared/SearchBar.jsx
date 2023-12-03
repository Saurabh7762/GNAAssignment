import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = ({ onSearch }) => {
  const locationRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (
      location === "" ||
      startDate === "" ||
      endDate === "" ||
      maxGroupSize === ""
    ) {
      return alert("All fields are required!");
    }
    if (onSearch) {
      onSearch({
        categoryTypes: [],
        freeCancellation: false,
        priceRange: [50, 100],
        durations: [],
        languages: [],
        location, // Pass location here
      });
    }
  };

  return (
    <Col lg="12" className="d-flex justify-content-center">
      <div className="search__bar">
        <Form className="d-flex gap-4 justify-content-between my-1">
          <FormGroup className="d-flex gap-3 form__group form__group-fast my-3 w-100">
            <span>
              <i class="ri-map-pin-fill"></i>
            </span>
            <div>
              <h6 className="text-start">Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast my-3 w-100">
            <span>
              <i class="ri-calendar-check-line"></i>
            </span>
            <div>
              <h6 className="text-start">Check in - Check out</h6>
              <div
                className="d-flex align-items-center
"
              >
                <input
                  type="Date"
                  placeholder="Distance k/m"
                  ref={startDateRef}
                />
                <div>-</div>
                <input type="Date" ref={endDateRef} 
                />
              </div>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last my-3 w-100">
            <span>
              <i class="ri-compass-3-line"></i>
            </span>
            <div>
              <h6 className="text-start">Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef}
               />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
            <span>Search</span>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
