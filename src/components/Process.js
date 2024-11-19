import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Process = () => {
  return (
    <>
      <div className="Process py-5">
        <Container>
          <Row>
            <Col lg={5}>
                <p className="fs-1 text-uppercase fw-bold">Our Process</p>
                <p className="m-0">When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, we also assist students from different countries of the word. The essay writers we hire are among the best in the industry. Many of our writers are graduate of prestigious universities around the world. If you have question and need the best help in academic writing, there is only one place you can turn to When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the UAE to do your essays? That is not necessary. In addition to offering services in the UAE, </p>
            </Col>
            <Col lg={7}>
            <div className="processList">
                <div className="processWrap d-flex justify-content-center align-items-center">
                    <div className="processItems">
                        <div className="icon">
                            <Image src="/images/data-transfer.png" width={131} height={132} className="img-fluid d-block m-auto" />
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="shapes d-flex align-items-center">
                        <div className="processshapecpount">
                            01
                        </div>
                        <div className="shapearrow">
                            <Image src="/images/arrowLeftpro.svg" width={90} height={100} className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="processInfo">
                            <p className="m-0 fs-3 fw-bold">Data collection</p>
                            <p className="m-0">Would I be able to obtain a plagiarism report 
                            to satisfy my own self esteem?</p>
                        </div>
                    </div>
                </div>

                <div className="processWrap d-flex justify-content-center align-items-center">
                <div className="processItems">
                        <div className="processInfo">
                            <p className="m-0 fs-3 fw-bold">Paper construction</p>
                            <p className="m-0">Would I be able to obtain a plagiarism report 
                            to satisfy my own self esteem?</p>
                        </div>
                    </div>
                    <div className="processItems" style={{marginLeft:'3rem'}}>
                        <div className="shapes d-flex align-items-center">
                        <div className="shapearrow">
                            <Image src="/images/rightArrowProc.svg" width={90} height={100} className="img-fluid" />
                        </div>
                        <div className="processshapecpount Right">
                            02
                        </div>
                        
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="icon">
                            <Image src="/images/data-transfer.png" width={131} height={132} className="img-fluid d-block m-auto" />
                        </div>
                    </div>
                    
                    
                </div>

                <div className="processWrap d-flex justify-content-center align-items-center">
                    <div className="processItems">
                        <div className="icon">
                            <Image src="/images/data-transfer.png" width={131} height={132} className="img-fluid d-block m-auto" />
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="shapes d-flex align-items-center">
                        <div className="processshapecpount">
                            03
                        </div>
                        <div className="shapearrow">
                            <Image src="/images/arrowLeftpro.svg" width={90} height={100} className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="processInfo">
                            <p className="m-0 fs-3 fw-bold">Data collection</p>
                            <p className="m-0">Would I be able to obtain a plagiarism report 
                            to satisfy my own self esteem?</p>
                        </div>
                    </div>
                </div>

                <div className="processWrap d-flex justify-content-center align-items-center">
                <div className="processItems">
                        <div className="processInfo">
                            <p className="m-0 fs-3 fw-bold">Paper construction</p>
                            <p className="m-0">Would I be able to obtain a plagiarism report 
                            to satisfy my own self esteem?</p>
                        </div>
                    </div>
                    <div className="processItems" style={{marginLeft:'3rem'}}>
                        <div className="shapes d-flex align-items-center">
                        <div className="shapearrow">
                            <Image src="/images/rightArrowProc.svg" width={90} height={100} className="img-fluid" />
                        </div>
                        <div className="processshapecpount Right">
                            04
                        </div>
                        
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="icon">
                            <Image src="/images/data-transfer.png" width={131} height={132} className="img-fluid d-block m-auto" />
                        </div>
                    </div>
                    
                    
                </div>

                <div className="processWrap d-flex justify-content-center align-items-center">
                    <div className="processItems">
                        <div className="icon">
                            <Image src="/images/data-transfer.png" width={131} height={132} className="img-fluid d-block m-auto" />
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="shapes d-flex align-items-center">
                        <div className="processshapecpount">
                            05
                        </div>
                        <div className="shapearrow">
                            <Image src="/images/arrowLeftpro.svg" width={90} height={100} className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    <div className="processItems">
                        <div className="processInfo">
                            <p className="m-0 fs-3 fw-bold">Data collection</p>
                            <p className="m-0">Would I be able to obtain a plagiarism report 
                            to satisfy my own self esteem?</p>
                        </div>
                    </div>
                </div>


            </div>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Process;
