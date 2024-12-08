import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";

type Props = {};

const WordAddingForm = (props: Props) => {
  const [french, setFrench] = useState("");
  const [english, setEnglish] = useState("");
  const [example, setExample] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "words"), {
        french,
        english,
        example,
        difficulty,
        category,
      });

      setFrench("");
      setEnglish("");
      setExample("");
      setDifficulty("");
      setCategory("");
    } catch (error) {
      console.log("An error was encountered while fetching word: ", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ color: "white" }}>
      <Stack gap={2} marginY={2}>
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important", // Force the text color
            },
          }}
          label="Word in french"
          type="text"
          value={french}
          onChange={(e) => setFrench(e.target.value)}
          required
        ></TextField>
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important", // Force the text color
            },
          }}
          label="Word in english"
          type="text"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          required
        ></TextField>
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important", // Force the text color
            },
          }}
          label="Example"
          type="text"
          value={example}
          onChange={(e) => setExample(e.target.value)}
          required
        ></TextField>
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important", // Force the text color
            },
          }}
          label="Category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        ></TextField>
      </Stack>
      <Select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        label="Difficulty"
        sx={{
          "& .MuiOutlinedInput-input": {
            color: "rgb(255, 252, 252) !important", // Force the text color
          },
        }}
      >
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </Select>
      <Button type="submit">SUBMIT</Button>
    </Box>
  );
};

export default WordAddingForm;
