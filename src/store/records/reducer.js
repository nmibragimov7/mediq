import {ADD_NEW_RECORD} from "./actions"

const initialState = {
    records: [
        {
            id: 1,
            polyclinic: "Городская поликлиника №2",
            service: "Терапевт",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit porta pretium. Maecenas fermentum justo eu mauris imperdiet iaculis.",
            date: "01.01.2022",
            time: "14:00",
            doctor: "Касенов Касен Касенович",
            department: "Терапевтическое",
            diagnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            polyclinic: "Городская поликлиника №2",
            service: "Терапевт",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere justo quis elit porta pretium. Maecenas fermentum justo eu mauris imperdiet iaculis.",
            date: "01.01.2022",
            time: "14:00",
            doctor: "Касенов Касен Касенович",
            department: "Терапевтическое",
            diagnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]
}


const reducer = (state = initialState, action) => {
    const {type, payload} = action
    console.log(payload)
    switch (type) {
        case ADD_NEW_RECORD:
            return {
                ...state,
                records: [...state.records, payload.data]
            }
        default:
            return state
    }
}


export default reducer
