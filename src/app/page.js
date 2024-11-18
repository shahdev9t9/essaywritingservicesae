import Aboutus from '@/components/Aboutus';
import Homepricing from '@/components/Homepricing';
import Services from '@/components/Services';
import Sliders from '@/components/Sliders';
import Workdelivered from '@/components/Workdelivered';
import React from 'react'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <Sliders />
      <Workdelivered />
      <Aboutus />
      <Services />
      <Homepricing />
    </>
  )
}

export default page
