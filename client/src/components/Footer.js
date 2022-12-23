import React from 'react';
// material icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PrintIcon from '@mui/icons-material/Print';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
// css link
import './Footer.css'
export default function Footer() {

  return (
    <div className='footer'>
      <section className='flex_first'>
        <div className=''>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='icons'>
            <FacebookIcon />
          </a>
          <a href='#!' className='icons'>
            <InstagramIcon />
          </a>
          <a href='#!' className='icons'>
            <TwitterIcon />
          </a>
          <a href='#!' className='icons'>
            <YouTubeIcon />
          </a>
          <a href='#!' className='icons'>
            <LinkedInIcon />
          </a>
        </div>
      </section>

      <section className=''>
        <div className=''>
          <div className='flex_sec'>
            <section>
              <h6 className='header_footer'>
                <DiamondIcon className="Company_flex" />
                Company name
              </h6>
              <p className='last_p'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </section>

            <section className='Company_flex'>
              <h6 className='header_footer'>Products</h6>
              <p>
                <a href='#!' className='icons'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  Laravel
                </a>
              </p>
            </section>

            <section  className='Company_flex'>
              <h6 className='header_footer'>Useful links</h6>
              <p>
                <a href='#!' className='icons'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='icons'>
                  Help
                </a>
              </p>
            </section>

            <section  className='Company_flex'>
              <h6 className='header_footer'>Contact</h6>
              <div className=''>
                <p  className="gap_footer">
                  <HomeIcon  />
                  New York, NY 10012, US
                </p>
                <p className="gap_footer">
                  <EmailIcon  />
                  info@example.com
                </p>
                <p className="gap_footer">
                  <LocalPhoneIcon /> + 01 234 567 88
                </p>
                <p className="gap_footer">
                  <PrintIcon/> + 01 234 567 89
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className='copy_footer' >
        © 2022 Copyright:
        <a className='' href='https://w3school.com/'>
          Fastcv.com
        </a>
      </div>
    </div>
  );
}