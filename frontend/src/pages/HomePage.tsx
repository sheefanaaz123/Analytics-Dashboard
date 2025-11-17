import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { styled, Box, Typography, Card, Button } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import InsightsIcon from '@mui/icons-material/Insights';
import { pxToRem } from "../components/utils";

const HomeWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: pxToRem(32),
  padding: pxToRem(32),
}));

const ActionCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: pxToRem(24),
  minWidth: pxToRem(220),
  maxWidth: pxToRem(280),
  gap: pxToRem(12),
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    transform: "translateY(-4px)",
  },
}));

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header/>

      <HomeWrapper>
        <Box textAlign="center" maxWidth={pxToRem(600)}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Analytics Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Create, visualize, and manage charts with ease. Whether you’re tracking
            sales, website traffic, or custom datasets, this dashboard empowers
            you to gain insights in a few clicks.
          </Typography>
        </Box>

        <Box display="flex" gap={pxToRem(24)} flexWrap="wrap" justifyContent="center">
          <ActionCard onClick={() => navigate("/charts")}>
            <BarChartIcon fontSize="large" color="primary" />
            <Typography variant="h6">View Charts</Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Browse all your saved charts and gain insights from historical data.
            </Typography>
            <Button variant="contained" size="small" sx={{ mt: 1 }}>
              Go to Charts
            </Button>
          </ActionCard>

          <ActionCard onClick={() => navigate("/create-chart")}>
            <AddchartIcon fontSize="large" color="primary" />
            <Typography variant="h6">Create Chart</Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Build new charts from your own data. Choose chart types, labels, and
              values to visualize trends instantly.
            </Typography>
            <Button variant="contained" size="small" sx={{ mt: 1 }}>
              Create Now
            </Button>
          </ActionCard>

          <ActionCard>
            <InsightsIcon fontSize="large" color="primary" />
            <Typography variant="h6">Create Dashboard</Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Combine multiple charts into custom dashboards. Arrange, resize, and configure
              widgets to visualize your data in one place.
            </Typography>
            <Button variant="contained" size="small" sx={{ mt: 1 }} disabled>
              Coming Soon
            </Button>
          </ActionCard>
        </Box>
      </HomeWrapper>
    </>
  );
};
