import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";

import Newsletters from "./../shared/Newsletter";
const SearchResultList = () => {
  const location = useLocation();
  console.log(location);

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Tour Found</h4>
            ) : (
              data?.map((tour) => (
                <Col className="mb-4" lg="3" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletters />
    </>
  );
};

export default SearchResultList;
