import { AreaStatus } from "@/lib/AreaStatus";
import Typography from "@mui/material/Typography";

const messages = {
  [AreaStatus.GOOD]: (
    <Typography align="center" color="success.main">
      Não apresenta desmatamento
    </Typography>
  ),
  [AreaStatus.BAD]: (
    <Typography align="center" color="error.main">
      Grandes indícios de desmatamento
    </Typography>
  ),
  [AreaStatus.UNDEFINED]: (
    <Typography align="center" color="text.secondary">
      Sem informações suficientes
    </Typography>
  ),
};

export const StatusMessage = (props: { status: AreaStatus }) =>
  messages[props.status];
