import React, { Fragment } from 'react';
import styled from 'styled-components';

const RoundedPictureDiv = props => {
  const {url, renderProps} = props;
  const RoundedDiv = styled.div`
    border-radius: 50%;
    height: ${(renderProps && renderProps.height) || '150' }px;
    width: ${(renderProps && renderProps.width) || '150'}px;
    background-image: url(${url || 'https://i.pravatar.cc/150'});
    margin-top: ${(renderProps && renderProps.topMargin) || '20px'};
  `;
  return (
    <Fragment>
      <RoundedDiv />
    </Fragment>
  );
}

export default RoundedPictureDiv;


