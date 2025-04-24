import { getBooksUrl, loginUserUrl, postUsersUrl } from "./constants"


export const getBooksData = async() => {
    const response = await fetch(getBooksUrl);
    const data = await response.json()
    return data
} 

export const postUsersData = async(user) => {
    const payload = {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(user)
    }
    const response = await fetch(postUsersUrl, payload)
    const data = await response.json()
    return data
}

export const LoginUserData = async(payload) => {
    const response = await fetch(`${loginUserUrl}username=${payload.username}&password=${payload.password}`)
    const data = await response.json()
    return data
}