import React, { useState } from 'react';
import docs from '../Images/Docs.png'
import Acc from '../Images/Acc.png'
import './Header.css'

const Navbar = () => {

  return (
    <div className='NavBar'>
      <div className='img'>
        <img src={docs}></img>
      </div>
      <div className='two'>
        <div className='input'>
          Untitled Document
        </div>
        <div className='icons'>
          <div className='file'> File </div>
          <div className='file'> Edit </div>
          <div className='file'> View </div>
          <div className='file'> Insert </div>
          <div className='file'> Format </div>
          <div className='file'> Tools </div>
          <div className='file'> Extensions </div>
          <div className='file'> Help </div>
        </div>
      </div>
      <div className='img share'> Share </div>
      <div className='img img1'>
        <img src={Acc}></img>
      </div>
    </div>
  );
};

export default Navbar;

