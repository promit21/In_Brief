import React from 'react';
import { FaFacebook, FaLinkedin,  FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='container mx-auto  p-6  rounded-lg mt-10 '>
       
       
    
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  flex-grow ml-4'>
            <div>
                <h3 className='font-semibold text-xl'>Business</h3>
                <div className='text-slate-500 font-medium'>
                <p>startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Markets</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Technology</h3>
                <div className='text-slate-500 font-medium'>
                <p>Innovate</p>
                <p>Gadget</p>
                <p>Future Tech</p>
                <p>Upstart</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Travel</h3>
                <div className='text-slate-500 font-medium'>
                <p>Destinations</p>
                <p>Food & Drink</p>
                <p>Stay</p>
                <p>News</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Sports</h3>
                <div className='text-slate-500 font-medium'>
                <p>Football</p>
                <p>Tennis</p>
                <p>Golf</p>
                <p>Basket Ball</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Entertainment</h3>
                <div className='text-slate-500 font-medium'>
                <p>Movies</p>
                <p>Artist</p>
                <p>Television</p>
                <p>Influencer</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Features</h3>
                <div className='text-slate-500 font-medium'>
                <p>Call of Eart</p>
                <p>Freedom Project</p>
                <p>Inside Asia</p>
                <p>2 Degress</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Weather</h3>
                <div className='text-slate-500 font-medium'>
                <p>Climate</p>
                <p>Earthquake</p>
                <p>strom Tracker</p>
                <p>Videos</p>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>More</h3>
                <div className='text-slate-500 font-medium'>
                <p>Design</p>
                <p>Invesment</p>
                <p>Worl for InBrief</p>
                <p>Support Us</p>
                </div>
            </div>
          
        </div>
    <hr  className='px-2 my-4'/>
        <div className='flex justify-between items-center'>
          <div>
          <h3 className='font-serif text-3xl text-rose-600 '>  InBrief</h3>
          <p className='font-inter'>Providing reliable news since 1992</p>
          <p className='text-gray-400 font-medium '> Copyright @ 2024 InBrief</p>
          </div>
          
          <div className='text-2xl text-red-500 flex gap-4 mt-2'>
          <FaFacebook />
          <FaLinkedin />
          <FaTwitterSquare/>
        
          </div>
          </div>
          
        </div>
    );
};

export default Footer;