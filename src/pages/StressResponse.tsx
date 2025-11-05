import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/Stress Responses.png";

const StressResponse = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Stress-response"
        text="Stress happens. And when it does, we react to it in various ways. These reactions are
typically fight, flight freeze, fawn and flop. While these reactions seem literal, they can
present in different ways and often overlap. Understanding the symptoms behind our
reactions can help us understand ourselves – and others – more effectively.
The stress response wheel helps us understand how our bodies and minds react when we
experience stress. It illustrates the different ways stress shows up — physically, emotionally,
mentally, and behaviourally — and reminds us that everyone’s responses are unique.
By recognising our personal stress patterns, we can identify early warning signs and use
healthy coping strategies before stress becomes overwhelming. For teachers, this
awareness is especially valuable: understanding the stress response supports better self-
regulation, promotes emotional balance, and helps create calmer, more responsive
classrooms.
[Source: Knight, J. D. (2025). Is the nervous system sympathetic?. Journal of Surgery and
Medical Case Reports, 2(2), 1-4.]"
      />
    </Box>
  );
};

export default StressResponse;
