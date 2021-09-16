import LogicGame from "./LogicGame";

class twoCard extends LogicGame {
    process(twice, item, stateBoard, setStateBoard) {
        if (twice.length == 1) {
            twice = [ ...twice, item]; 
            const [item1] = twice; 
            if (item1.key !== item.key) {
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
                
        
            } else {
                this.mext.process(twice, item,stateBoard, setStateBoard);

            }
        }
    }
}