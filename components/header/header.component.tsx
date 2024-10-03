import Link from "next/link";
import * as Styles from "./header.styles";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <Styles.Header>
      <nav>
        <Styles.Container>
          <h1>
            <Link href="/">Shimosawa Kenta</Link>
          </h1>
          <Styles.GithubLink
            href="https://github.com/lil-shimon/lil_shimon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
            ソースコード
          </Styles.GithubLink>
        </Styles.Container>
      </nav>
    </Styles.Header>
  );
};
