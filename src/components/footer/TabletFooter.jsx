import React from 'react'
import SocialMedia from './SocialMedia';
import Logo from '../shared/Logo';
import { Link } from 'react-router-dom';
import getYear from '../../util/getYear';

const TabletFooter = ({socialMedia,logo,menu}) => {
  return (
    <div className="hidden md:flex lg:hidden  justify-between  md:h-[284px] py-[64px]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-8">
          <Logo logo={logo} />
          <div className="flex text-white gap-x-[26px]">
            {menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className=" transition-colors uppercase duration-300 font-bold text-white text-[15px] leading-[19.53px] tracking-[2.5px] hover:text-lightGrey"
                >
                  {item.item}
                </Link>
              );
            })}
          </div>
        </div>

        <SocialMedia socialMedia={socialMedia}/>
      </div>

      <div className="flex flex-col h-full justify-between ">
        <Link className="btn w-[168px] btn-transparent-whiteArrow self-start">
          GET AN INVITE
        </Link>
        <p className="text-white self-end opacity-50 mix-blend-normal text-[15px] leading-[20px]">
          {`Copyright ${getYear()}. All Rights Reserved`}
        </p>
      </div>
    </div>
  );
}

export default TabletFooter;