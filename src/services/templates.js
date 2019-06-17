const store = {
    '1': {
        id: 1,
        updated: 1552601161510,
        title: 'My first template',
        content: 'For my first template I want to have a nice content',
        active: true,
        lang: 'en'
    },
    '2': {
        id: 2,
        updated: 1553066627010,
        title: 'Meine erste Vorlage',
        content: 'Für meine erste Vorlage möchte ich schönen Inhalt haben',
        active: true,
        lang: 'de'
    }
};
let nextId = 3;


function getTemplates() {
    const templates = Object.keys(store).map((id) => store[id]);

    return Promise.resolve(
        createResponse(200, {
            count: templates.length,
            results: templates
        })
    );
}

function createTemplate(data) {
    const error = runValidation(data, true);
    if (!!error) {
        return Promise.reject(error);
    }

    const id = nextId++;
    const updated = Date.now();
    const active = typeof data.active !== 'undefined' ? data.active : true;

    store[id] = {
        ...data,
        id,
        updated,
        active
    };

    return Promise.resolve(
        createResponse(201, store[id])
    );
}

function getTemplate(id) {
    if (typeof store[id] !== 'object') {
        return Promise.reject(
            createErrorResponse(404, [
                {
                    "status": 404,
                    "code": "18000",
                    "title": "Not found",
                    "detail": "Not found."
                }
            ])
        );
    }

    return Promise.resolve(
        createResponse(200, store[id])
    );
}

function updateTemplate(id, data) {
    if (typeof store[id] !== 'object') {
        return Promise.reject(
            createErrorResponse(404, [
                {
                    "status": 404,
                    "code": "18000",
                    "title": "Not found",
                    "detail": "Not found."
                }
            ])
        );
    }

    const error = runValidation(data, false);
    if (!!error) {
        return Promise.reject(error);
    }

    const updated = Date.now();

    store[id] = {
        ...store[id],
        ...data,
        updated
    };

    return Promise.resolve(
        createResponse(200, store[id])
    );
}

function deleteTemplate(id) {
    if (typeof store[id] !== 'object') {
        return Promise.reject(
            createErrorResponse(404, [
                {
                    "status": 404,
                    "code": "18000",
                    "title": "Not found",
                    "detail": "Not found."
                }
            ])
        );
    }

    delete store[id];

    return Promise.resolve(
        createResponse(204)
    );
}

module.exports = {
    getTemplates,
    createTemplate,
    getTemplate,
    updateTemplate,
    deleteTemplate
};

// Helpers for mocking
function runValidation(data, isCreationPhase = false) {
    const isSet = (field) => {
        return typeof data[field] !== 'undefined'
    };

    const needsValidation = (field) => {
        if (!isCreationPhase) {
            return isSet(field);
        }

        return isCreationPhase;
    };

    if (needsValidation('title') && (typeof data.title !== 'string' || data.title.length === 0)) {
        return createErrorResponse(400, [
            {
                "status": 400,
                "code": "32100",
                "title": "Resource validation error",
                "detail": "This field may not be blank.",
                "source": {
                    "pointer": "/title"
                }
            }
        ]);
    } else if (needsValidation('content') && (typeof data.content !== 'string' || data.content.length === 0)) {
        return createErrorResponse(400, [
            {
                "status": 400,
                "code": "32100",
                "title": "Resource validation error",
                "detail": "This field may not be blank.",
                "source": {
                    "pointer": "/content"
                }
            }
        ]);
    } else if (needsValidation('lang') && (typeof data.lang !== 'string' || data.lang.length === 0)) {
        return createErrorResponse(400, [
            {
                "status": 400,
                "code": "32100",
                "title": "Resource validation error",
                "detail": "This field may not be blank.",
                "source": {
                    "pointer": "/lang"
                }
            }
        ]);
    } else if (needsValidation('lang') && ['en', 'de'].indexOf(data.lang) === -1) {
        return createErrorResponse(400, [
            {
                "status": 400,
                "code": "32100",
                "title": "Resource validation error",
                "detail": `"${data.lang}" is not a valid choice.`,
                "source": {
                    "pointer": "/lang"
                }
            }
        ]);
    } else if (isSet('active') && typeof data.active !== 'boolean') {
        return createErrorResponse(400, [
            {
                "status": 400,
                "code": "32100",
                "title": "Resource validation error",
                "detail": `"{data.active}" is not a valid choice.`,
                "source": {
                    "pointer": "/active"
                }
            }
        ]);
    }
}

function createResponse(statusCode, data = null) {
    return data;
}

function createErrorResponse(statusCode, errors) {
    return {
        errors
    };
}