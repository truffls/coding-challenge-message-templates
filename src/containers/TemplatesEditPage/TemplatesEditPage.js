import React from 'react';

import './TemplatesEditPage.style.css';

import TemplatesEditPageLanguage from './TemplatesEditPageLanguage';
import TemplatesEditPageName from './TemplatesEditPageName';
import TemplatesEditPageContent from './TemplatesEditPageContent';
import TemplatesEditPageActions from './TemplatesEditPageActions';


class SettingsTemplateEditPage extends React.Component {
    handleChange() {}

    handleSaveTemplate() {}

    handleCancelButtonClick() {}

    handleResetButtonClick() {}

    render() {
        const language = '';
        const name = '';
        const content = '';

        const isSavingTemplate = false;
        const canSave = false;

        return (
            <div>
                <div>
                    <h1>
                        Edit template
                    </h1>
                    <p>
                        You can use templates to pre-defined text to send to candidates directly in the Messenger.
                    </p>
                </div>

                <form onSubmit={this.handleSaveTemplate}>
                    <h3>
                        General information
                    </h3>

                    <TemplatesEditPageLanguage
                        value={language}
                        onChange={this.handleChange}
                    />

                    <TemplatesEditPageName
                        value={name}
                        onChange={this.handleChange}
                    />

                    <TemplatesEditPageContent
                        value={content}
                        onChange={this.handleChange}
                    />

                    <TemplatesEditPageActions
                        isSavingTemplate={isSavingTemplate}
                        canSave={canSave}
                        onCancelButtonClick={this.handleCancelButtonClick}
                        onResetButtonClick={this.handleResetButtonClick}
                    />
                </form>
            </div>
        );
    }
}

export default SettingsTemplateEditPage;