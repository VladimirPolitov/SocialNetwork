import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1c7aff3f-44b4-44a4-a184-ea2b390c2fc6"
    }
})


export const usersAPI = {
    getUsers (currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)},

    follow (userId: any) {
       return instance.post(`follow/${userId}`)
    },

    unfollow (userId: any) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: any) {
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/`+userId);
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status: any) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me () {return instance.get(`auth/me`)},
    login (email: any, password: any, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}






