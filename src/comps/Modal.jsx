import React from 'react'
import { motion } from 'framer-motion'


const Modal = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null)
        }
    }

    return (
        <motion.div
            key="modal"
            className="backdrop"
            onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0 }}
        >
            <motion.img src={selectedImg} alt="uploaded picture"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 0.2}}
            />
        </motion.div>
    )
}

export default Modal
