import React from 'react';

function TemplatesEditPageName({ value, onChange }) {
    return (
        <div>
            <label>
                Name
            </label>
            <input
                type="text"
                required
                name="name"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default TemplatesEditPageName;