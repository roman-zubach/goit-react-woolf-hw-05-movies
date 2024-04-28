import { Actor } from './Actor';

import './assets/index.css';

export const CastList = ({casts}) => {
  return (
    <ul className='cast-items'>
      {casts.map(({ id, name, character, profile_path }) =>
        <Actor key={id} name={name} character={character} img={profile_path} />
      )}
    </ul>
  );
};
