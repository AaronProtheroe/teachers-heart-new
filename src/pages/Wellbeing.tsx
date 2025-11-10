import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/Dimensions of wellbeing.png";

const Wellbeing = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Well-being"
        text="Well-being is more than just the absence of stress or illness — it’s a balanced state that
allows us to thrive in every aspect of life.
Each dimension of well-being — physical, emotional, intellectual, financial, environmental,
social, spiritual, and vocational — contributes to our overall health and happiness. When
one area is neglected, it can negatively affect the others.
The idea behind the Dimensions of Wellbeing isn’t to put another obligation on your plate or
add something to your already-long to-do list. Rather, it is a tool you can use when you’re
feeling out-of-sorts to understand which areas might be lacking and require attention.
More than anything, it can be a tool to foster self-compassion and deeper self-
understanding. And when you know ourself better, you can ask for what you need and
reach out for support.
[Source: Stoewen, D. L. (2017). Dimensions of wellness: Change your habits, change your
life. The Canadian Veterinary Journal, 58(8), 861]"
      />
    </Box>
  );
};

export default Wellbeing;
