import {Typography} from '@material-tailwind/react';
import {IconButton} from '@material-tailwind/react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';

library.add (fab, faCheckSquare, faCoffee);

// import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Our Team', 'Projects'],
  },
  {
    title: 'Help Center',
    links: ['Discord', 'Twitter', 'GitHub', 'Contact Us'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program'],
  },
];
const currentYear = new Date ().getFullYear ();

const Footer = () => {
  return (
    <footer className="relative w-full bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className=" mx-auto grid  w-full grid-cols-1 gap-1 py-12 md:grid-cols-2 lg:grid-cols-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAq2yGMuiAtfYBPYsWHDvDaWHOr8mgjvpIo7dBfAiWHVdHwcx"
            alt=""
          />
          {SITEMAP.map (({title, links}, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="gray"
                className="mb-4 font-bold uppercase opacity-90"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map ((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="white"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy;
            {' '}
            {currentYear}
            {' '}
            <a href="https://material-tailwind.com/">TwitterX</a>
            . All
            Rights Reserved.
          </Typography>

          <div className="flex gap-4">
            <IconButton className="rounded bg-[#c13988] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                size="2xl"
                style={{color: '#ffffff'}}
              />
            </IconButton>
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                size="xl"
                style={{color: '#ffffff'}}
              />
            </IconButton>
            <IconButton className="rounded bg-[#b2cbb8] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                size="2xl"
                style={{color: '#1c731d'}}
              />
            </IconButton>
            <IconButton className="rounded bg-[#ffffff] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                size="2xl"
                style={{color: '#000000'}}
              />

            </IconButton>
          </div>

        </div>
        {/* <div /> */}
      </div>
    </footer>
  );
};

export default Footer;
