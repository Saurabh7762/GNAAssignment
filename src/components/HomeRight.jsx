import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import "./slider.css";


const CategoryTypes = [
  {
    ids: "tours",
    Name: "CategoryTypes",
    Values: "Tours",
    Display: "Tours",
  },
  {
    ids: "attractions",
    Name: "CategoryTypes",
    Values: "Attractions",
    Display: "Attractions",
  },
  {
    ids: "dayTrips",
    Name: "CategoryTypes",
    Values: "Day Trips",
    Display: "Day Trips",
  },
  {
    ids: "outdooractivities",
    Name: "CategoryTypes",
    Values: "Outdoor Activities",
    Display: "Outdoor Activities",
  },
  {
    ids: "concerts&shows",
    Name: "CategoryTypes",
    Values: "Concerts & Shows",
    Display: "Concerts & Shows",
  },
];

const Durations = [
  {
    ids: "1hr",
    Name: "Durations",
    Values: "1 hour",
    Display: "Up to 1 hour",
  },
  {
    ids: "4hr",
    Name: "Durations",
    Values: "4 hours",
    Display: "1 to 4 hours",
  },
  {
    ids: "24hr",
    Name: "Durations",
    Values: "1 day",
    Display: "4 hours to 1 day",
  },
];

const Languages = [
  {
    ids: "Eng",
    Name: "Languages",
    Values: "English",
    Display: "English",
  },
  {
    ids: "Span",
    Name: "Languages",
    Values: "Spanish",
    Display: "Spanish",
  },
  {
    ids: "Fren",
    Name: "Languages",
    Values: "French",
    Display: "French",
  },
  {
    ids: "Turk",
    Name: "Languages",
    Values: "Turkish",
    Display: "Turkish",
  },
];


const HomeRight = ({
  onFilterChange,
  categoryCounts,
  freeCancellationCount,
  durationCounts,
  languageCounts,
}) => {
  const [values, setValues] = useState([50, 100]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (checkboxValue === "freecancellation") {
      setFreeCancellation(isChecked);
    } else if (
      Durations.some((duration) => duration.Values === checkboxValue)
    ) {
      // Handle duration checkbox change
      if (isChecked) {
        setSelectedDurations((prevDurations) => [
          ...prevDurations,
          checkboxValue,
        ]);
      } else {
        setSelectedDurations((prevDurations) =>
          prevDurations.filter((duration) => duration !== checkboxValue)
        );
      }
    } else if (
      Languages.some((language) => language.Values === checkboxValue)
    ) {
      // Handle language checkbox change
      if (isChecked) {
        setSelectedLanguages((prevLanguages) => [
          ...prevLanguages,
          checkboxValue,
        ]);
      } else {
        setSelectedLanguages((prevLanguages) =>
          prevLanguages.filter((language) => language !== checkboxValue)
        );
      }
    } else {
      // Handle category type checkbox change
      if (isChecked) {
        setCategoryTypes((prevTypes) => [...prevTypes, checkboxValue]);
      } else {
        setCategoryTypes((prevTypes) =>
          prevTypes.filter((type) => type !== checkboxValue)
        );
      }
    }
  };

  useEffect(() => {
    // Trigger onFilterChange
    onFilterChange(
      categoryTypes,
      freeCancellation,
      values,
      selectedDurations,
      selectedLanguages
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    categoryTypes,
    freeCancellation,
    values,
    selectedDurations,
    selectedLanguages,
  ]);

  return (
    <>
      <div className="right_Category">
        <h5 className="right_Category_header">Category Types</h5>
        {CategoryTypes.map((item, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <input
                type="checkbox"
                id={item.ids}
                name={item.Name}
                value={item.Values}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={item.ids}>{item.Display}</label>
            </div>
            <p>{categoryCounts[item.Values]}</p>
          </div>
        ))}
      </div>
      <hr />
      <h5 className="mt-4">Other</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-self-center gap-2 mb-2">
          <input
            type="checkbox"
            id="freecancellation"
            name="freecancellation"
            value="freecancellation"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="freecancellation">Free Cancellation</label>
        </div>
        <p className="text-end">{freeCancellationCount}</p>
      </div>
      <hr />
      <h5>Price</h5>
      <div className="values">
        {values[0]}-{values[1]}
      </div>
      <Slider
        className="slider"
        value={values}
        onChange={setValues}
        min={50}
        max={1000}
      />
      <hr />
      <div className="right_Duration">
        <h5 className="right_Category_header">Duration</h5>
        {Durations.map((item, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <input
                type="checkbox"
                id={item.ids}
                name={item.Name}
                value={item.Values}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={item.ids}>{item.Display}</label>
            </div>
            <p>{durationCounts[item.Values]}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="right_Languages">
        <h5 className="right_Category_header">Languages</h5>
        {Languages.map((item, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <input
                type="checkbox"
                id={item.ids}
                name={item.Name}
                value={item.Values}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={item.ids}>{item.Display}</label>
            </div>
            <p>{languageCounts[item.Values]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeRight;
