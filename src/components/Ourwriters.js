import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Ourwriters = () => {
  return (
    <>
      <div className="Ourwriters py-5 position-relative">
        <Container>
          <Row>
            <Col lg={12}>
              <Row className="writerBox">
              <Col lg={3}>
                <div className="d-flex">
                  <p style={{writingMode:'vertical-lr',fontSize:'3.3rem',color:'#fff',textTransform:'uppercase',fontWeight:'700'}}> Writer Our</p>
                  <Image src="/images/writerImg.png" width={438} height={534} alt="writerImg" className="img-fluid w-100" />
                </div>
              </Col>
              <Col lg={9}>
                <div className="writerInfo">
                <p className="m-0 fs-1 fw-bold text-white">Emily Thomas</p>
                <p className="m-0 fs-4 text-white pb-3">Essay Writer</p>
                <p className="m-0 text-white pb-4">When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, we also assist students from different countries of the word. The essay writers we hire are among the best in the industry. Many of our writers are graduate of prestigious universities around the world. If you have question and need the best help in academic writing, there is only one place you can turn to When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, </p>
                <p className="m-0 fs-3 text-white">100% Turnitin Pass Guaranted!</p>
                <div className="d-flex experinceWrap gap-md-4 justify-content-between">
                  <div>
                    <p className="m-0 fs-5 fw-bold">Average Experience</p>
                    <p className="m-0 fs-2 fw-bold">7+Years</p>
                  </div>
                  <div>
                    <p className="m-0 fs-5 fw-bold">Level Writer</p>
                    <p className="m-0 fs-2 fw-bold">Graduate</p>
                  </div>
                  <div>
                    <p className="m-0 fs-5 fw-bold">Project Delivered</p>
                    <p className="m-0 fs-2 fw-bold">8000+</p>
                  </div>
                </div>
                </div>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourwriters;
