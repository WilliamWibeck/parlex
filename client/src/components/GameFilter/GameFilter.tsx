import { Button, Paper, Stack } from "@mui/material";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const GameFilter = () => {
  const getCategories = async () => {
    const categoryRef = collection(db, "categories");

    const subCols = await getDocs(categoryRef);
    console.log(subCols.docs.map((doc) => doc.data()));
    const categories = subCols.docs.map((doc) => doc.data().name || doc.id);

    console.log(categories);
  };

  return (
    <Stack>
      <Button onClick={getCategories}>Get Categories</Button>
    </Stack>
  );
};

export default GameFilter;
