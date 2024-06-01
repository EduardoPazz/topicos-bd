import { AreaSkeleton } from "@/components/AreaSkeleton";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Areas = dynamic(
  () => import("@/components/Areas").then((mod) => mod.Areas),
  {
    ssr: false,
    loading: () => (
      <>
        <AreaSkeleton />
        <AreaSkeleton />
        <AreaSkeleton />
      </>
    ),
  },
);

export default function AreasPage() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, auto));"
      justifyContent="space-evenly"
      gap={4}
    >
      <Areas />
    </Box>
  );
}
