import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Aboutus = () => {
  return (
    <>
      <div className="Aboutus overflow-hidden">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="aboutInfo d-flex flex-column justify-content-center h-100 text-white">
              <p className="fs-1 fw-bold" style={{lineHeight:'40px'}}>ABOUT <br />ALGOWORKS</p>
              <p className="fs-5">
                Algoworks is a Top Digital Transformation company offering
                services in the field of Salesforce (Consulting, Customisation,
                Integration etc), Web/Mobile app Development and Devops. We are
                Summit (Highest Level) Salesforce Partner, Microsoft Gold
                Partner and AWS Consulting Partner.
              </p>
              <p className="fs-5">
                We started in 2006 and have been awarded as Top Consulting and
                Development Company in various technology fields a number of
                times. Our passion for technology starts with our trainings and
                skill development. Our Development team and consultants have
                completed more than 500 certifications to bring knowledge and
                experience together in solving day to day technology problems in
                the best possible way. We take high pride in our success stories
                and processes that go long back to when we started. Currently we
                operate from our offices in USA, Canada and India while our
                clients are located all across the globe.
              </p>
              <Link href="#">More About Algoworks</Link>
              </div>
            </Col>
            <Col lg={3} className="pe-md-0">
                <div className="socialBg py-4 ps-md-5">
                <p className="fs-1 fw-bold" style={{lineHeight:'40px'}}>SOCIAL <br />PROFILE</p>
                <Image src="/images/social.png" width={407} height={566} className="img-fluid" alt="social" />
                </div>
            </Col>
            <Col lg={4} className="ps-md-0">
            <Image src="/images/aboutSec.jpg" width={692} height={704} className="" alt="social" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
