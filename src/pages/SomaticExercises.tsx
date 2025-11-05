import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/1.png";

const SomaticExercises = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Somatic Exercises to Aid Emotional Regulation"
        text="Processing emotions does not only happen cognitively (top-down), but also physically
(bottom-up). Emotions are experienced in the body as much as in the psyche, so regulating
them somatically makes sense.
Somatic exercises use gentle movement, breath, and awareness to help calm the nervous
system and release stored tension. Simple practices such as deep breathing, stretching,
grounding through the senses, or shaking out stress can help restore a sense of safety and
presence.
By reconnecting with the body, we create space for the mind to settle and for emotions to
move through more easily. For teachers, incorporating somatic techniques supports self-
care, reduces stress, helps emotional regulation, fosters social connection, and creates a
more balanced and self-compassionate classroom environment.
[Source: Kulick, K. S. (2025). Lead with the Body: Somatic Embodied Practices for Teacher
Leadership and Well-Being. International Journal of Teacher Leadership, 14(1), 62-80.]"
      />
    </Box>
  );
};

export default SomaticExercises;
