import LogicGame from "./LogicGame";

class OneCard extends LogicGame {
    process(twice, item, stateBoard, setStateBoard) {
        if (twice.length == 0) {
            twice = [ ...twice, item];
        } 
        else {
            trhis.nest.process(twice, item, stateBoard, setStateBoard);
        }
    }
}