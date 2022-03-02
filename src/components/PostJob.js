import { Fab, Box, Modal, Tooltip, ButtonGroup, Button, Stack, TextField, Typography, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { useState } from 'react';
import { DateRange } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

const PostJob = () => {
    const [open,setOpen] = useState(false)
    return (
        <Box>
            <Tooltip onClick={(e)=>setOpen(true)} title="Add" sx={{position:'fixed',top:'90vh',left: {xs: "calc(50% - 10px)", md: 10 }}}>
                <Fab color="primary" aria-label="post job">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center">
                Post a Job
                </Typography>
                <UserBox>
                <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{ width: 30, height: 30 }}
                />
                <Typography fontWeight={500} variant="span">
                John Doe
                </Typography>
                </UserBox>
                <TextField
                sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="Enter job Title"
                variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                {/* <EmojiEmotions color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" /> */}
                </Stack>
                <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button>Post</Button>
                <Button sx={{ width: "100px" }}>
                <DateRange />
                </Button>
          </ButtonGroup>
            </Box>
            </StyledModal>
        </Box>
    );
};

export default PostJob;