import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/The Power of Affirmations.png";

const Affirmations = () => {
  return (
    <Box>
      <Display
        img={img}
        title="The Power of Affirmations"
        text="Affirmations are positive statements that help shape how we think and feel about ourselves.
Because the subconscious doesn’t know the difference between reality and imagination,
affirmations work to promote and protect one’s self-esteem and can create self-schemas
that support authentic emotional and cognitive well-being.

When repeated regularly, they can shift negative thought patterns, build confidence, and
strengthen emotional resilience. They can lead to changes in attitudes and habits that start
from within, and ultimately display on the outside. By focusing on what’s kind,
compassionate and empowering, affirmations remind us of our strengths, values, and
potential.
For teachers, affirmations can be a simple yet meaningful way to nurture self-belief, reduce
self-criticism, and model positive self-talk for both themselves and learners. Over time,
these small, intentional words can create meaningful changes in mindset and well-being.
[Source: Escobar-Soler, C., Berrios, R., Peñaloza-Díaz, G., Melis-Rivera, C., Caqueo-Urízar, A.,
Ponce-Correa, F., &amp; Flores, J. (2023). Effectiveness of Self-Affirmation interventions in
Educational settings: A Meta-analysis. Healthcare, (12)
and
Fourianalistyawati, E. The Effectivity of Transpersonal Therapy (Visualization, Affirmation,
Release) to Reduce Depression in Women with Breast Cancer. ]"
      />
    </Box>
  );
};

export default Affirmations;
