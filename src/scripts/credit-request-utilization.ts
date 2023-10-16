import { faker } from "@faker-js/faker";
import { pushJsonToFile } from "../helpers/push-json-to-file.func";
import { truncFloat } from "../helpers/trunc-float.func";
import {
  StackedDoubleBarDataSchema,
  StackedDoubleBarDataset,
} from "../schemata/bar/stacked-double-bar/dataset-schema.type";

const fileName = "credit-request-utilization";
const label = "Credit Request Utilization";
const datasetUtilized: StackedDoubleBarDataset = {
  label: "Utilized",
  data: [],
  stack: "stack 0",
};
const datasetUnutilized: StackedDoubleBarDataset = {
  label: "Unutilized",
  data: [],
  stack: "stack 0",
};
const datasetPending: StackedDoubleBarDataset = {
  label: "Pending",
  data: [],
  stack: "stack 1",
};

// X-Axis
// Generated Customers
const numCustomers = 10;
const customers: string[] = [];
for (let i = 0; i < numCustomers; i += 1) {
  const customer = faker.company.name();
  customers.push(customer);
}

// Y-Axis
// Generated float amount
for (let i = 0; i < numCustomers; i += 1) {
  const utilized = faker.number.float({ min: 40000, max: 100000 });
  const unutilized = faker.number.float({ min: 0, max: 30000 });
  const pending = faker.number.float({ min: 0, max: 50000 });
  datasetUtilized.data.push(truncFloat(utilized));
  datasetUnutilized.data.push(truncFloat(unutilized));
  datasetPending.data.push(truncFloat(pending));
}

const datasetSchema: StackedDoubleBarDataSchema = {
  xTitle: "Customers",
  yTitle: "Customer Credit",
  labels: customers,
  datasets: [datasetUtilized, datasetUnutilized, datasetPending],
};
pushJsonToFile(`./data/${fileName}.json`, datasetSchema);
