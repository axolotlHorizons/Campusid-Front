/* Imports */
import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styles from './style';

function ColumnChartContainer(props: any) {
    const classes = styles();
    let dataAverage = props.dataAverage;
    console.log(dataAverage);

    useEffect(() => {
        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = dataAverage;

        chart.padding(40, 40, 40, 40);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        //valueAxis.rangeChangeEasing = am4core.ease.linear;
        //valueAxis.rangeChangeDuration = 1500;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "name";
        series.dataFields.valueY = "average";
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        //series.interpolationDuration = 1500;
        //series.interpolationEasing = am4core.ease.linear;
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

        chart.zoomOutButton.disabled = true;

        series.columns.template.adapter.add("fill", function (fill, target) {
            console.log(target.dataItem);
            if(target.dataItem !== undefined)
                return chart.colors.getIndex(target.dataItem.index);
        });

        setInterval(function () {
        am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
        })
        chart.invalidateRawData();
        }, 2000)

        categoryAxis.sortBySeries = series;

    }, [dataAverage]);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default ColumnChartContainer;
