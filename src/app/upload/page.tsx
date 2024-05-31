import { Box } from "@mui/material";
import Image from "next/image";

function Area() {
  return (
    <Image
      src="https://picsum.photos/200"
      alt="random image"
      width={200}
      height={200}
    />
  );
}

export default function Upload() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(200px, auto));"
      justifyContent="space-evenly"
      gap={4}
    >
      {Array.from(Array(5)).map((_, index) => (
        <Area key={index} />
      ))}
    </Box>
  );
}
