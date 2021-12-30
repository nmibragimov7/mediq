export const ADD_NEW_RECORD = "ADD_NEW_RECORD"

export const addRecord = (data) => {
    return {
        type: ADD_NEW_RECORD, payload: {
            data: data
        }
    }
}
