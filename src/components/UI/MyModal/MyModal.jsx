import React from "react";
import myModalStyle from "./MyModal.module.css"

export const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [myModalStyle.myModal]
    if(visible){
        rootClasses.push(myModalStyle.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={myModalStyle.myModalContent} onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}