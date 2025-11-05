import { Display } from "@/base-components";
import { Box } from "@chakra-ui/react";
import img from "../assets/Somatic Symptoms of Dysregulation.png";

const SomaticResponses = () => {
  return (
    <Box>
      <Display
        img={img}
        title="Somatic Responses to Emotional Dysregulation"
        text="Our emotions don’t just live in the mind — they’re felt in the body. When we experience
strong or overwhelming emotions, the body often reacts automatically through physical
sensations such as muscle tension, rapid heartbeat, shallow breathing, or stomach
discomfort.
Somatic responses are signals from our nervous system that we may be moving into a stress
state. Learning to recognise these body-cues helps us notice when we (or others) are
becoming dysregulated, so we can pause, ground ourselves, and restore balance.
For teachers, this awareness is especially valuable: understanding your body’s signals
supports emotional regulation by reminding you to have ‘time out’ for yourself to rebalance
and ‘recalibrate’ yourself.
It also helps you read your scholar’s body signals so you can gauge when they might be
struggling.

[Sources: Okur Güney, Z. E., Sattel, H., Witthöft, M., &amp; Henningsen, P. (2019). Emotion regulation in
patients with somatic symptom and related disorders: A systematic review. PloS one, 14(6),
e0217277.
And
Stressed out? Learn how the body responds to stress – and healthy ways to cope. Heads Up: Real
news about drugs and your body. National Institute on Drug Abuse (NIDA) ]"
      />
    </Box>
  );
};

export default SomaticResponses;
