import styled from "@emotion/styled";

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 420px) {
    flex: 0 0 33.33%;
  }
`;

const ListContent = styled.div`
  background-color: #f7f7f7;
  margin: 5px;
  padding: 10px 0;
`;

export default function CountryList({ Countries, onItemClick }) {
  return (
    <ListWrapper>
      {Countries.map((val) => (
        <ListItem key={val.ID} onClick={() => onItemClick(val)}>
          <ListContent>
            <h4>{val.Country}</h4>
            <div>New Confirmed: {val.NewConfirmed}</div>
            <div>New Deaths: {val.NewDeaths}</div>
            <div>New Recovered: {val.NewRecovered}</div>
          </ListContent>
        </ListItem>
      ))}
    </ListWrapper>
  );
}
