import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headerform from "./Headerform";

const Sliders = () => {
  return (
    <>
      <div className="Sliders position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
                <p className="m-0 fs-3 text-white">Avail The Best</p>
                <h1 className="text-white">Essay Writing Services in Dubai</h1>
                <p className="m-0 text-white fs-3 pb-3">by Uae Top Essay Writers</p>
                <p className="m-0 text-white fs-5 pb-4">What is the best 24/7 essay solution for you? Get in touch with our top-of-the-line writers in the UAE</p>
                <Link href="tel:+97142473777"><Image src="/images/whatsappIcon.svg" width={30} height={30} alt="whatsappIcon" /> +971 42473777</Link>
            </Col>
            <Col lg={2}>
            <Image src="/images/middleImg.png" width={583} height={948} className="img-fluid middleImg" alt="middle" />
            </Col>
            <Col lg={5}>
            <Headerform />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
            <Image src="/images/brandContainer.png" width={1701} height={196} className="img-fluid position-relative" alt="brandcontainer" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sliders;
