
import { Cover } from "@/components/every-layout-components/Cover";
import { createFileRoute } from "@tanstack/react-router";
import ReactECharts from "echarts-for-react";
import { useRef } from "react";
import { mockChartTimeSeriesValues } from "../../lib/mock";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	const chartWrapper = useRef<HTMLDivElement>(null);
	console.log({ mockChartTimeSeriesValues });
	const colors = ["#5470C6", "#91CC75", "#EE6666"];

	const options = {
		color: colors,
		// renderer: "canvas",

		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
			},
		},
		grid: {
			right: "20%",
		},
		toolbox: {
			feature: {
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true },
				dataZoom: {
					yAxisIndex: "none",
				},
			},
		},
		dataZoom: [
			{
				type: "inside",
				start: 5,
				end: 10,
			},
			{
				type: "slider",
				start: 5,
				end: 10,
			},
		],
		legend: {
			data: [
				mockChartTimeSeriesValues.buckets[0].dataPointName,
				mockChartTimeSeriesValues.buckets[1].dataPointName,
				mockChartTimeSeriesValues.buckets[2].dataPointName,
			],
		},
		xAxis: [
			{
				type: "category",
				axisTick: {
					alignWithLabel: true,
				},
				data: mockChartTimeSeriesValues.buckets[0].values.map((value) =>
					new Date(value.timestamp).toLocaleString(),
				),
			},
		],
		yAxis: [
			{
				type: "value",
				name: mockChartTimeSeriesValues.buckets[0].dataPointName,
				position: "right",
				alignTicks: true,
				axisLine: {
					show: true,
					lineStyle: {
						color: colors[0],
					},
				},
				axisLabel: {
					formatter: "{value} °C",
				},
			},
			{
				type: "value",
				name: mockChartTimeSeriesValues.buckets[1].dataPointName,
				position: "right",
				alignTicks: true,
				offset: 80,
				axisLine: {
					show: true,
					lineStyle: {
						color: colors[1],
					},
				},
				axisLabel: {
					formatter: "{value} BAR",
				},
			},
			{
				type: "value",
				name: mockChartTimeSeriesValues.buckets[2].dataPointName,
				position: "left",
				alignTicks: true,
				axisLine: {
					show: true,
					lineStyle: {
						color: colors[2],
					},
				},
				axisLabel: {
					formatter: "{value} KW",
				},
			},
		],
		series: [
			{
				name: mockChartTimeSeriesValues.buckets[0].dataPointName,
				type: "line",
				data: mockChartTimeSeriesValues.buckets[0].values.map(
					(value) => value.value,
				),
			},
			{
				name: mockChartTimeSeriesValues.buckets[1].dataPointName,
				type: "line",
				yAxisIndex: 1,
				data: mockChartTimeSeriesValues.buckets[1].values.map(
					(value) => value.value,
				),
			},
			{
				name: mockChartTimeSeriesValues.buckets[2].dataPointName,
				type: "line",
				yAxisIndex: 2,
				data: mockChartTimeSeriesValues.buckets[2].values.map(
					(value) => value.value,
				),
			},
		],
	};

	return (
		<Cover className="flex-grow" minHeight="100%">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<div className="h-3/4" ref={chartWrapper}>
				<ReactECharts option={options} style={{ height: "100%" }} />
			</div>
		</Cover>
	);
}

export default RouteComponent;
