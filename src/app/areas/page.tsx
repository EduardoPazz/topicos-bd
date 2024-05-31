import { Area } from "@/components/Area";
import { Status } from "@/lib/Status";
import { Box } from "@mui/material";

export default function Areas() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, auto));"
      justifyContent="space-evenly"
      gap={4}
    >
      {Array.from(Array(1)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.GOOD} />
      ))}
      {Array.from(Array(1)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.BAD} />
      ))}
      {Array.from(Array(7)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.UNDEFINED} />
      ))}
    </Box>
  );
}
