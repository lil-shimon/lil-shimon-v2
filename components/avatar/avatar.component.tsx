import Image from "next/image";
import * as Styles from "./avatar.styles";

export const Avatar = () => {
  return (
    <Styles.Container>
      <Image src="/images/shimosawa.png" alt="shimosawa profile image" fill />
    </Styles.Container>
  );
};
