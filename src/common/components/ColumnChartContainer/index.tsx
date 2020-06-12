/* Imports */
import React, { useEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styles from './style';
import ButtonCustom from './../ButtonCustom/index';

function ColumnChartContainer(props: any) {
    const classes = styles();
    const dataAverage = props.dataAverage;

    const [dataChart, setdataChart] = useState(dataAverage);
    const [categoryName, setcategoryName] = useState('name');
    const [value, setValue] = useState('average');
    const [chart, setChart] = useState<am4charts.XYChart>();


    useEffect(() => {
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);

        let chartTmp = am4core.create("chartdiv", am4charts.XYChart);
        chartTmp.padding(40, 40, 40, 40);

        chartTmp.hiddenState.properties.opacity = 0;
        chartTmp.data = dataAverage;

        let categoryAxis = chartTmp.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 10;
        categoryAxis.dataFields.category = categoryName;
        categoryAxis.renderer.minGridDistance = 10;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chartTmp.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        let series = chartTmp.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = categoryName;
        series.dataFields.valueX = value;
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = -10;
        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
        labelBullet.locationX = 0.0009;

        series.columns.template.adapter.add("fill", function (fill, target) {
            if(target.dataItem !== undefined)
                return chartTmp.colors.getIndex(target.dataItem.index);
        });

        setInterval(function () {
        am4core.array.each(chartTmp.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
        })
        chartTmp.invalidateRawData();
        }, 2000)

        categoryAxis.sortBySeries = series;

        setChart(chartTmp);

    }, []);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default ColumnChartContainer;
