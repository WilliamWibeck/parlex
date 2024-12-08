import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";

type Props = {};

const WordAddingForm = (props: Props) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [example, setExample] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "words"), {
        word,
        translation,
        example,
        difficulty,
        category,
      });

      setWord("");
      setTranslation("");
      setExample("");
      setDifficulty("");
      setCategory("");
    } catch (error) {
      console.log("An error was encountered while fetching word: ", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Word in french"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        required
      ></TextField>
      <TextField
        label="Word in english"
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        required
      ></TextField>
      <TextField
        label="Example"
        type="text"
        value={example}
        onChange={(e) => setExample(e.target.value)}
        required
      ></TextField>
      <TextField
        label="Category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      ></TextField>
      <Select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        label="Difficulty"
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
