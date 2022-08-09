import React from "react";
import "./../style.scss";

const Folder = ({name, tasks}:{name: string, tasks:number }) => {
    return (
        <div className='folder'>
            {name} <span>{tasks}</span>
        </div>
    )
}

export default Folder;