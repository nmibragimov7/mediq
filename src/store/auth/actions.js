export const CHANGE_USER_REDUCER = "CHANGE_USER_REDUCER"


export const userAuthorizate = (user) => {
    return {
        type: CHANGE_USER_REDUCER, payload: {
            key: "user",
            data: user
        }
    }
}
