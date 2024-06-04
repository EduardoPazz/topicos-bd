"use client";

import { StatusMessage } from "@/components/StatusMessage";
import { deleteIDB } from "@/lib/IndexedDB/deleteIDB";
import { AreaDTO } from "@/lib/types";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

export const AreaComponent = ({ area }: { area: AreaDTO }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <Stack spacing={2} sx={{ display: hidden ? "none" : "unset" }}>
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
        <Button
          size="small"
          color="secondary"
          sx={{ textTransform: "none" }}
          onClick={async () => {
            await deleteIDB(area.name);
            setHidden(true);
          }}
        >
          Excluir
        </Button>
      </Stack>
    </Stack>
  );
};
