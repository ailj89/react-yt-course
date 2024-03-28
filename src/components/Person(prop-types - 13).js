import PropTypes from "prop-types";

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};

export const Person = (props) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{props.name}</h1>
        </li>
        <li>
          <h1>{props.email}</h1>
        </li>
        <li>
          <h1>{props.age}</h1>
        </li>
        <li>
          <h1>{props.isMarried ? "" : "Not"} Married</h1>
        </li>
        {props.friends.map((friend) => (
          <li key={friend}>
            <h1>{friend}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
