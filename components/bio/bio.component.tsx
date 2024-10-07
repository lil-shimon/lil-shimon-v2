import * as Styles from "./bio.styles";

export const Bio = () => {
  return (
    <Styles.Container>
      <Styles.Title>Bio</Styles.Title>
      <Styles.BioContainer>
        <Styles.Year>2019</Styles.Year>
        <span>カナダ カルガリー留学</span>
      </Styles.BioContainer>
      <Styles.BioContainer>
        <Styles.Year>2021</Styles.Year>
        <span>日本大学 経済学部経済学科国際コース 卒業</span>
      </Styles.BioContainer>
      <Styles.BioContainer>
        <Styles.Year>2021</Styles.Year>
        <span>クェスタ株式会社 プログラマー 入社</span>
      </Styles.BioContainer>
      <Styles.BioContainer>
        <Styles.Year>2023-現在</Styles.Year>
        <span>フリーランスエンジニア</span>
      </Styles.BioContainer>
    </Styles.Container>
  );
};
