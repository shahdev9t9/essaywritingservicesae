import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Awards = () => {
  return (
    <>
      <div className="Awards py-5">
        <Container>
          <Row>
            <Col lg={6}>
                <p>Our Awards and Accolades</p>
                <p>Over the past 20 years, we've not only embraced innovation but have been
recognized for it, amassing an impressive collection of awards and
accolades. Each honor is a milestone in our continuous journey of learning,
growing, and excelling. They are also a testament to our dedication and the
trust our clients place in us.</p>
<Link href="#">Who We Are</Link>
<div className="d-flex">
    <div>
        <p> 1500+</p>
        <p>Client Projects <span>completed</span></p>
    </div>
    <div>
        <p> 20+</p>
        <p>Years of Client <span>Services</span></p>
    </div>
    <div>
        <p> 4.9/5</p>
        <p>Average Clutch <span>Score Review</span></p>
    </div>
</div>
            </Col>
            <Col lg={6}>
            <div className="d-flex flex-wrap justify-content-center gap-md-4">
                <Image src="/images/gooleplusImg.png" width={249} height={127} className="img-fluid" alt="google" />
                <Image src="/images/barkImg.png" width={345} height={104} className="img-fluid" alt="google" />
                <Image src="/images/oneImg.png" width={296} height={263} className="img-fluid" alt="google" />
                <Image src="/images/trustpolitImg.png" width={367} height={238} className="img-fluid" alt="google" />
                <Image src="/images/securePay.png" width={350} height={118} className="img-fluid" alt="google" />
                <Image src="/images/mcafeesecure.png" width={372} height={176} className="img-fluid" alt="google" />
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Awards;
