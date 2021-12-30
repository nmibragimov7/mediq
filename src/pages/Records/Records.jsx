import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";

import BaseButton from "../../components/base/BaseButton/BaseButton"
import BaseSelect from "../../components/base/BaseSelect/BaseSelect"

const containerStyle = {
    width: "100%",
    height: "100%"
};
const center = {
    lat: 43.238949,
    lng: 76.889709,
    zoom: 15
};
const Records = () => {
    const navigate = useNavigate()
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAzjPqz_hzd9ZIawe9hzo5sDdGcOkY-X40"
    })
    const [values, setValues] = useState({
        point: null,
        clinic: ""
    })
    // eslint-disable-next-line no-unused-vars
    const [map, setMap] = React.useState(null)
    const [activeCoordinates, setActiveCoordinates] = useState(center)
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const optionsCountry = [{
        id: 1,
        value: "Almaty",
        coordinates: {
            lat: 43.238949,
            lng: 76.889709,
            zoom: 10
        }
    },
        {
            id: 2,
            value: "Astana",
            coordinates: {
                lat: 51.169392,
                lng: 71.449074,
                zoom: 10
            }
        },]
    const optionsClient = [{
        id: 1,
        value: "Tropper",
        coordinates: {
            lat: 43.238949,
            lng: 76.889709,
            zoom: 18
        }
    },
        {
            id: 2,
            value: "Gherner",
            coordinates: {
                lat: 51.169392,
                lng: 71.449074,
                zoom: 18
            }
        },]
    const onChangeHandler = (id, name, data) => {
        if (name === "point" || name === "clinic") {
            setActiveCoordinates(data.coordinates)
        }
        setValues(prev => ({...prev, [name]: id}))
    }
    const routeHandler = () => {
        navigate("/records/select-doctor")
    }

    return (
        <div className={"h-100"}>
            <div className="row h-100">
                <div className="col-6">
                    <BaseSelect name={"point"}
                                value={values.point}
                                onSelect={onChangeHandler} placeholder={"Выберите город"}
                                options={optionsCountry} addClass={"mb-2"}/>
                    {
                        values.point && <BaseSelect name={"clinic"}
                                                    value={values.clinic}
                                                    onSelect={onChangeHandler} placeholder={"Выберите Клинику"}
                                                    options={optionsClient} addClass={"mb-2"}/>
                    }
                </div>
                <div className="col-6" style={{height: "85%"}}>
                    <div className={"h-100"}>
                        {isLoaded && (
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={activeCoordinates}
                                zoom={activeCoordinates.zoom}
                                defaultCenter={center}
                                defaultZoom={center.zoom}
                                onLoad={onLoad}
                                onUnmount={onUnmount}>
                                {values.clinic &&
                                    <Marker label={"Медцентр"} position={{
                                        lat: activeCoordinates.lat,
                                        lng: activeCoordinates.lng -0.0005
                                    }}/>}
                            </GoogleMap>)}
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center ">
                    <BaseButton disabled={values.clinic} width={35} onClick={routeHandler}>Далее</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default Records;
