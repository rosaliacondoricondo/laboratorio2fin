import React, {useEffect, useState} from "react";  
import { CardComponent } from "./CardComponent";
import {createBoard} from "./createBoard";  
import "./styles.css";  
let list = [];
let twice = [];
export const MemoryComponent = () => {
    useEffect(() => {
        list = createBoard (10); 
        setStateBoard(list);
        console.log(list);
    }, []);
    const [stateBoard, setStateBoard] = useState(list);   
    const handlerClick = ({id}) => {
        if(twice.length == 2) {
            twice = [];
        }
        const item = stateBoard.find((item) => item.id === id);
        if (twice.length == 0) {
            twice = [ ...twice, item];
        } 
        else if (twice.length == 1) {
            twice = [ ...twice, item]; 
            const [item1] = twice; 
            if (item1.key !== item.key) {
                console.log("are different"); 
                setTimeout (() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if (item.done === false) {
                            item.state = false;
                            item.styles = "item";
                        }
                        return item;
                    });
                    setStateBoard(newStateBoard);
                }, 1000);
            } 
            else {
                const [item1, item2] = twice;
                const newStateBoard = stateBoard.map ((item)=> {
                    if (item.id === item1.id || item.id === item2.id) {
                        item.done = true;
                        
                    }
                    return item;
                });
                setStateBoard(newStateBoard);

            }
        }
        const newStateBoard = stateBoard.map((item) => {
            if (item.id === id) {
                item.state = true;
                item.styles = "itemColor";
            }
            return item;

        });
        setStateBoard(newStateBoard);
    };
    return (
    <div> 
    <h1> Memory app </h1> 
    <hr /> 
    <div className = "container"> 
    {stateBoard.map ((item) => (
        <CardComponent 
        key={item.id} 
        item={item}
        handlerClick={handlerClick}
        />
    ))} 
    </div> 
    </div>
    );
};