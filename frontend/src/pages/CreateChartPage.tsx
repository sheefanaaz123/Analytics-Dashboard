import { useState } from "react";
import * as echarts from "echarts";
import { Box, TextField, Button, Autocomplete } from "@mui/material";
import { API_BASE } from "../api";
import { pxToRem } from "../components/utils";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const CreateChartPage = () => {
  const [chartName, setChartName] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");

  const renderChart = () => {
    const dom = document.getElementById("chart-preview");
    const chart = echarts.init(dom, undefined, {
      width: dom?.clientWidth,
      height: dom?.clientHeight,
    });

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
    const response = await fetch(`${API_BASE}/save-chart`, {
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

  const options = [
    { label: <FiberManualRecordIcon />, value: "bar" },
    { label: "Line", value: "line" },
    { label: "Pie", value: "pie" },
  ];

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
          height: `calc(100vh - ${pxToRem(64)})`,
          padding: pxToRem(16),
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="content"
          gap={2}
          margin="auto 0"
          paddingRight={pxToRem(16)}
        >
          <TextField
            label="Chart Name"
            value={chartName}
            onChange={(e) => setChartName(e.target.value)}
          />

          <Autocomplete
            options={options}
            value={options.find((o) => o.value === chartType) || null}
            onChange={(_, newVal) => setChartType(newVal?.value || "")}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li
                {...props}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                {option.icon}
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Chart Type" />
            )}
          />

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
          marginTop={pxToRem(16)}
          border="1px solid #ccc"
        />
      </div>
    </>
  );
};
