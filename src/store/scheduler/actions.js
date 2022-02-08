export const SAVE_DATA = "SAVE_DATA"

export const saveData = (data) => {
    return {
        type: SAVE_DATA, payload: {
            key: "scheduler",
            data: data
        }
    }
}
