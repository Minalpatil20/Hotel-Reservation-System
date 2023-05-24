import React, { Component } from "react";
import { FaCocktail, FaHotjar, FaWifi, FaCarSide } from "react-icons/fa";
import Title from "../Components/Title";

 class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Get a free Cocktails on your first visit"
      },
      {
        icon: <FaHotjar />,
        title: "Bornfire",
        info:
          "Enjoy bornfire every night "
      },
      {
        icon: <FaWifi />,
        title: "Internet Connectivity",
        info:
          "Free internate connectivity in Restaurants, lodging rooms and Gyms."
      },
      {
        icon: <FaCarSide />,
        title: "Pickup and Drop",
        info:
          "Free pickup and drop service over 5km distance"
      }
    ]
  };

  render() {
    return (
      <section className="Services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="Hotel Services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Services;