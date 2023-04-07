import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const data = [
    {
        label: "Group 1",
        "0": 0,
        "25": 8.3,
        "50": 4.8,
        "75": 8.7,
        "100": 36.1,
        "125": 29.6,
        "150": 8.3,
        "200": 3.9,
        "> 200": 0.4,
    },
    {
        label: "Group 2",
        "0": 0,
        "25": 4,
        "50": 12.1,
        "75": 18.8,
        "100": 25.9,
        "125": 21.4,
        "150": 12.1,
        "200": 4,
        "> 200": 1.8,
    },
    {
        label: "Group 3",
        "0": 0,
        "25": 4.6,
        "50": 14.2,
        "75": 20.2,
        "100": 22.9,
        "125": 17.4,
        "150": 9.6,
        "200": 6,
        "> 200": 5,
    },
    {
        label: "Group 4",
        "0": 0,
        "25": 6.2,
        "50": 19.1,
        "75": 19.1,
        "100": 17.2,
        "125": 17.7,
        "150": 10,
        "200": 5.3,
        "> 200": 5.3,
    },
    {
        label: "Group 5",
        "0": 5.6,
        "25": 9.4,
        "50": 16.9,
        "75": 13.6,
        "100": 14.1,
        "125": 19.2,
        "150": 13.1,
        "200": 3.8,
        "> 200": 4.2,
    },
    {
        label: "Group 6",
        "0": 6.1,
        "25": 7.5,
        "50": 19.2,
        "75": 15.5,
        "100": 17.8,
        "125": 12.7,
        "150": 11.3,
        "200": 6.6,
        "> 200": 3.3,
    },
    {
        label: "Group 7",
        "0": 3.4,
        "25": 8.9,
        "50": 20.7,
        "75": 17.7,
        "100": 15.8,
        "125": 13.8,
        "150": 11.8,
        "200": 4.4,
        "> 200": 3.4,
    },
    {
        label: "Group 8",
        "0": 6.4,
        "25": 11.3,
        "50": 22.7,
        "75": 14.8,
        "100": 20.2,
        "125": 11.8,
        "150": 4.9,
        "200": 5.9,
        "> 200": 2,
    },
    {
        label: "Group 9",
        "0": 8.5,
        "25": 18.6,
        "50": 22.6,
        "75": 15.6,
        "100": 14.1,
        "125": 7,
        "150": 4.5,
        "200": 6,
        "> 200": 3,
    },
    {
        label: "Group 10",
        "0": 11.1,
        "25": 30,
        "50": 21.3,
        "75": 20.3,
        "100": 5.8,
        "125": 3.9,
        "150": 2.9,
        "200": 2.9,
        "> 200": 1.9,
    },
    {
        label: "Group 11",
        "0": 18.6,
        "25": 46.2,
        "50": 15.6,
        "75": 10.1,
        "100": 2.5,
        "125": 2.5,
        "150": 2.5,
        "200": 0.5,
        "> 200": 1.5,
    },
    {
        label: "Group 12",
        "0": 17.2,
        "25": 55.1,
        "50": 14.1,
        "75": 7.1,
        "100": 2.5,
        "125": 2,
        "150": 0.5,
        "200": 1,
        "> 200": 0.5,
    },
    {
        label: "Group 13",
        "0": 23.4,
        "25": 58.7,
        "50": 10,
        "75": 3.5,
        "100": 1,
        "125": 1.5,
        "150": 0.5,
        "200": 1.5,
        "> 200": 0,
    },
    {
        label: "Group 14",
        "0": 27.1,
        "25": 62,
        "50": 7.3,
        "75": 1,
        "100": 0,
        "125": 0.5,
        "150": 0,
        "200": 1.6,
        "> 200": 0.5,
    },
    {
        label: "Group 15",
        "0": 29.5,
        "25": 61.6,
        "50": 5.3,
        "75": 1.1,
        "100": 0.5,
        "125": 0,
        "150": 0.5,
        "200": 1.1,
        "> 200": 0.5,
    },
    {
        label: "Group 16",
        "0": 39.4,
        "25": 55.4,
        "50": 2.3,
        "75": 0,
        "100": 1.1,
        "125": 0,
        "150": 0,
        "200": 1.1,
        "> 200": 0.6,
    },
    {
        label: "Group 17",
        "0": 39.2,
        "25": 56.1,
        "50": 1.8,
        "75": 0,
        "100": 1.2,
        "125": 0,
        "150": 0,
        "200": 0,
        "> 200": 1.8,
    }





];

const HardcodedColorsStackedBarChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      am4core.useTheme(am4themes_animated);
  
      const chart = am4core.create(chartRef.current, am4charts.XYChart);
      chart.data = data;
  
      // Create axes
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "label";
      categoryAxis.renderer.grid.template.location = 0;
  
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.renderer.labels.template.adapter.add("text", (text) => `${text}%`);
  
      // Create series
      const createSeries = (field, name, color) => {
        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "label";
        series.name = name;
 series.columns.template.tooltipText = `{categoryX}:\n{valueY}%`;        series.columns.template.width = am4core.percent(50);
        series.columns.template.fill = color;
        series.columns.template.stroke = color;
        series.stacked = true;
  
        // Set x-axis label for each bar
        series.columns.template.adapter.add("text", (text, target) => {
          const category = target.dataItem.categoryX;
          return `${category}: /n ${text}%`;
        });
  
        // Calculate data points to ensure bars reach 100%
        series.dataItems.template.adapter.add("valueY", (value, target) => {
          const itemValue = value || 0; // Handle null or undefined values
          const stackedValue =
            target.dataItem && target.dataItem.values.valueY.previousChange;
          const diff = 100 - stackedValue;
          return itemValue + diff;
        });
      };
  
      createSeries("0", "0% (Not visible)", am4core.color("#000000"));
      createSeries("25", ">0-25%", am4core.color("#1f77b4"));
      createSeries("50", "26-50%", am4core.color("#2ca02c"));
      createSeries("75", "51-75%", am4core.color("#008000"));
      createSeries("100", "76-100%", am4core.color("#ffff00"));
      createSeries("125", "101-125%", am4core.color("#ffd700"));
      createSeries("150", "126-150%", am4core.color("#ffa500"));
      createSeries("200", "151-200%", am4core.color("#ff0000"));
      createSeries("> 200", "> 200%", am4core.color("#ff0000"));
  
      // Add legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = "right";
      chart.legend.scrollable = true;
      chart.legend.titleElement.text = "% of the initial size";
  
      return () => {
        chart.dispose();
      };
    }, []);
  
    return <div ref={chartRef} style={{ width: "100%", height: "700px" }} />;
  };
  
  export default HardcodedColorsStackedBarChart;
  
  