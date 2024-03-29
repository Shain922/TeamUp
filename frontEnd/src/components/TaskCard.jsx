import { Box, Card, Grid, Link, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
const TaskCard = ({ task }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 340,
          p: 1,
          borderRight: `4px solid ${
            task.status === "complete" ? "#5cb85c" : "#ff4545"
          }`,
        }}
      >
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {task.task_title}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {task.description}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {task.date}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            spacing={5}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item>
              <Typography color="text.secondary" gutterBottom>
                <Chip
                  size="small"
                  variant="outlined"
                  label={task.status}
                  color={task.status === "complete" ? "success" : "warning"}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction={"row"} spacing={3}>
                <Grid>
                  <Link sx={{ color: "orange" }}>
                    <DeleteForeverIcon />
                  </Link>
                </Grid>
                <Grid>
                  <Link>
                    <BorderColorIcon />
                  </Link>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default TaskCard;
