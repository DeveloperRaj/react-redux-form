import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { onDelete } from "../actions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Display() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(onDelete(id));
  }
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Item-Type</TableCell>
              <TableCell>Sku</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Condition Type</TableCell>
              <TableCell>Color Way</TableCell>
              <TableCell>Asking Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Pick Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.item}</TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.size}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.condition}</TableCell>
                <TableCell>{product.conditiontype}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.askingprice}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <img src={product.pickimage} alt="" />
                </TableCell>
                <TableCell>
                  <Link to={`/update?id=${product.id}`}>
                    <Button
                      startIcon={<Edit />}
                      style={{
                        backgroundColor: "#297373",
                        color: "white",
                      }}
                      variant="contained"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    startIcon={<Delete />}
                    style={{
                      backgroundColor: "#960200",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Display;
