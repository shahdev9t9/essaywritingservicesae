import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Workdelivered = () => {
  return (
    <>
      <div className="Workdelivered py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <h3 className="m-0 fs-1 fw-bold text-uppercase">
                Work we’re proud of that delivered results.
              </h3>
              <p className="m-0 py-3">
                We take pride in crafting strategies that drivegrowth and
                deliver measurable outcomes. Our casestudies tell the story of
                growth – see how we've helped clients across industries
              </p>
              <Link href="#" className="d-block">
                Case Studies
              </Link>
              <Image
                src="/images/caseStudy.png"
                width={414}
                height={400}
                alt="caseStudy"
                className="img-fluid"
              />
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={6}>
                <div className="workdelivInner py-5 px-3 rounded text-center">
                <Image src="/images/calendar.svg" alt="calendar" width={100} height={100} />
                <p className="m-0 text-white fs-2 fw-bold">Our Punctuality Is Excellent</p>
                <p className="m-0 text-white fs-5">We take pride in crafting strategies that drivegrowth and deliver measurable outcomes. Our casestudies tell the story of growth – see how we've</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className="workdelivInner py-5 px-3 rounded text-center">
                <Image src="/images/plagiarism.svg" alt="calendar" width={100} height={100} />
                <p className="m-0 text-white fs-2 fw-bold">Our Punctuality Is Excellent</p>
                <p className="m-0 text-white fs-5">We take pride in crafting strategies that drivegrowth and deliver measurable outcomes. Our casestudies tell the story of growth – see how we've</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className="workdelivInner py-5 px-3 rounded text-center">
                <Image src="/images/shield.svg" alt="calendar" width={100} height={100} />
                <p className="m-0 text-white fs-2 fw-bold">Our Punctuality Is Excellent</p>
                <p className="m-0 text-white fs-5">We take pride in crafting strategies that drivegrowth and deliver measurable outcomes. Our casestudies tell the story of growth – see how we've</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className="workdelivInner py-5 px-3 rounded text-center">
                <Image src="/images/customer-service.svg" alt="calendar" width={100} height={100} />
                <p className="m-0 text-white fs-2 fw-bold">Our Punctuality Is Excellent</p>
                <p className="m-0 text-white fs-5">We take pride in crafting strategies that drivegrowth and deliver measurable outcomes. Our casestudies tell the story of growth – see how we've</p>
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

export default Workdelivered;
