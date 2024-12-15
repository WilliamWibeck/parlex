import { useState } from "react";
import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";

const WordAddingForm = () => {
  const [french, setFrench] = useState("");
  const [english, setEnglish] = useState("");
  const [example, setExample] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !english || !french || !difficulty || !example) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const categoryRef = doc(db, "categories", category);
      const wordsRef = collection(categoryRef, "words");

      await addDoc(wordsRef, {
        french,
        english,
        example,
        difficulty,
      });

      alert(`Word added successfully to the "${category}" category!`);

      setFrench("");
      setEnglish("");
      setExample("");
      setDifficulty("");
      setCategory("");
    } catch (error) {
      console.error("An error occurred while adding the word:", error);
      alert("Failed to add the word. Please try again.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ color: "white" }}>
      <Stack gap={2} marginY={2}>
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important",
            },
          }}
          label="Word in French"
          type="text"
          value={french}
          onChange={(e) => setFrench(e.target.value)}
          required
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important",
            },
          }}
          label="Word in English"
          type="text"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          required
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important",
            },
          }}
          label="Example Sentence"
          type="text"
          value={example}
          onChange={(e) => setExample(e.target.value)}
          required
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "rgb(255, 252, 252) !important",
            },
          }}
          label="Category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </Stack>
      <Select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        label="Difficulty"
        sx={{
          "& .MuiOutlinedInput-input": {
            color: "rgb(255, 252, 252) !important",
          },
        }}
        required
      >
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </Select>
      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: 2, backgroundColor: "blue", color: "white" }}
      >
        Add Word
      </Button>
    </Box>
  );
};

export default WordAddingForm;
