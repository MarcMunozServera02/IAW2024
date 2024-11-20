//import {useState} from "react";
import { useImmer } from 'use-immer';




export default function Footer(){

    const initialImmer = {        
        save: false,
        saves:0,
        like: false,
        likes: 0
    };

    const [state, updateState] = useImmer(initialImmer);


    const liked = state.like?"corazon_active":"corazon";
    const saved = state.save?"guardar_active":"guardar";

    function changeLike(){
      updateState(draft => {
          draft.like = !draft.like;
          draft.likes = draft.like?draft.likes+1:draft.likes-1;
        })
    }
    
    function changeSave(){
        updateState(draft => {
            
            draft.save = !draft.save;
            draft.saves = draft.save?draft.saves+1:draft.saves-1;

        })
    }

    return (
      <div className="footer">
        <div className="footer-icons">
        <span className={liked} id="corazon" onClick={changeLike}></span>
          <span className="burbuja" id="b1"></span>
          <span className="enviar" id="e1"></span>
          <div className="guardar-icon-container">
          <span className={saved} id="guardar" onClick={changeSave}></span>
            
          </div>
        </div>
        <div className="caption-container">
        <h4><span>{state.likes}</span> Likes <span>{state.saves}</span> Guardados</h4>

          <div className="caption">
            <h4>Pedro_Terminator</h4>
            <span>
              Hola Estoy muy feliz!!! aprediendo React JS. Mira mi gato.
            </span>
          </div>
        </div>
      </div>
    );
}