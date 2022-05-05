import styled from "@emotion/styled";

const Wrapper = styled.div`
  text-align: center;
`;

export default function GlobalData({ NewConfirmed, NewDeaths, NewRecovered }) {
  return (
    <Wrapper>
      <h1>Global Covid-19</h1>
      <h3>New Confirmed: {NewConfirmed.toLocaleString("en-US")}</h3>
      <h3>New Deaths: {NewDeaths.toLocaleString("en-US")}</h3>
      <h3>New Recovered: {NewRecovered.toLocaleString("en-US")}</h3>
    </Wrapper>
  );
}
