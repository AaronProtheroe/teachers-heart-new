import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/EMotions Wheel.png";

const Emotions = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Emotions"
        text="Sometimes we feel one thing, but express another. Sometimes we feel two things, and think
that we have to choose just one. And sometimes we have no idea what exactly we’re
feeling!
You might’ve been raised to feel all your feelings, but many of us were raised to believe that
only ‘certain’ emotions are allowed to be expressed, while others need to be suppressed.
Suppressing, faking or masking your emotions can disconnect you from who you are, what
you really feel, and can disrupt your authentic expression of yourself.
The feelings wheel is a powerful tool that builds emotional awareness and literacy. It helps
us identify, name, and understand the full range of our emotions — without judgement and
without defaulting to expressing ‘permitted’ feelings.
Understanding our feelings also allows us to hold conflicting feelings – which is important,
but can be challenging.
By recognising our emotions more accurately, we can respond rather than react,
communicate our needs more clearly, and build healthier relationships.

For teachers and (learners), the emotions wheel can encourage reflection, empathy, self-
compassion and understanding. It also aids emotional regulation which allows us to show up
in a way that’s true to ourselves.
[Sources:
Chang, M. L., &amp; Taxer, J. (2021). Teacher emotion regulation strategies in response to
classroom misbehaviour. Teachers and Teaching, 27(5), 353-369.
and
Phillippe, A., &amp; Johnson, K. (2025). Wheels, Words, and Wonder: Cultivating Vocabulary and
Social Emotional Development with Feel Wheels. Michigan Reading Journal, 58(1), 8.]."
      />
    </Box>
  );
};

export default Emotions;
