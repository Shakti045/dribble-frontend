const baseurl = process.env.REACT_APP_BASE_URL;
export const authurl ={
    'signup':baseurl+ '/signup',
    'signin':baseurl+ '/signin',
    'verifymail':baseurl+ '/verifymail',
}

export const userurl ={
    'profileupdate':baseurl+ '/update',
    'getprofile':baseurl+ '/getProfile',
};