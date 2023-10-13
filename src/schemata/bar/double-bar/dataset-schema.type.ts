export type DoubleBarDataset = {
  label: string;
  data: number[];
};

export type DoubleBarDataSchema = {
  xTitle: string;
  yTitle: string;
  labels: string[];
  datasets: DoubleBarDataset[];
};
