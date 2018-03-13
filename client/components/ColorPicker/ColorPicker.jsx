import React from 'react';
import classNames from "classnames";

import './ColorPicker.scss';

const COLORS = [
    "#FFFFFF",
    "#88D8FF",
    "#FFFF8D",
    "#FF8A80",
    "#CCFF90",
    "#CFD8DC",
    "#FFD180",
]

class ColorPicker extends React.Component {

    render (){
        const { value } = this.props;

        return (
            <div className="color-picker">
                {
                    COLORS.map(color => {
                        return <div 
                                key={color}
                                className={classNames('color-picker__swatch', { "color-picker__swatch--selected" : this.props.value === color})}
                                style={{ backgroundColor: color }}
                                onClick={this.props.onChange.bind(null, color)}
                            />
                    })
                }
            </div>
        )
    }
}

export default ColorPicker;