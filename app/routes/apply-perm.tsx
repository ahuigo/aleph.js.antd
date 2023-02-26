import { Button, Select } from "https://esm.sh/antd?bundle";
//import "../assets/antd.css";
// import { Button, Select } from "https://esm.sh/v92/antd@4.22.7/es2022/antd.development.bundle.js";
// import ReactDOM from 'react-dom'
import Form, { Field } from "../antx/field-form/index.tsx";

const Input = ({ value = "", ...props }) => <input value={value} {...props} />;

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

export default function Index() {
  return (
    <div>
      <link href="http://localhost:3000/assets/antd.css" rel="stylesheet" />
      <Button className="bg-red" type="primary">this is button</Button>
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>

      <hr />

      <Form
        onFinish={(values) => {
          console.log("Finish:", values);
        }}
      >
        <Field name="username">
          <Input placeholder="Username" data-lpignore="true" />
        </Field>
        <Field name="password">
          <Input placeholder="Password" data-lpignore="true" />
        </Field>
        <button className="bg-red">Submit</button>
      </Form>
    </div>
  );
}
