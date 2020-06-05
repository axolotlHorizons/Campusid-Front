import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import styles from './style';

function RadarChartContainer(props: any) {
    const classes = styles();
    let dataAverage = props.dataAverage;
    console.log(dataAverage);

    useEffect(() => {
        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create('chartdiv', am4charts.RadarChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = dataAverage;

        let categoryAxis = chart.xAxes.push(
            new am4charts.CategoryAxis() as any
        );
        categoryAxis.dataFields.category = 'name';

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
        valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
        valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
        valueAxis.renderer.maxLabelPosition = 0.99;

        /* Create and configure series */
        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = 'average';
        series.dataFields.categoryX = 'name';
        series.name = 'Notes';
        series.strokeWidth = 2;

        /* Add cursor */
        chart.cursor = new am4charts.RadarCursor();

        chart.legend = new am4charts.Legend();
    }, [dataAverage]);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default RadarChartContainer;
