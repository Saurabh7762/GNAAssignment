import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style/home.css";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import HomeRight from "../components/HomeRight";
import tourData from "/Users/saurabhkumar/Desktop/nscompassignment/src/assets/data/tours.js";
import SearchBar from "../shared/SearchBar";


const Home = () => {
  const [filterValues, setFilterValues] = useState({
    categoryTypes: [],
    freeCancellation: false,
    priceRange: [50, 100],
    durations: [],
    languages: [],
    location: "",
    sortBy: "default",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({
    Tours: 0,
    Attractions: 0,
    "Day Trips": 0,
    "Outdoor Activities": 0,
    "Concerts & Shows": 0,
  });
  const [freeCancellationCount, setFreeCancellationCount] = useState(0);
  const [durationCounts, setDurationCounts] = useState({});
  const [languageCounts, setLanguageCounts] = useState({});

  //for pagination
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(getPaginatedData());
  }, [filteredData, currentPage]);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };


  useEffect(() => {
    setFilteredData(filterTours());
  }, [filterValues]);

  useEffect(() => {
    // Update counts based on the entire dataset when there's no location search
    if (!filterValues.location) {
      const counts = {
        Tours: 0,
        Attractions: 0,
        "Day Trips": 0,
        "Outdoor Activities": 0,
        "Concerts & Shows": 0,
      };
      let freeCancellationCount = 0;
      const durationCounts = {};
      const languageCounts = {};

      tourData.forEach((tour) => {
        counts[tour.categoryType] = (counts[tour.categoryType] || 0) + 1;
        if (tour.cancellationPolicy === "Free Cancellation") {
          freeCancellationCount++;
        }

        // Count for Durations
        durationCounts[tour.duration] = (durationCounts[tour.duration] || 0) + 1;

        // Count for Languages
        tour.languages.forEach((language) => {
          languageCounts[language] = (languageCounts[language] || 0) + 1;
        });
      });

      setCategoryCounts(counts);
      setFreeCancellationCount(freeCancellationCount);
      setDurationCounts(durationCounts);
      setLanguageCounts(languageCounts);
    }
  }, [filterValues.location]);

  const filterTours = () => {
    let filteredTours = tourData;

    if (filterValues.location) {
      // Filter by Location
      filteredTours = filteredTours.filter((tour) =>
        tour.city.toLowerCase().includes(filterValues.location.toLowerCase())
      );

      // Count tours based on Category Type only when there's a location search
      const counts = {
        Tours: 0,
        Attractions: 0,
        "Day Trips": 0,
        "Outdoor Activities": 0,
        "Concerts & Shows": 0,
      };
      let freeCancellationCount = 0;
      const durationCounts = {};
      const languageCounts = {};

      filteredTours.forEach((tour) => {
        counts[tour.categoryType] = (counts[tour.categoryType] || 0) + 1;
        if (tour.cancellationPolicy === "Free Cancellation") {
          freeCancellationCount++;
        }

        // Count for Durations
        durationCounts[tour.duration] =
          (durationCounts[tour.duration] || 0) + 1;

        // Count for Languages
        tour.languages.forEach((language) => {
          languageCounts[language] = (languageCounts[language] || 0) + 1;
        });
      });

      setCategoryCounts(counts);
      setFreeCancellationCount(freeCancellationCount);
      setDurationCounts(durationCounts);
      setLanguageCounts(languageCounts);
    }

    if (filterValues.categoryTypes.length > 0) {
      // Filter by Category Types
      filteredTours = filteredTours.filter((tour) =>
        filterValues.categoryTypes.includes(tour.categoryType)
      );
    }

    if (filterValues.freeCancellation) {
      // Filter by Free Cancellation
      filteredTours = filteredTours.filter(
        (tour) => tour.cancellationPolicy === "Free Cancellation"
      );
    }

    // Filter by Price Range
    filteredTours = filteredTours.filter(
      (tour) =>
        tour.price >= filterValues.priceRange[0] &&
        tour.price <= filterValues.priceRange[1]
    );

    if (filterValues.durations.length > 0) {
      // Filter by Durations
      filteredTours = filteredTours.filter((tour) =>
        filterValues.durations.includes(tour.duration)
      );
    }

    if (filterValues.languages.length > 0) {
      // Filter by Languages
      filteredTours = filteredTours.filter((tour) =>
        filterValues.languages.every((language) =>
          tour.languages.includes(language)
        )
      );
    }

    // Sorting logic
    if (filterValues.sortBy === "lowToHigh") {
      filteredTours = filteredTours.sort((a, b) => a.price - b.price);
    } else if (filterValues.sortBy === "highToLow") {
      filteredTours = filteredTours.sort((a, b) => b.price - a.price);
    }

    return filteredTours;
  };

  const handleSearch = ({ location }) => {
    setFilterValues({
      ...filterValues,
      location,
    });
  };

  const handleFilterChange = (
    categoryTypes,
    freeCancellation,
    priceRange,
    durations,
    languages
  ) => {
    setFilterValues({
      ...filterValues,
      categoryTypes,
      freeCancellation,
      priceRange,
      durations,
      languages,
    });
  };

  const handleSortChange = (sortBy) => {
    setFilterValues({
      ...filterValues,
      sortBy,
    });
  };


  const handlePrevPage = () => {
  setCurrentPage(currentPage - 1);
};

const handleNextPage = () => {
  setCurrentPage(currentPage + 1);
};

  return (
    <>
      <div className="searchbar__field">
        <h4>Tours in London</h4>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Container className="my-5">
        <Row>
          <Col lg="3" className="home__right mx-2">
            <HomeRight
              onFilterChange={handleFilterChange}
              categoryCounts={categoryCounts}
              freeCancellationCount={freeCancellationCount}
              durationCounts={durationCounts}
              languageCounts={languageCounts}
            />
          </Col>
          <Col className="home__left">
            <div className="left__header d-flex justify-content-between">
              <p className="d-inline">
                <p className="fw-bolder">
                  {filteredData.length}{" "}
                  <span className="fw-lighter">properties</span>
                </p>
              </p>
              <div>
                <label for="sortSelector">Sort By: </label>
                <select
                  id="sortSelector"
                  onChange={(event) => handleSortChange(event.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
            </div>
            <hr />
            <Col>
              <FeaturedTourList tours={paginatedData} />
              <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredData.length / itemsPerPage)
                  }
                >
                  Next
                </button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
