import { Container} from '@mui/material';
import JobLists from '../components/JobLists';

const Jobs = () => {
    return (
        <Container maxWidth="xl" sx={{bgcolor: "#F7FAFF",paddingY:2}}>
                <JobLists />
        </Container>
    );
};

export default Jobs;