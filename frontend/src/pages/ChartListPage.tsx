import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

export const ChartListPage = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/charts")
      .then((res) => res.json())
      .then((data) => setCharts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box padding={3}>
      <Typography variant="h4" marginBottom={3}>
        Saved Charts
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {charts.length === 0 && <p>No charts saved yet.</p>}

        {charts.map((chart) => (
          <Card key={chart.id} variant="outlined">
            <CardContent>

              <Typography variant="h6">{chart.chartName}</Typography>

              <Typography variant="body2" color="text.secondary">
                Type: {chart.chartType}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Created: {new Date(chart.createdAt).toLocaleString()}
              </Typography>

              <Button
                variant="contained"
                sx={{ marginTop: 1 }}
                onClick={() => {
                  // Navigate to a detailed chart page later
                  alert("Open full chart view coming soon!");
                }}
              >
                View Chart
              </Button>

            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
