export type StackedDoubleBarDataset = {
  label: string;
  data: number[];
  stack: string;
};

export type StackedDoubleBarDataSchema = {
  xTitle: string;
  yTitle: string;
  labels: string[];
  datasets: StackedDoubleBarDataset[];
};
