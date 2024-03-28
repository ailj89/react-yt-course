import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  USA = "USA",
}

const getAge = (name: string): number => {
  return 99;
};

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

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
        {props.friends.map((friend: string) => (
          <li key={friend}>
            <h1>{friend}</h1>
          </li>
        ))}
        <li>
          {" "}
          <h1>Country: {props.country} </h1>
        </li>
      </ul>
    </div>
  );
};
