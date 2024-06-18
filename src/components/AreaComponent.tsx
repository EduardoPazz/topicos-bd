"use client";

import {
  DefaultStatusMessage,
  StatusMessage,
} from "@/components/StatusMessage";
import { deleteIDB } from "@/lib/IndexedDB/deleteIDB";
import { Area } from "@/lib/types";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { useAnalyzeArea } from "@/lib/useAnalyzeArea";

export const AreaComponent = ({ area: areaProp }: { area: Area }) => {
  const [hidden, setHidden] = useState(false);

  const [area, setArea] = useState(areaProp);

  const { isMutating, trigger } = useAnalyzeArea(area, setArea);

  console.log(`${area.name} rendered`);

  return (
    <Stack spacing={2} sx={{ display: hidden ? "none" : "unset" }}>
      <Stack>
        <Image
          src={URL.createObjectURL(area.img)}
          alt="random image"
          width={300}
          height={200}
        />
        <Typography align="center" mt={1}>
          {area.name}
        </Typography>
        {area.status ? (
          <StatusMessage status={area.status} />
        ) : (
          <DefaultStatusMessage />
        )}
      </Stack>
      <Stack spacing={1}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          disableElevation
          disabled={isMutating}
          sx={{ textTransform: "none" }}
          onClick={() => trigger()}
        >
          {area.status ? "Analisar" : "Refazer análise"}
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
