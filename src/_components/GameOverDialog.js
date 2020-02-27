import React from 'react';
import { Dialog, Button, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    dialog: {
        padding: "25px",
    },
    button:{
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        color: "white"
    }
})
const GameOverDialog = (props) => {
    const classes = useStyles();
    const { open, onClose } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <div className = {classes.dialog}>
                <DialogTitle id="dialog-title">
                    {"Game Over"}
                </DialogTitle>
                <DialogContent >
                    <DialogContentText id="dialog-description">
                        Your score was {props.score}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant = "contained" className = {classes.button}>
                        Click Here to Play Again
                </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}

export default GameOverDialog;