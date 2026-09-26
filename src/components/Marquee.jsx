import { marquee } from '../data/content';
import './Marquee.css';

const rows = [marquee, [...marquee].reverse()];

/* Decorative — every item here is also listed in the Skills section. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {rows.map((items, row) => (
        <div className={`marquee__row ${row === 1 ? 'marquee__row--reverse' : ''}`} key={row}>
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <ul className="marquee__group" key={copy}>
                {items.map(({ label, icon: Icon }) => (
                  <li className="marquee__chip" key={label}>
                    <span className="marquee__icon">
                      <Icon />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
