// export const API_Base_URL = 'https://hybrid.testserver.rubitronlabs.org';
export const API_Base_URL = 'https://jsonplaceholder.typicode.com';

export const getApiUrl=(endpoint)=>`${API_Base_URL}/${endpoint}`

export const GETPOSTS=getApiUrl('todos')

export const GETUSERS=getApiUrl('users')

// export const postUsers = getApiUrl('user/register')