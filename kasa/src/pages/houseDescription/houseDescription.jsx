import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../components/sass/houseDescriptions.scss";
import Collapse from "../../components/collapse/collapse";

const HouseDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let config = await fetch("/location.json");
          let response = await config.json();
          const accommmodationFound = response.find(
            (accommodation) => accommodation.id === id
          );
          if (accommmodationFound === "") {
            navigate("404");
          }
          setData({
            items: accommmodationFound,
          });
        } catch {
          setData((state) => ({ ...state }));
        }
      };
      fetchDatas();
      // eslint-disable-next-line
    }, [id, navigate]);
    return [state.items];
  }
  const [items] = useFetchDatas();

  return (
    <>
      <section>
        <article className="accommodation">
          <div className="info">
            <h1 className="info__title">{items.title}</h1>
            <p className="info__location">{items.location}</p>
            <ul className="info__tag">
              {items.tags.map((tag) => {
                return <li className="tag__items">{tag}</li>;
              })}
            </ul>
          </div>
          <div className="host">
            <p className="host__name">{items.host.name}</p>
            <img
              className="host__picture"
              src={items.host.picture}
              alt="photo de l'hôte"
            />
          </div>
        </article>
        <article>
          <Collapse title="Description" text={<li>{items.description}</li>} />
          <Collapse
            title="Equipements"
            text={items.equipements.map((equipements) => {
              return <li className="equipements">{equipements}</li>;
            })}
          />
        </article>
      </section>
    </>
  );
};
export default HouseDescription;
