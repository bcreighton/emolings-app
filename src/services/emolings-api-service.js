import config from '../config';

const EmolingsApiService = {
    getUserType(id) {
        return fetch(`${config.API_ENDPOINT}/user-type/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default EmolingsApiService;