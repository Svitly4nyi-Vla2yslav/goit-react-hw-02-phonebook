import React, { Component } from 'react'
import './ColorPicker.css'
import classNames from 'classnames';

export class ColorPicker extends Component {
    state = {
        activeOptionsIdx: 0,
    };

    setActiveIdx = (index) => {
        this.setState({ activeOptionsIdx: index })
    }


    makeOptionClasses = index => {

      return   classNames('ColorPicker__option', {
             'ColorPicker__option--active':
         index === this.state.activeOptionsIdx })

        // const optionenClasses = ['ColorPicker__option'];
        // if (index === this.state.activeOptionsIdx) {
        //     optionenClasses.push('ColorPicker__option--active');
        // }
        // optionenClasses.join(' ')
    }

    render() {
        const { activeOptionsIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionsIdx];
        // console.log({label})
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Обраний колір: {label} </p>
                <div>
                    {options.map(({ label, color }, index) => (
                        // const optionenClasses = ['ColorPicker__option'];
                        // const optionenClassesName = this.makeOptionClasses(index)
                        // if (index === this.state.activeOptionsIdx) {
                        //     optionenClasses.push('ColorPicker__option--active');
                        // }
                        <button
                            key={label}
                            className={this.makeOptionClasses(index)}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIdx(index)}
                        ></button>

                    ))}
                </div>
            </div>
        );
    }
}