import React from 'react';

import { GERMAN_LANGUAGE, ENGLISH_LANGUAGE } from '../constants';

function TemplatesEditPageLanguage({ value, onChange }) {
    return (
        <div className="Settings__section">
            <label htmlFor="language-field-radio-group">
                Language
            </label>
            <div
                id="language-field-radio-group"
                className="Settings__radio-group"
            >
                <label>
                    <input
                        type="radio"
                        name="language"
                        required
                        value={GERMAN_LANGUAGE}
                        checked={value === GERMAN_LANGUAGE}
                        onChange={onChange}
                    />
                    German
                </label>

                <label>
                    <input
                        type="radio"
                        name="language"
                        required
                        value={ENGLISH_LANGUAGE}
                        checked={value === ENGLISH_LANGUAGE}
                        onChange={onChange}
                    />
                    German
                </label>
            </div>
        </div>
    )
};

export default TemplatesEditPageLanguage;