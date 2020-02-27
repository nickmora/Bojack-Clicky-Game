import React from 'react';
import { Card, Grid, Grow } from "@material-ui/core"

const Pic = (props) => {
    const [clicked, setClicked] = React.useState(false)
    // React.useEffect(() => {
    //     props.shuffle();
    // }, [clicked, props])

    const handleClick = () => {
        if (!clicked) {
            // console.log(`Yup, you clicked it, my key is ${props.id}`)
            setClicked(true);
            props.increment();
            props.shuffle();
        }
        else {
            // alert("GAME OVER!")
            props.reset()
        }
    }
    return (
        <Grow in={true}>
            <Grid sm={3} item md={3} lg={3}>
                <Card
                    onClick={handleClick}
                >
                    <img
                        className="dickpic"
                        src={props.path}
                        alt={`Id ${props.id}`}
                    />
                </Card>
            </Grid>
        </Grow>
    );
}

export default Pic;