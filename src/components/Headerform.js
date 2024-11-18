import React from "react";
import { Col, Row } from "react-bootstrap";

const Headerform = () => {
  return (
    <>
      <div className="Headerform">
        <p className="m-0 fs-1 fw-bold text-center text-white">PLACE YOUR ORDER</p>
        <Row className="align-items-center">
          <Col lg={6}>
          <div className="form-group">
            <label htmlFor="">Type of paper</label>
            <select name="" id="" className="form-control">
                <option value="">Essay (any Type)</option>
            </select>
          </div>
          </Col>
          <Col lg={6}>
          <div className="form-group">
            <label htmlFor="">Academic Level</label>
            <select name="" id="" className="form-control">
                <option value="">High School</option>
            </select>
          </div>
          </Col>
          <Col lg={6}>
          <div className="form-group">
            <label htmlFor="">Deadline</label>
            <select name="" id="" className="form-control">
                <option value="">20 Day/29 Aug</option>
            </select>
          </div>
          </Col>
          <Col lg={6}>
          <div className="form-group">
            <label htmlFor="">Pages</label>
            <select name="" id="" className="form-control">
                <option value="">Select Option</option>
            </select>
          </div>
          </Col>
          <Col lg={6}>
          <div className="form-group">
            <p className="m-0 text-white fs-3">Total: AED 0</p>
          </div>
          </Col>
          <Col lg={6}>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Headerform;
