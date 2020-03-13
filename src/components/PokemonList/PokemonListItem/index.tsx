import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IPokemon } from "../../../types";
import styles from "./PokemonListItem.module.css";

interface PokemonListItemProps extends RouteComponentProps {
  pokemon: IPokemon;
}

const PokemonListItem: React.FC<PokemonListItemProps> = ({
  pokemon: { sprites, name },
  history
}) => {
  const onClickHandler = (
    event: React.SyntheticEvent<HTMLDivElement>
  ): void => {
    history.push(`/${name}`);
  };

  return (
    <li className={styles.pokemonListItem}>
      <div className={styles.inner} onClick={onClickHandler}>
        <div className={styles.wrapper}>
          <div className={styles.front}>
            <img src={sprites.front_default} alt="" />
            <div>
              <span>{name}</span>
            </div>
          </div>
          <div className={styles.back}>
            <img src={sprites.back_default} alt="" />
            <div>
              <span>{name}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const pokemonListItemWithRouter = withRouter(PokemonListItem);

export default pokemonListItemWithRouter;
