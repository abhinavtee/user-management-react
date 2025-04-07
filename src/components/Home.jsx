import { Typography, Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  background-color: silver;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Content = styled(Box)`
  text-align: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.85); 
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <Container>
      <Content>
        <Typography variant="h3" gutterBottom>
          Welcome to the User Management App
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Easily manage users: Add, View, Edit, and Delete.
        </Typography>
        <StyledButton variant="contained" component={Link} to="/add">
          Get Started
        </StyledButton>
      </Content>
    </Container>
  );
};

export default Home;
