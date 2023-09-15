import React from 'react'

export const Filter = ({ value, onChange }) => {

    return (
        <div>
            <label>
                Find contacts by Name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

