export const mockDetailedChartDataLogger = {
	id: "id_123",
	title: "aroTHERM plus",
	startDate: "2025-05-07T09:21:27.684Z", //(date-time),
	endDate: "2025-05-20T15:34:27.684Z", //(date-time),
	interval: "ONE_MINUTE", //(ONE_MINUTE, FIVE_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES, ONE_HOUR, TWO_HOURS, FOUR_HOURS, EIGHT_HOURS, TWELVE_HOURS, ONE_DAY)
	dataPoints: [
		{
			id: "bucket_1",
			title: "Temperature",
			unit: "DEGREE_CELSIUS",
		},
		{
			id: "bucket_2",
			title: "Pressure",
			unit: "BAR",
		},
		{
			id: "bucket_3",
			title: "Flow Rate",
			unit: "LITER_PER_MIN",
		},
		{
			id: "bucket_4",
			title: "Energy Consumption",
			unit: "KILOWATT",
		},
		{
			id: "bucket_5",
			title: "Efficiency",
			unit: "PERCENT",
		},
	],
	state: "RUNNING", //(PLANNED, WAIT_FOR_START, RUNNING, WAIT_FOR_FINISH, FINISHED, FAILED, TIMEOUT, UNKNOWN)
};

function generateValues(
	start: number,
	end: number,
	current: number,
	baseValue: number,
	step: number,
	unit: string,
	intervalMs: number,
	minValue: number,
	maxValue: number,
): { timestamp: string; value: number }[] {
	const lastTimestamp = Math.min(current, end);
	const count = Math.floor((lastTimestamp - start) / intervalMs) + 1;
	return Array.from({ length: count }, (_, i) => {
		// Generate a random value between minValue and maxValue
		const rawValue = minValue + Math.random() * (maxValue - minValue);
		const value = Number.parseFloat(
			rawValue.toFixed(unit === "PERCENT" ? 0 : 1),
		);
		return {
			timestamp: new Date(start + i * intervalMs).toISOString(),
			value,
		};
	});
}

const baseTimestamp = new Date("2025-05-07T09:21:27.684Z").getTime();
const currentTimestamp = new Date("2025-06-19T11:34:27.684Z").getTime();
const endTimestamp = new Date("2025-06-20T15:34:27.684Z").getTime();

export const mockChartTimeSeriesValues = {
	buckets: [
		{
			id: "bucket_1",
			dataPointName: "Temperature",
			values: generateValues(
				baseTimestamp,
				endTimestamp,
				currentTimestamp,
				22.5,
				0.5,
				"DEGREE_CELSIUS",
				60000,
				20,
				30,
			),
			unit: "DEGREE_CELSIUS",
			ranges: { min_value: 20, max_value: 30 },
		},
		{
			id: "bucket_2",
			dataPointName: "Pressure",
			values: generateValues(
				baseTimestamp,
				endTimestamp,
				currentTimestamp,
				1.2,
				0.01,
				"BAR",
				60000,
				1,
				2,
			),
			unit: "BAR",
			ranges: { min_value: 1, max_value: 2 },
		},
		{
			id: "bucket_3",
			dataPointName: "Flow Rate",
			values: generateValues(
				baseTimestamp,
				endTimestamp,
				currentTimestamp,
				15,
				0.2,
				"LITER_PER_MIN",
				60000,
				10,
				20,
			),
			unit: "LITER_PER_MIN",
			ranges: { min_value: 10, max_value: 20 },
		},
		{
			id: "bucket_4",
			dataPointName: "Energy Consumption",
			values: generateValues(
				baseTimestamp,
				endTimestamp,
				currentTimestamp,
				5.5,
				0.05,
				"KILOWATT",
				60000,
				5,
				10,
			),
			unit: "KILOWATT",
			ranges: { min_value: 5, max_value: 10 },
		},
		{
			id: "bucket_5",
			dataPointName: "Efficiency",
			values: generateValues(
				baseTimestamp,
				endTimestamp,
				currentTimestamp,
				85,
				0.2,
				"PERCENT",
				60000,
				80,
				100,
			),
			unit: "PERCENT",
			ranges: { min_value: 80, max_value: 100 },
		},
	],
	_links: { self: { href: "/api/v1/data-logger/aroTHERM-plus/buckets" } },
};
