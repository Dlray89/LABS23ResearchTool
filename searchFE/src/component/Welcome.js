import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import Expand from "./expandPanel"

const useStyles = makeStyles({
    root: {
        border: "solid 2px green"
    },
    title: {
        textAlign: "center",
        padding: "4%",
        background: "linear-gradient(to right, #4b6cb7, #182848)",
        color: "White"
    },
    infoContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "2% auto"


    },
    TOC: {
        border: "solid 1px #bdc3c7",
        width: "20%",
        height: "50vh",
        padding: "2%"
    },
    mission: {
        border: "solid 1px #bdc3c7",
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        background: "white",
        color: "white"

    },
    Tools: {
        width: "20%",
        height: "40vh",
        border: "solid 1px #bdc3c7",
        padding: "2%"



    },
    Video: {
        margin: "0 5% 0 0"
    }
})

function Welcome() {
    const classes = useStyles()
    return (
        <div>

            <Typography className={classes.title} variant="h4">
                Mission Control Research Tool
        </Typography>

            <div className={classes.infoContainer}>

                <Typography className={classes.TOC}>
                    <Typography style={{ textAlign: "center" }}>Important Documents</Typography>
                    <ul>
                        <li><a href="https://www.notion.so/The-Labs-Rubrics-64eae46cf3ec43b88e1d4c761698a947">Lab Rubric</a></li>
                        <li><a href="https://www.notion.so/Mission-Control-3d160a20e5374bccaec96576398d54ba">PVD(Product Vision Document)</a></li>
                        <li><a href="https://www.notion.so/e05ae1ae85ba4ac9bcc23087f7db7572?v=55324fde100e48e7a4b77531ec1815a2">Release Canvas</a></li>
                        <li><a href="https://drive.google.com/file/d/1lJdwda5o8OsNoYcwZQ4fovmyM3bVuhdi/view">Architecture Design</a></li>
                        <li><a href="https://drive.google.com/file/d/1lJdwda5o8OsNoYcwZQ4fovmyM3bVuhdi/view">Code Climate Documents</a></li>
                        <li><a href="https://lambda-school-labs.github.io/labs-guides/">Lab Guide</a></li>
                        <li><a href="https://www.notion.so/Mission-Control-Data-Model-165d192d6fb24b6fb51407f6952276ee">MC Data Model</a></li>

                        <li><a href="https://www.notion.so/Competitor-Research-41c82ad87703494284c0f25d050789d7">Competition Research</a></li>
                        <li><a href="https://www.notion.so/User-Research-dbfb303aeb7a4bff92add72564e37a01">User Research</a></li>
                        <li><a href="https://www.notion.so/Technical-Research-535ecb2895064e14a484fe63a56d7cc0">Tech Research</a></li>
                    </ul>
                </Typography>
                <div className={classes.mission}>
                    <iframe className={classes.Video} width="665" height="315" title="Mission" src="https://www.youtube.com/embed/hsK-H76QENw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <Expand />
                    
                </div>
                <div className={classes.Tools}>
                    <Typography>
                        <Typography style={{ textAlign: "center" }}>Tools</Typography>
                        <ul>
                            <li><a href="https://trello.com/b/NCmsFWo6/labs-23-mission-control">Tello Board</a></li>

                            <li><a href="https://github.com/Dlray89/basicsearchwithbackend">Practice Hub</a></li>
                            <li><a href="https://material-ui.com/">Material-UI</a></li>
                            <li><a href="https://lambda-school-labs.github.io/prismadocia/">Prismatopia</a></li>
                            <li><a href="https://stage.missionctrl.dev/">Mission Control-Website</a></li>
                            <li><a href="https://github.com/Lambda-School-Labs/mission-control-be">Mission Control-BE</a></li>

                            <li><a href="https://github.com/Lambda-School-Labs/mission-control-fe">Mission Control-FE</a></li>


                        </ul>
                    </Typography>
                </div>

            </div>


        </div>
    )
}
export default Welcome