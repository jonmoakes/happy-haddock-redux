import { Div } from "../../styles/div/div.styles";

const OpeningHours = () => (
  <>
    <hr />
    <Div>
      <h2>opening hours:</h2>
      <p>monday - saturday</p>
      <ul>
        <li className="times">11:45am – 2pm</li>
        <li className="times">4:30pm – 10pm</li>
      </ul>
    </Div>

    <hr />
  </>
);

export default OpeningHours;
