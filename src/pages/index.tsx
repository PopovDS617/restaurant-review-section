import Link from '../../node_modules/next/link';
import { DUMMY_DATA } from '../../dummy-data';

const Home = () => {
  return (
    <div>
      <ul>
        {DUMMY_DATA.map((el) => (
          <li key={el.id}>
            <Link href={`/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
