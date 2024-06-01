import { Skeleton, Stack } from "@mui/material";

export const AreaSkeleton = () => (
  <Stack spacing={1}>
    <Skeleton variant="rectangular" width={300} height={200} />
    <Skeleton variant="rectangular" width={300} height={100} />
  </Stack>
);
