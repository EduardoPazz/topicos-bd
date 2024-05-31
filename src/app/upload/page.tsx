import { StatusMessage } from "@/components/StatusMessage";
import { Status } from "@/lib/Status";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Area({ name, status }: { name: string; status: Status }) {
  return (
    <Stack spacing={2}>
      <Stack>
        <Image
          src="https://picsum.photos/300/200"
          alt="random image"
          width={300}
          height={200}
        />
        <Typography align="center" mt={1}>
          {name}
        </Typography>
        <StatusMessage status={status} />
      </Stack>
      <Stack>
        <Button>Upload</Button>
        <Button>Upload</Button>
      </Stack>
    </Stack>
  );
}

export default function Upload() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, auto));"
      justifyContent="space-evenly"
      gap={4}
    >
      {Array.from(Array(2)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.GOOD} />
      ))}
      {Array.from(Array(2)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.BAD} />
      ))}
      {Array.from(Array(5)).map((_, index) => (
        <Area key={index} name={"nome do arquivo"} status={Status.UNDEFINED} />
      ))}
    </Box>
  );
}
