import { StatusMessage } from "@/components/StatusMessage";
import { Area } from "@/lib/types";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const AreaComponent = ({ area }: { area: Area }) => (
  <Stack spacing={2}>
    <Stack>
      <Image src={area.imgSrc} alt="random image" width={300} height={200} />
      <Typography align="center" mt={1}>
        {area.name}
      </Typography>
      <StatusMessage status={area.status} />
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
