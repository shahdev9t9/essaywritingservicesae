import Aboutus from '@/components/Aboutus';
import Awards from '@/components/Awards';
import Contentsec from '@/components/Contentsec';
import Homepricing from '@/components/Homepricing';
import Innovations from '@/components/Innovations';
import Ourwriters from '@/components/Ourwriters';
import Process from '@/components/Process';
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
      <Contentsec />
      <Innovations />
      <Process />
      <Ourwriters />
      <Awards />
    </>
  )
}

export default page
