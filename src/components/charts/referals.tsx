import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

export const propertyReferralsInfo = [
  {
    title: "Flutter Dart",
    percentage: 64,
    color: "#6C5DD3",
  },
  {
    title: "Firebase",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "PHP",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Marketing",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];
const ProgressBar = ({ percentage, title, color }: ProgressBarProps) => (
  <Box width={"100%"}>
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography fontSize={16} fontWeight={500} color={"#11142d"}>
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color={"#11142d"}>
        {percentage}
      </Typography>
    </Stack>
    <Box
      mt={2}
      position={"relative"}
      width={"100%"}
      height={"8px"}
      borderRadius={1}
      bgcolor={"#e4e8ef"}
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position={"absolute"}
        height={"100%"}
        borderRadius={1}
      />
    </Box>
  </Box>
);

const PropertyReferals = () => {
  return (
    <Box
      p={4}
      flexDirection={"column"}
      id={"chart"}
      minWidth={490}
      display={"flex"}
      borderRadius={"15px"}
      gap={4}
      bgcolor={"#fff"}
      className={"transition-all duration-500 shadow-sm hover:shadow-md"}
    >
      <Typography fontSize={18} fontWeight={600} color={"#11142d"}>
        Top Categories
      </Typography>
      <Stack my={"20px"} direction={"column"} gap={4}>
        {propertyReferralsInfo.map(({ percentage, title, color }, index) => (
          <ProgressBar
            key={index}
            title={title}
            percentage={percentage}
            color={color}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferals;
