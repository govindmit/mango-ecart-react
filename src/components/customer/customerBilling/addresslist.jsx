import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from "@mui/material";
import { allAddress } from "../../../apis/users/auth";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import BillingAddress from "./billingaddress";
import { useUser } from "../../../context/usercontext";
import { useNavigate } from "react-router-dom";

const AddressList = (props) => {
  const navigate = useNavigate();
  const isBillingComponent = props.isBillingComponent;
  const setBillingComponent = props.setBillingComponent;
  const isComponentVisible = props.isComponentVisible;
  const setComponentVisible = props.setComponentVisible;
 
  const {addressId,setAddressId} = useUser();
  const {addresses, setAddresses} = useUser();

  useEffect(() => {
    allAddress()
      .then((data) => {
        setAddresses(data.data.result.addressData);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }, []);

  const handleEditClick = (Id) => 
  {
    setAddressId(Id);
    setBillingComponent(!isBillingComponent)
    setComponentVisible(!isComponentVisible)
    navigate("/my-new-address");
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Customer Address List
      </Typography>
      <Paper elevation={3}>
        <List>
          {addresses.map((address) => (
            <ListItem key={address.id}>
              <ListItemText
                primary={`${address.firstName} ${address.lastName}`}
                secondary={`${address.email}, ${address.countrycode}, ${address.phone}, ${address.address1}, ${address.country}, ${address.state}, ${address.city}, ${address.postcode}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  style={{ margin: "5px" }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  style={{ margin: "5px" }}
                  onClick={() => {
                    handleEditClick(address.id);
                  }}
                >
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default AddressList;
