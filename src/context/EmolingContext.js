import React from 'react';

const EmolingsContext = React.createContext({
    user_type: {},
    feelings: [],
    adv_feelings: [],
    severity_levels: [],
    feeling_identifiers: [],
    severity_identifiers: [],
    reminders: [],
    current_feeling: {},
    current_adv_feeling: {},
    current_severity: {},
    getFeelings: () => {},
    getAdvFeelings: () => {},
    getFeelingIdentifiers: () => {},
    getSeverityIdentifiers: () => {},
    getCopingSkills: () => {},
    getReminders: () => {}
})

export default EmolingsContext;