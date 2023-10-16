export type PieDataset = {
  data: number[];
  label: string;
};

export type PieDataSchema = {
  xTitle: string;
  yTitle: string;
  labels: string[];
  datasets: PieDataset[];
};
