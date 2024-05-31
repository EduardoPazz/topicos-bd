import { StatusMessage } from "@/components/StatusMessage";
import { Status } from "@/lib/Status";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Area = ({ name, status }: { name: string; status: Status }) => (
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
    <Stack spacing={1}>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        disableElevation
        sx={{ textTransform: "none" }}
      >
        Refazer análise
      </Button>
      <Button size="small" color="secondary" sx={{ textTransform: "none" }}>
        Excluir
      </Button>
    </Stack>
  </Stack>
);
