import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';

  return (
    <div className='flex justify-center items-center p-10 bg-zinc-100 text-base-content mobile:flex-col mobile:items-start'>
        <div className='flex-1 items-start flex flex-col '>
            {/* Store Infos */}
            <h1 className='text-[25px] '>SADMAN SHOWMIK</h1>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit autem numquam voluptas perferendis omnis. Quis laudantium perferendis voluptatibus maxime obcaecati dolores. Quisquam laudantium magnam facere quo blanditiis minus mollitia.
            </p>
            <div className="flex items-center justify-center mt-3 self-start">
                {/* social Media links */}
                <div className= { socialStyle + ` bg-blue-700`}>
                    <FacebookIcon />
                </div>
                <div className={socialStyle + ` bg-orange-500`}>
                    <InstagramIcon />
                </div>
                <div className={socialStyle + ` bg-cyan-500`}>
                    <LinkedInIcon />
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>
           
            {/* Contact Infos */}
        <div className="flex m-3">
            <LocationOnOutlinedIcon className="text-[#8a4af3]"/>
            <p className='pl-3 text-xl font-semibold '>DHAKA,BANGLADESH</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneOutlinedIcon className="text-[#521da8]"/>
            <p className='pl-3 text-xl font-semibold'>+880 12345678</p>
        </div>
        <div className="flex m-3">
            <EmailOutlinedIcon className="text-[#8a4af3]"/>
            <p className='pl-3 text-xl font-semibold'>ABCXYZ@gmail.com</p>
        </div>
        </div>
    </div>
  )
}
