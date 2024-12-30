
import style from "../styles/Modal.module.css"
import Image from "next/image";


/**
 * 
 * @param {*} param0 
 * @returns 
 */


export default function Modal ({ mData,  onClose }) {

    return (
      <div className={style.backdropStyle} onClick={onClose}>
        <div className={style.modalStyle} onClick={(e) => e.stopPropagation()}>
          <div>
            <button onClick={onClose}>X</button>
          </div>
          <div className={style.contentDiv}>
            <h2>{mData.name}</h2>
            <Image src={mData.imageLink} width="1920" height="500"/>
            {mData.description.map((x, i) => {
              if (x.type == "text"){
                return (<p>{x.details}</p>)
              } else if(x.type == "image"){
                return (<Image src={x.details} width="1920" height="500"/>)
              } else if(x.type == "header"){
                return (<h3>{x.details}</h3>)
              }
            })}
          </div>
        </div>
      </div>
    );
  };
