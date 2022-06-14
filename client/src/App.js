import React from "react";
import Tasks from "./Task";
import { Paper, TextField } from "@mui/material";
import { Checkbox, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";
import fooji from './fooji.png';


class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            
            <div className="App flex">
                <Paper elevation={8} className="container">
                    <div className="heading"><img src={fooji} alt="Logo" style={{ height: "60px", width: "60px" }} /><br /> MY TO-DO LIST</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="standard"
                            size="small"
                            style={{ width: "75%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Enter New Task"
                        />
                        <Button
                            style={{ height: "40px", width: "25%" }}
                            color="primary"
                            variant="contained" endIcon={<SendIcon />}
                            type="submit"
                            className="btn"
                        >
                            Add Task
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>                               

                                <IconButton aria-label="delete" onClick={() => this.handleDelete(task._id)}
                                    color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;