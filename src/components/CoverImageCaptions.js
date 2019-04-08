import React from "react";

const CoverImageCaptions = props => {
  return (
    <div className={'header__caption text-capitalize'}>
        <h1>{props.mainText}</h1>
        <p>{props.subText}</p>
    </div>
  );
};

export default CoverImageCaptions;
