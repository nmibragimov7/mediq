import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import AnalyzCard from "../../components/core/AnalyzCard/AnalyzCard"
import {analyzes} from "../../store/getters/getters"
import {setSelectedDoctor} from "../../store/doctors/actions"
import BaseModal from "../../components/base/BaseModal/BaseModal"
import s from "./style.module.scss"
// Страница анализы
const Analyzes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector(analyzes)
    const [isMShowed, setIsMShowed] = useState(false)
    const videoMeRef = useRef()
    const videoFriendRef = useRef()
    const toggleModal = () => {
        setIsMShowed(prev => !isMShowed)
    }
    const book = (item) => {
        navigate("/records/new-record")
        dispatch(setSelectedDoctor({
            name: item.doctor,
            position: item.position
        }))
    }

    useEffect(async () => {
        if (isMShowed) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        width: 600,
                        height: 340
                    }
                })
                videoMeRef.current.srcObject = stream
                videoMeRef.current.play()
                videoFriendRef.current.play()
            } catch (e) {
                toast.warn("Необходимо открыть доступ к камере", {
                    position: "top-center"
                })
            }
        } else {
            videoFriendRef.current.pause()
        }
    }, [isMShowed])

    return (
        <div>
            <div className={"h-100 d-flex flex-column"}>
                {items.length &&
                    items.map(item => {
                        return (
                            <AnalyzCard key={item.id} item={item} book={book} toggleModal={toggleModal}/>
                        )
                    })
                }
            </div>
            <BaseModal isShowed={isMShowed} classes={s.analyzesModal} onClose={toggleModal}>
                <div className={`row`}>
                    <div className="col-12 d-flex justify-content-end">
                        <div onClick={toggleModal} className={s.analyzesendCallI}>
                            <img className={"w-100"} src="images/end-call.svg"/>
                        </div>
                    </div>
                    <div className={"col-6"}>
                        <h3 className={"mb-2"}>Вы</h3>
                        <video width={"100%"} ref={videoMeRef}></video>

                    </div>
                    <div className={"col-6"}>
                        <h3 className={"mb-2"}>Собеседник</h3>
                        <video type="video/mp4" ref={videoFriendRef} src="example.mp4" width={"100%"}></video>
                    </div>
                </div>
            </BaseModal>
        </div>
    );
};

export default Analyzes;
