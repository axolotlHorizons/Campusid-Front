import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styles from './style';

function GraphsContainer(props : any) {
    const classes = styles();
    let dataAverage = props.dataAverage;
    console.log(dataAverage);
    
    useEffect(() => {

        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = dataAverage;

        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "average";
        series.dataFields.radiusValue = "average";
        series.dataFields.category = "name";
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;

        series.hiddenState.properties.endAngle = -90;

        chart.legend = new am4charts.Legend();

    }, [dataAverage]);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default GraphsContainer;
