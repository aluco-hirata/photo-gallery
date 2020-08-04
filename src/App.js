import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeButton from './comps/ThemeButton';
import { useSelector } from 'react-redux';
import SignIn from './comps/SignIn';





const App = () => {
    const [selectedImg, setSelectedImg] = useState(null)
    const theme = useSelector(state => state.theme)

    return (
        <motion.div className={
            theme ? "App dark"
            : "App light"
        }
            // style={{
            //     background: theme ? "linear-gradient(to top, #125c9c, #0a3255)" : "white",
            //     color: theme ? "white" : "#125c9c",
            // }}
            
        >
            <ThemeButton />
            <SignIn />
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            <AnimatePresence>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            </AnimatePresence>
        </motion.div>
    );
}

export default App;
