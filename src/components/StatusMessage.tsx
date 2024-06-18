import Typography from "@mui/material/Typography";

import { AreaStatus } from "@/lib/AreaStatus";

const messages = {
  [AreaStatus.FOREST]: (
    <Typography align="center" color="success.main">
      Não apresenta desmatamento
    </Typography>
  ),
  [AreaStatus.DEFORESTATION]: (
    <Typography align="center" color="error.main">
      Apresenta indícios de desmatamento
    </Typography>
  ),
  [AreaStatus.CLOUD]: (
    <Typography align="center" color="text.secondary">
      Imagem coberta por núvens
    </Typography>
  ),
};

export const DefaultStatusMessage = () => (
  <Typography align="center" color="text.secondary">
    Sem informações suficientes
  </Typography>
);

export const StatusMessage = ({ status }: { status: AreaStatus }) =>
  messages[status];
