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
import { allAddress, deleteAddress } from "../../../apis/users/auth";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import BillingAddress from "./billingaddress";
import { useUser } from "../../../context/usercontext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddressList = (props) => {
  const navigate = useNavigate();
  const isBillingComponent = props.isBillingComponent;
  const setBillingComponent = props.setBillingComponent;
  const isComponentVisible = props.isComponentVisible;
  const setComponentVisible = props.setComponentVisible;
  const { addressId, setAddressId } = useUser();
  const { addresses, setAddresses } = useUser();

  useEffect(() => {
    allAddress()
      .then((data) => {
        setAddresses(data.data.result.addressData);
      })
      .catch((e) => {
        toast.error("Something wrong, Api is not working");
      });
  }, []);

  const handleEditClick = (Id) => {
    setAddressId(Id);
    setBillingComponent(!isBillingComponent);
    setComponentVisible(!isComponentVisible);
    navigate("/my-new-address", { state: { addressId } });
  };

  const handleDeleteClick = (Id) => {
    deleteAddress(Id)
      .then((res) => {
        let data = res.data;
        if (data.isError) {
          toast.error(data.message);
        } else {
          setAddresses((prevAddress) =>
            prevAddress.filter((address) => address.id !== Id)
          );
          toast.success(data.result.message);
        }
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };
  return (
    <Container sx={{marginBottom:'50px'}}>
      <Typography variant="h4" gutterBottom sx={{marginTop:'65px'}}>
        Customer Address List
      </Typography>
      <Paper elevation={3}>
        <List>
          {addresses.map((address) =>
            address.addressType == "Shipping" && !isBillingComponent ? (
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
                    onClick={() => {
                      handleDeleteClick(address.id);
                    }}
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
            ) : address.addressType == "Billing" && isBillingComponent ? (
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
                    onClick={() => {
                      handleDeleteClick(address.id);
                    }}
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
            ) : (
              ""
            )
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default AddressList;
