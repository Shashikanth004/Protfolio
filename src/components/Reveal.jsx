import { useReveal } from '../hooks/useReveal.js';

export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, style = {}, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
