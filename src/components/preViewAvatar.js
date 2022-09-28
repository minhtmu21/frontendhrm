import { useState, useEffect } from "react"

function PreViewAvatar(){
    const [avatar, setAvatar] = useState()
    
    const handleChangeAvatar = (e) =>{
        //check có file truyền vào không
        if (e.target.files.length > 0){
            const file = e.target.files[0]
            file.preView = URL.createObjectURL(file) 
            setAvatar(file)
        } else setAvatar(undefined)
    } 

    useEffect(()=>{
        //clear avatar old
        return () => {
            avatar && URL.revokeObjectURL(avatar.preView)
            console.log("clear")
        }
    },[avatar])

    return (
        <div className="container">
            <input 
                type="file"
                onChange={handleChangeAvatar}
            />
            {avatar && (
                <img 
                    src={avatar.preView} 
                    alt="avatarView"
                    style={{width: "50%"}}
                />
                )
            }
        </div>
    )
}

export default PreViewAvatar