import React, { useState, useEffect } from "react";
import HomeRight from "./HomeRight";
import FeaturedTourList from "./FeaturedTourList";
import tourData from "../../assets/data/tours";

const TourFilter = () => {
  const [filterValues, setFilterValues] = useState({
    categoryTypes: [],
    freeCancellation: false,
    priceRange: [50, 100],
  });

  const filterTours = () => {
    let filteredTours = tourData;

    // Filter by Category Types
    if (filterValues.categoryTypes.length > 0) {
      filteredTours = filteredTours.filter((tour) =>
        filterValues.categoryTypes.includes(tour.categoryType)
      );
    }

    // Filter by Free Cancellation
    if (filterValues.freeCancellation) {
      filteredTours = filteredTours.filter((tour) => tour.freeCancellation);
    }

    // Filter by Price Range
    filteredTours = filteredTours.filter(
      (tour) =>
        tour.price >= filterValues.priceRange[0] &&
        tour.price <= filterValues.priceRange[1]
    );

    return filteredTours;
  };

  const handleFilterChange = (categoryTypes, freeCancellation, priceRange) => {
    setFilterValues({
      categoryTypes,
      freeCancellation,
      priceRange,
    });
  };

  return (
    <div>
      <HomeRight onFilterChange={handleFilterChange} />
      <FeaturedTourList tours={filterTours()} />
    </div>
  );
};

export default TourFilter;
