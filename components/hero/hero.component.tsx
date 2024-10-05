import { Avatar } from "../avatar";
import * as Styles from "./hero.styles";

export const Hero = () => {
  return (
    <Styles.Container>
      <Styles.ProfileContainer>
        <Styles.Text>下澤 健太</Styles.Text>
        <Styles.Text>フリーランスエンジニア</Styles.Text>
      </Styles.ProfileContainer>
      <Avatar />
    </Styles.Container>
  );
};
