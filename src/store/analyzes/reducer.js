
const initialState = {
    analyzes: [
        {
            id: 1,
            doctor: "Кайратов Б.П.",
            position: "Терапевт",
            time: "12:37",
            title: "Semana 1",
            description: "Vamos a comenzar, en esta primera semana nos vamos a centrar en conocer nuestro cuerpo con los cambios del embarazo. Que posturas son las que nos ayudan a dejar el dolor de lado, ¡Comenzamos!",
            file: ""
        },
        {
            id: 2,
            doctor: "Кайратов Б.П.",
            position: "Терапевт",
            time: "18:00",
            title: "Semana 1",
            description: "Vamos a comenzar, en esta primera semana nos vamos a centrar en conocer nuestro cuerpo con los cambios del embarazo. Que posturas son las que nos ayudan a dejar el dolor de lado, ¡Comenzamos!",
            file: ""
        },
        {
            id: 3,
            doctor: "Кайратов Б.П.",
            position: "Терапевт",
            time: "09:35",
            title: "Semana 1",
            description: "Vamos a comenzar, en esta primera semana nos vamos a centrar en conocer nuestro cuerpo con los cambios del embarazo. Que posturas son las que nos ayudan a dejar el dolor de lado, ¡Comenzamos!",
            file: ""
        },
    ]
}


const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        default:
            return state
    }
}


export default reducer
