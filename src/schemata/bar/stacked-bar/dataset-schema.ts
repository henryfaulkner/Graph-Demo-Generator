export type StackedBarDataset = {
  label: string;
  data: number[];
  stack: string;
};

export type StackedBarDataSchema = {
  xTitle: string;
  yTitle: string;
  labels: string[];
  datasets: StackedBarDataset[];
};
