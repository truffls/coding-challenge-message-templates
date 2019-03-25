import * as React from 'react';

function TemplatesEditPageContent({ value, onChange }) {
    return (
        <div>
            <label>
                Message text
            </label>
            <textarea
                required
                name="name"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
}

export default TemplatesEditPageContent;