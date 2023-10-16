import { faker } from "@faker-js/faker";
import { pushJsonToFile } from "../helpers/push-json-to-file.func";
import { truncFloat } from "../helpers/trunc-float.func";
import { PieDataSchema, PieDataset } from "../schemata/pie/dataset-schema";

const fileName = "customer-portfolio-portions";
const label = "Customer Portfolio Portions";

// X-Axis
// Generate Customers
const customers: string[] = [];
for (let i = 0; i < 6; i += 1) {
  customers.push(faker.company.name());
}

// Y-Axis
// Generate float numbers
const amounts: number[] = [];
const len: number = customers.length;
for (let i = 0; i < len; i += 1) {
  amounts.push(truncFloat(faker.number.float({ min: 0, max: 50000 })));
}
const dataset: PieDataset = {
  label: "Customer Portfolio",
  data: amounts,
};

const pieSchema: PieDataSchema = {
  xTitle: "Portion Amounts",
  yTitle: "Customers",
  labels: customers,
  datasets: [dataset],
};
pushJsonToFile(`./data/${fileName}.json`, pieSchema);
