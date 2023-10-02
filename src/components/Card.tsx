import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Data {
  data: {
    name: string;
    imageUrl: string;
    categories: string[];
    description: string;
    badge: string;
  }[];
}

export default class Card extends React.Component<{ value?: null }, Data> {
  constructor(props: { value?: null }) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    axios
      .get("https://api.npoint.io/624c99ed50dcd45fb160")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }

  render() {
    return (
      <>
        {this.state.data.map((item, index) => (
          <div
            key={index}
            className="box bg-white p-2 rounded mt-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="mt-[-20px] flex justify-center">
              <p className="bg-slate-400 text-center rounded w-[20%] text-white">
                {item.badge}
              </p>
            </div>
            <div className="w-full h-[200px] mb-4">
              <img
                className="w-full h-full object-cover"
                src={item.imageUrl}
                alt=""
              />
            </div>
            <div>
              <Link
                to={`/detail/${index}`}
                key={index}
                className="text-decoration-none"
              >
                <p className="font-bold">{item.name}</p>
              </Link>
            </div>
            <div className="mb-4">
              <p className="text-[10px] text-blue-600">{item.categories}</p>
            </div>
            <div>
              <p className="text-xs h-[80px]">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}
