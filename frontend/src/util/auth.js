import {redirect} from "react-router-dom";

export function getTokenDuration() {
    const expirationDate = localStorage.getItem('expiration');
    if (expirationDate) {
        return new Date(expirationDate).getTime() - new Date().getTime();
    }
    return 1;
}

export function getAuthToken() {
    if (getTokenDuration() > 0) {
        let token = localStorage.getItem('token');
        if (token) {
            return token;
        }
        return null;
    }
    return "EXPIRED";
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (token) {
        return null;
    }
    return redirect('/auth');
}
