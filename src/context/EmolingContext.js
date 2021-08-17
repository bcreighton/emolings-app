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
    faqs: [],
    track_location: '',
    current_feeling: {},
    current_adv_feeling: {},
    current_severity: {},
    getFeelings: () => {},
    getAdvFeelings: () => {},
    resetAdvFeelings: () => {},
    getCopingSkills: () => {},
    resetCopingSkills: () => {},
    getReminders: () => {},
    setUserType: () => {},
    setTrackLocation: () => {}
})

export default EmolingsContext;