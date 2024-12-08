import { TextField } from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";
import WordAddingForm from "../WordAddingForm/WordAddingForm";

type Props = {};

const AdminPage = (props: Props) => {
  return (
    <div>
      <WordAddingForm />
    </div>
  );
};

export default AdminPage;
