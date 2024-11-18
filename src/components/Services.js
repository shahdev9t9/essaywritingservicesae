import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div className="Services py-5">
        <Container>
          <Row>
            <Col lg={3}>
                <h3 className="fs-1 fw-bold text-uppercase">The Best Our Writing Services</h3>
                <p>Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion</p>
                <Link href="#" className="mt-5 d-flex">Read our Services</Link>
                <div className="d-flex gap-md-3 mt-3">
                    <Image src="/images/leftarrow.svg" width={30} height={30} alt="rightarrow" />
                    <Image src="/images/rightarrow.svg" width={30} height={30} alt="rightarrow" />
                </div>
            </Col>
            <Col lg={9}>
            <Row>
                <Col lg={6}>
                <div className="serviceItems d-flex py-4 px-4 rounded gap-md-3 active">
                    <div className="icon">
                        <Image src="/images/essay.svg" width={130} height={130} className="img-fluid" alt="essay" />
                    </div>
                    <div className="itemInfo">
                        <p className="m-0 fw-bold fs-3">University Essay Help</p>
                        <p className="m-0">Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion fuel our journe together,making each project </p>
                    </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className="serviceItems d-flex py-4 px-4 rounded text-white gap-md-3">
                    <div className="icon">
                        <Image src="/images/essay.svg" width={130} height={130} className="img-fluid" alt="essay" />
                    </div>
                    <div className="itemInfo">
                        <p className="m-0 fw-bold fs-3">University Essay Help</p>
                        <p className="m-0">Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion fuel our journe together,making each project </p>
                    </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className="serviceItems d-flex py-4 px-4 rounded text-white gap-md-3">
                    <div className="icon">
                        <Image src="/images/essay.svg" width={130} height={130} className="img-fluid" alt="essay" />
                    </div>
                    <div className="itemInfo">
                        <p className="m-0 fw-bold fs-3">University Essay Help</p>
                        <p className="m-0">Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion fuel our journe together,making each project </p>
                    </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className="serviceItems d-flex py-4 px-4 rounded text-white gap-md-3">
                    <div className="icon">
                        <Image src="/images/essay.svg" width={130} height={130} className="img-fluid" alt="essay" />
                    </div>
                    <div className="itemInfo">
                        <p className="m-0 fw-bold fs-3">University Essay Help</p>
                        <p className="m-0">Our clients are the heart of our agency -they're visionaries and innovators who inspire us every day. Their trust andpassion fuel our journe together,making each project </p>
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

export default Services;
