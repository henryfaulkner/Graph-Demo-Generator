export type DoubleBarDataset = {
  label: string;
  data;
};

export type DoubleBarDataSchema = {
  labels: string[];
  datasets: DoubleBarDataset[];
};
