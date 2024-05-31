import { Status } from "@/lib/Status";
import Typography from "@mui/material/Typography";

const messages = {
  [Status.GOOD]: (
    <Typography align="center" color="success.main">
      Não apresenta desmatamento
    </Typography>
  ),
  [Status.BAD]: (
    <Typography align="center" color="error.main">
      Grandes indícios de desmatamento
    </Typography>
  ),
  [Status.UNDEFINED]: (
    <Typography align="center" color="text.secondary">
      Sem informações suficientes
    </Typography>
  ),
};

export const StatusMessage = (props: { status: Status }) =>
  messages[props.status];
