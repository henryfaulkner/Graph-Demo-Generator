import { faker } from "@faker-js/faker";
import { pushJsonToFile } from "../helpers/push-json-to-file.func";
import { truncFloat } from "../helpers/trunc-float.func";
import {
  DoubleBarDataSchema,
  DoubleBarDataset,
} from "../schemata/bar/double-bar/dataset-schema.type";

const fileName = "nowaccount-difference";
const label = "The NowAccount Difference";
const datasetFactoring: DoubleBarDataset = { label: "Factoring", data: [] };
const datasetNowAccount: DoubleBarDataset = { label: "NowAccount", data: [] };

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
// format on frontend
for (let i = 0; i < numCustomers; i += 1) {
  const fakeAmount = faker.number.float({ min: 0, max: 10000000 });
  const fakeFactorLoss = faker.number.float({ min: 0.6, max: 0.9 });
  datasetFactoring.data.push(truncFloat(fakeAmount * fakeFactorLoss));
  datasetNowAccount.data.push(truncFloat(fakeAmount));
}

const datasetSchema: DoubleBarDataSchema = {
  xTitle: "Customers",
  yTitle: "Lifetime Invoicing",
  labels: customers,
  datasets: [datasetNowAccount, datasetFactoring],
};
pushJsonToFile(`./data/${fileName}.json`, datasetSchema);
