export type Point = {
  x: number | string;
  y: number | string;
};

export type ScatterDataset = {
  label: string;
  data: Point[];
};

export type ScatterDataSchema = {
  xTitle: string;
  yTitle: string;
  xLabels: string[];
  yLabels: string[];
  datasets: ScatterDataset[];
};
