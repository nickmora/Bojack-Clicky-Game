import React from 'react';
import { Grid } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import Pic from "./Pic";
import GameOverDialog from "./GameOverDialog";
const imgs = [require("../imgs/0.jpg"), require("../imgs/1.jpg"), require("../imgs/2.jpg"), require("../imgs/3.jpg"), require("../imgs/4.jpg"), require("../imgs/5.jpg"), require("../imgs/6.jpg"), require("../imgs/7.jpg"), require("../imgs/8.jpg"), require("../imgs/9.jpg"), require("../imgs/10.jpg"), require("../imgs/11.jpg")]

const GameContainer = (props) => {
    const generatePics = props.shuffle(imgs).map(img => ({ key: uuid(), img }))
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [pics, setPics] = React.useState(generatePics)
    const rearrange = () => setPics(props.shuffle(pics))
    const resetGame = () => {
        handleClose();
        setPics(generatePics);
        props.resetScore();
    }
    // React.useEffect(() => {
    //     console.log(pics)
    // }, [pics])
    return (
        <div>
            <Grid container spacing={2}>
                {pics ? pics.map(pic => {
                    return (
                        <Pic
                            path={pic.img}
                            shuffle={rearrange}
                            key={pic.key} id={pic.key}
                            increment={props.increment}
                            reset={handleOpen}
                        />
                    )
                })

                    :
                    <p>
                        error
                </p>
                }
            </Grid>
            <GameOverDialog open={open} onClose={resetGame} score={props.score} />
        </div>
    );
}

export default GameContainer;