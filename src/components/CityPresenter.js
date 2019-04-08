import React, {Component} from 'react';
import Image from "./Image";

class CityPresenter extends Component {

  render(props) {
    return (
      <div className={'cityPresenter--wrapper row no-gutter'}>
        <div className="col-md-4 cityPresenter">
          <div className={'cityPresenter__captionWrapper'}>
            <h2 className={'text-capitalize'}>
              {this.props.city}
            </h2>
            <p>
              {/*
              this should be the description that is fetched async
               for the city name, if a reactive city input is wanted
               {this.props.cityDesc}, but now we mock
               */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
        </div>

        <div className="col-md-8 cityPresenter__img">
              {/*
              CDN image objects per city need to have horiz. and vert.
               picture types since mobile horiz. images either get warped
               or cut, at md (992px) mobile images should be called.
               */}
          <Image
            className={'cityPresenter__img'}
            src={'http://lorempixel.com/1080/720/city'}
          />
        </div>


      </div>
    );
  }
}

export default CityPresenter;