import { useState } from "react";
import * as echarts from "echarts";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";

export const CreateChartPage = () => {
  const [chartName, setChartName] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");

  const renderChart = () => {
    const dom = document.getElementById("chart-preview");
    const chart = echarts.init(dom);

    const labelArray = labels.split(",").map((i) => i.trim());
    const valueArray = values.split(",").map((i) => Number(i));

    const option =
      chartType === "pie"
        ? {
            series: [
              {
                type: "pie",
                radius: "60%",
                data: labelArray.map((label, i) => ({
                  name: label,
                  value: valueArray[i],
                })),
              },
            ],
          }
        : {
            xAxis: { data: labelArray },
            yAxis: {},
            series: [{ type: chartType, data: valueArray }],
          };

    chart.setOption(option);
  };

  const saveChart = async () => {
    const response = await fetch("http://127.0.0.1:5000/save-chart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chartName,
        chartType,
        labels: labels.split(",").map((i) => i.trim()),
        values: values.split(",").map((i) => Number(i)),
      }),
    });

    const data = await response.json();
    console.log("Saved chart:", data);
    alert("Chart saved successfully!");
  };

  return (
    <Box padding={3}>
      <h2>Create Your Chart</h2>

      <Box display="flex" flexDirection="column" gap={2} width="350px">
        <TextField
          label="Chart Name"
          value={chartName}
          onChange={(e) => setChartName(e.target.value)}
        />

        <Select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <MenuItem value="bar">Bar</MenuItem>
          <MenuItem value="line">Line</MenuItem>
          <MenuItem value="pie">Pie</MenuItem>
        </Select>

        <TextField
          label="Labels (comma separated)"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
        />

        <TextField
          label="Values (comma separated)"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />

        <Button variant="contained" onClick={renderChart}>
          Render Chart
        </Button>

        <Button variant="contained" onClick={saveChart}>
          Save Chart
        </Button>

      </Box>

      <Box
        id="chart-preview"
        height="400px"
        marginTop={4}
        border="1px solid #ccc"
      />
    </Box>
  );
};
