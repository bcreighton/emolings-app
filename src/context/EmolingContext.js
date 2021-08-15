import React from 'react';

const EmolingsContext = React.createContext({
    user_type: {},
    feelings: [],
    adv_feelings: [],
    severity_levels: [],
    feeling_identifiers: [],
    severity_identifiers: [],
    reminders: [],
    coping_skills: [],
    current_feeling: {},
    current_adv_feeling: {},
    current_severity: {},
    getFeelings: () => {},
    getAdvFeelings: () => {},
    getCopingSkills: () => {},
    getReminders: () => {}
})

export default EmolingsContext;