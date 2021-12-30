export const SET_SELECTED_DOCTOR = "SET_SELECTED_DOCTOR"

export const setSelectedDoctor = (data) => {
    return {
        type: SET_SELECTED_DOCTOR, payload: {
            key: "selectedDoctor",
            data: data
        }
    }
}
