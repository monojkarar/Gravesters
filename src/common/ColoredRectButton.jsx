import React, { Fragment } from 'react';
import { Grommet, Button } from 'grommet';

const ColoredRectButton = (props) => {
  const { borderColor, fillColor, textColor, onClick, icon, label, primary } = props;
  const customTheme = {
    button: {
      border: {
        radius: undefined,
        color: borderColor,
      },
      padding: {
        vertical: '10px',
        horizontal: '10px',
      },
      primary: {
        color: fillColor,
      },
      extend: props => {
        return `
          color: ${textColor || 'white'};
          font-weight: bold;
        `;
      }
    }
  }
  return (
    <Fragment>
      <Grommet theme={customTheme}>
        <Button
          label={label}
          onClick={onClick}
          icon={icon}
          primary={!!primary}
        />
      </Grommet>
    </Fragment>
  )
}

export default ColoredRectButton;
