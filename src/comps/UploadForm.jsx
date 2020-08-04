import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import { useSelector } from 'react-redux'




const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const auth = useSelector(state => state.auth)

    const types = ["image/png", "image/jpeg"]

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError("")
        }else{
            setFile(null)
            setError("jpegかpngの画像ファイルを選択してください")
        }
    }

    if(auth.isSignedIn){
        return (
            <form>
                <label>
                    <input
                    type="file"
                    onChange={changeHandler}
                    />
                    <span>+</span>
                </label>

                <div className="output">
                    { error && <div className="error">{ error }</div>}
                    { file && <div className="file">{ file.name }</div>}
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
            </form>
        )
    }else{
        return null
    }
}

export default UploadForm
