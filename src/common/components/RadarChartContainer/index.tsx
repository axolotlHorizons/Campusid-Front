import React, { useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import styles from './style';
import ButtonCustom from './../ButtonCustom/index';

function RadarChartContainer(props: any) {
    const classes = styles();
    const dataAverage = props.dataAverage;

    const [dataChart, setdataChart] = useState(dataAverage);
    const [chart, setChart] = useState<am4charts.RadarChart>();

    useEffect(() => {
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);

        let chartTmp = am4core.create('chartdiv', am4charts.RadarChart);
        chartTmp.hiddenState.properties.opacity = 0;
        chartTmp.data = dataAverage;

        let categoryAxis = chartTmp.xAxes.push(
            new am4charts.CategoryAxis() as any
        );
        categoryAxis.dataFields.category = 'name';

        let valueAxis = chartTmp.yAxes.push(new am4charts.ValueAxis() as any);
        valueAxis.renderer.axisFills.template.fill = chartTmp.colors.getIndex(
            2
        );
        valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
        valueAxis.renderer.maxLabelPosition = 0.99;

        let series = chartTmp.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = 'average';
        series.dataFields.categoryX = 'name';
        series.name = 'Notes';
        series.strokeWidth = 2;

        chartTmp.cursor = new am4charts.RadarCursor();

        chartTmp.legend = new am4charts.Legend();
        setChart(chartTmp);
    }, []);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default RadarChartContainer;
