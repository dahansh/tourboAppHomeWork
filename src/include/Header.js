import React, {Component} from 'react';
import Image from "../components/Image";
import logo from "../tourbo_log.png"
import CoverImageCaptions from "../components/CoverImageCaptions";

class Header extends Component {
  render() {
    return (
      <div className={'header'}>
        <Image src={logo} className={'tourbo__img logo'} maxWidth={"400px"}/>
        <div className={'row header__captionedImg--wrapper'}>
          <Image
            className={'header__img'}
            src={'http://lorempixel.com/1080/720/city'}
          />
          <CoverImageCaptions
            mainText="find the best on-demand tours around you"
            subText="creating a unique and memorable informative travel experience"
          />
        </div>
      </div>
    );
  }
}

export default Header;
