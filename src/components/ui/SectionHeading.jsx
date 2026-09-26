import Reveal from './Reveal';
import { rich } from '../../lib/rich';

export default function SectionHeading({ index, eyebrow, title, subtitle, as: Tag = 'h2', align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          {index && <span className="eyebrow__index">{index}</span>}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06} blur>
        <Tag className="section-heading__title">{rich(title)}</Tag>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.14}>
          <p className="section-heading__subtitle">{subtitle}</p>
        </Reveal>
      )}
    </header>
  );
}
