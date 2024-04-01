import { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Typography,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AddTask = () => {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [formData, setFormData] = useState({
    taskTitle: "",
    description: "",
    date: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // PRIORITY
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  // STATUS
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  // get user details
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  const [user, setUser] = useState({});
  const getUserInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/user/me`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // validate the fileds
    // fileds cant be empty

    if (!status || !priority) {
      console.log("empty");
      return;
    }
    getUserInfo();

    const updatedFormData = {
      ...formData,
      priority: priority,
      status: status,
      user: {
        id: user,
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/task",
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }

    // console.log(updatedFormData);
    setFormData({
      taskTitle: "",
      description: "",
      date: null,
    });
    setPriority("");
    setStatus("");
  };
  // date handle
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };
  return (
    <>
      <Paper sx={{ p: 10 }}>
        <form onSubmit={handleOnSubmit}>
          <Box sx={{ m: 2 }}>
            <Typography variant="h5">Add new Task</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              label="Task title"
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleInputChange}
              size="small"
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              size="small"
              fullWidth
            />
          </Box>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={"completed"}>complete</MenuItem>
                  <MenuItem value={"incomplete"}>incomplete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Priority"
                  onChange={handlePriorityChange}
                >
                  <MenuItem value={"high"}>High</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Due Date"
                name="dueDate"
                value={formData.date}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <Button type="submit" variant="contained" autoFocus>
              Create
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AddTask;
