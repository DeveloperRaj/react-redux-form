import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { form } from "../actions";
import {
  Button,
  TextField,
  Radio,
  TextareaAutosize,
  Select,
  MenuItem,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const validationSchema = Yup.object({
  title: Yup.string("Enter the title").required("Required"),
  item: Yup.string("Select the item").required("Required"),
  sku: Yup.string("Enter the sku").required("Required"),
  size: Yup.number("Enter the size")
    .min(1, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  brand: Yup.string("Select the brand").required("Required"),
  condition: Yup.string("Select the condition").required("Required"),
  conditiontype: Yup.string("Select the condition").required("Required"),
  color: Yup.string("Select the color").required("Required"),
  askingprice: Yup.number("Enter asking price")
    .min(1, "Too Short!")
    .max(10000, "Too Long!")
    .required("Required"),
  description: Yup.string("Enter the description").required("Required"),
  pickimage: Yup.mixed().required("Required"),
});

function Register(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      item: "",
      sku: "",
      size: "",
      brand: "",
      condition: "",
      conditiontype: "",
      color: "",
      askingprice: "",
      description: "",
      pickimage: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        form({
          id: uuidv4(),
          title: values.title,
          item: values.item,
          sku: values.sku,
          size: values.size,
          brand: values.brand,
          condition: values.condition,
          conditiontype: values.conditiontype,
          color: values.color,
          askingprice: values.askingprice,
          description: values.description,
          pickimage: values.pickimage,
        })
      );
      props.history.push("/display");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3>Title</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Title"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <h3>Item-Type</h3>
        <Radio
          type="radio"
          name="item"
          value="item1"
          onChange={formik.handleChange}
          error={formik.touched.item && Boolean(formik.errors.item)}
          helperText={formik.touched.item && formik.errors.item}
          checked={formik.values.item === "item1"}
        />
        <label>Item 1</label>
        <Radio
          type="radio"
          name="item"
          value="item2"
          onChange={formik.handleChange}
          error={formik.touched.item && Boolean(formik.errors.item)}
          helperText={formik.touched.item && formik.errors.item}
          checked={formik.values.item === "item2"}
        />
        <label>Item 2</label>
        <Radio
          type="radio"
          name="item"
          value="item3"
          onChange={formik.handleChange}
          error={formik.touched.item && Boolean(formik.errors.item)}
          helperText={formik.touched.item && formik.errors.item}
          checked={formik.values.item === "item3"}
        />
        <label>Item 3</label>
        <h3>Sku</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Sku"
          type="text"
          name="sku"
          value={formik.values.sku}
          onChange={formik.handleChange}
          error={formik.touched.sku && Boolean(formik.errors.sku)}
          helperText={formik.touched.sku && formik.errors.sku}
        />
        <h3>Size</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Size"
          type="number"
          name="size"
          value={formik.values.size}
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
        <h3>Brand</h3>
        <Select
          id="demo-simple-select-outlined"
          variant="outlined"
          label="Brand"
          name="brand"
          value={formik.values.brand}
          onChange={formik.handleChange}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
        >
          <MenuItem value="">Select a brand</MenuItem>
          <MenuItem value="puma">Puma</MenuItem>
          <MenuItem value="adidas">Adidas</MenuItem>
        </Select>
        <h3>Condition</h3>
        <p>Packed</p>
        <Radio
          type="radio"
          name="condition"
          value="new"
          onChange={formik.handleChange}
          error={formik.touched.condition && Boolean(formik.errors.condition)}
          helperText={formik.touched.condition && formik.errors.condition}
          checked={formik.values.condition === "new"}
        />
        <label>New</label>
        <Radio
          type="radio"
          name="condition"
          value="old"
          onChange={formik.handleChange}
          error={formik.touched.condition && Boolean(formik.errors.condition)}
          helperText={formik.touched.condition && formik.errors.condition}
          checked={formik.values.condition === "old"}
        />
        <label>Old</label>
        <p>Unpacked</p>
        <Radio
          type="radio"
          name="conditiontype"
          value="new"
          onChange={formik.handleChange}
          error={
            formik.touched.conditiontype && Boolean(formik.errors.conditiontype)
          }
          helperText={
            formik.touched.conditiontype && formik.errors.conditiontype
          }
          checked={formik.values.conditiontype === "new"}
        />
        <label>New</label>
        <Radio
          type="radio"
          name="conditiontype"
          value="old"
          onChange={formik.handleChange}
          error={
            formik.touched.conditiontype && Boolean(formik.errors.conditiontype)
          }
          helperText={
            formik.touched.conditiontype && formik.errors.conditiontype
          }
          checked={formik.values.conditiontype === "old"}
        />
        <label>Old</label>
        <h3>Color Way</h3>
        <p>Please Select The Color</p>
        <Radio
          type="radio"
          name="color"
          value="red"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "red"}
        />
        <label>Red</label>
        <Radio
          type="radio"
          name="color"
          value="blue"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "blue"}
        />
        <label>Blue</label>
        <Radio
          type="radio"
          name="color"
          value="orange"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "orange"}
        />
        <label>Orange</label>
        <Radio
          type="radio"
          name="color"
          value="green"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "green"}
        />
        <label>Green</label>
        <Radio
          type="radio"
          name="color"
          value="black"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "black"}
        />
        <label>Black</label>
        <Radio
          type="radio"
          name="color"
          value="white"
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          checked={formik.values.color === "white"}
        />
        <label>White</label>
        <h3>Asking Price</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Asking Price"
          type="number"
          name="askingprice"
          value={formik.values.askingprice}
          onChange={formik.handleChange}
          error={
            formik.touched.askingprice && Boolean(formik.errors.askingprice)
          }
          helperText={formik.touched.askingprice && formik.errors.askingprice}
        />
        <h3>Description</h3>
        <TextareaAutosize
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <h3>Pick Image</h3>
        <input
          type="file"
          name="pickimage"
          value={formik.values.pickimage}
          onChange={formik.handleChange}
          error={formik.touched.pickimage && Boolean(formik.errors.pickimage)}
          helperText={formik.touched.pickimage && formik.errors.pickimage}
        />
        <br />
        <br />
        {JSON.stringify(formik.errors)}
        <Button
          style={{
            backgroundColor: "#645DD7",
            color: "white",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withRouter(Register);
