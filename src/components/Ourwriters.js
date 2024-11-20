import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Ourwriters = () => {
  return (
    <>
      <div className="Ourwriters py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="d-flex">
                <p style={{writingMode:'vertical-lr',textOrientation:'upright'}}> Writer Our</p>
                <Image src="/images/writerImg.png" width={438} height={534} alt="writerImg" className="img-fluid" />
              </div>
            </Col>
            <Col lg={9}>
              <div className="writerInfo px-5">
              <p className="m-0 fs-1 fw-bold text-white">Emily Thomas</p>
              <p className="m-0 fs-4 text-white">Essay Writer</p>
              <p className="m-0 text-white">When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, we also assist students from different countries of the word. The essay writers we hire are among the best in the industry. Many of our writers are graduate of prestigious universities around the world. If you have question and need the best help in academic writing, there is only one place you can turn to When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, </p>
              <p className="m-0 fs-3 text-white">100% Turnitin Pass Guaranted!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourwriters;
