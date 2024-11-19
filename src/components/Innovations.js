import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Innovations = () => {
  return (
    <>
      <div className="Innovations py-5">
        <Container>
          <Row>
            <Col lg={8} className="offset-md-2">
                <p className="fw-bold text-center text-white" style={{fontSize:'4rem',lineHeight:'5rem'}}>Gain a competitive edge with our innovation & excellence.</p>
                <p className="text-center fs-5 text-white pb-4">From understanding technology requirements to final development with less time-to-market, we make it right for businesses to
                flourish faster and better with our unique client-centric approach.</p>
                <div className="d-flex gap-md-3 text-center mt-4">
                    <div className="innovationItems">
                        <Image src="/images/inov1.png" width={201} height={40} className="img-fluid" />
                        <p className="m-0 text-white">TOP MOBILE APP DEVELOPERS</p>
                        <p className="m-0 text-white">GoodFirms.co | 2020</p>
                    </div>
                    <div className="innovationItems">
                        <Image src="/images/inov2.png" width={201} height={40} className="img-fluid" />
                        <p className="m-0 text-white">Technology Fast 50</p>
                        <p className="m-0 text-white">India 2019 | 2020</p>
                    </div>
                    <div className="innovationItems">
                        <Image src="/images/inov3.png" width={201} height={40} className="img-fluid" />
                        <p className="m-0 text-white">TOP APP DEVELOPERS</p>
                        <p className="m-0 text-white">Clutch | 2018 | 2019</p>
                    </div>
                    <div className="innovationItems">
                        <Image src="/images/inov4.png" width={201} height={40} className="img-fluid" />
                        <p className="m-0 text-white">Technology Fast 500</p>
                        <p className="m-0 text-white">Asia 2013 | 2014 | 2015</p>
                    </div>
                    <div className="innovationItems">
                        <Image src="/images/inov5.png" width={201} height={40} className="img-fluid" />
                        <p className="m-0 text-white">OUTSTANDING WEBSITE</p>
                        <p className="m-0 text-white">USA 2017</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 gap-md-4 awardsItems">
                    <Link href="#">All Awards</Link>
                    <Link href="#">All Partnership</Link>
                    <Link href="#">In the Press</Link>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Innovations;
