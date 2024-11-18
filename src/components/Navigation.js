"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
      <div className="Navigation fixed-top">
      <Navbar expand="lg">
      <Container>
        <Link href="/" className='navbar-brand'><Image src="/images/brandLogo.svg" width={215} height={101} alt="Brand Logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-md-5 gap-md-2 align-items-center">
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="/about-us">About Us</Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link className='dropdown-item' href="/services">Services</Link>
            </NavDropdown>
            <Link className='nav-link' href="/pricing">Pricing</Link>
            <Link className='nav-link' href="/reviews">Reviews</Link>
            <Link className='nav-link' href="/blog">Blogs</Link>
          </Nav>
          <Nav className="ms-auto ps-md-5 align-items-center gap-md-2">
          <Link className='nav-link login bg-white px-4 rounded py-2 text-dark' href="/login/">Login <FaArrowRight fill='#000000' /></Link>
          <Link className='nav-link ordernow px-4 text-white rounded py-2' href="/order-now">Order Now <FaArrowRight fill='#FFFFFF' /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </>
  )
}

export default Navigation
