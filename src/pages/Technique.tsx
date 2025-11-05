import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/5-4-3-2-1 Grounding.png";

const Technique = () => {
  return (
    <Box>
      <Display
        img={img}
        title="The5-4-3-2-1 Technique"
        text="The 5-4-3-2-1 technique is a simple but powerful grounding exercise that helps calm the
body and mind during moments of stress or overwhelm.
By identifying 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1
you can taste, it uses the five senses to bring awareness back to the present moment
By focusing on your surroundings, you gently shift attention away from racing thoughts and
back to a sense of safety and stability. For teachers and learners, this quick tool can be used
anywhere to reduce anxiety and restore focus.
[Source: Paul, M. (2025). Calming Techniques in catastrophe situations. Royal International
Global Journal of Advanced and Applied Research, 2(7).]"
      />
    </Box>
  );
};

export default Technique;
