export type Point = {
  x: number;
  y: number;
};

export type ScatterDataset = {
  label: string;
  data: Point[];
};

export type ScatterDataSchema = {
  datasets: ScatterDataset[];
};
