import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/Signs of Burnout.png";

const Burnout = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Burnout"
        text="Burnout is more than just feeling tired — it’s a state of emotional, physical, social and
mental exhaustion that develops when exposed to ongoing stress and this stress is left
unmanaged.
It often emerges gradually, through signs such as chronic fatigue, irritability, reduced
motivation, difficulty concentrating, cynicism, or a sense of detachment.
Teachers may also feel less effective or emotionally drained by everyday tasks. Recognising
these early warning signs is the first step toward reaching out for help and attending to
yourself.
If we can acknowledge burnout and address its root causes, we have a better chance of
restoring balance, protecting our well-being, and reconnecting with the sense of purpose
that drew us to teaching in the first place."
      />
    </Box>
  );
};

export default Burnout;
