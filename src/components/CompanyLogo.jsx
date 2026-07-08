import { siMeta, siPlaystation, siInfosys } from 'simple-icons';

// Set to true to render logos in their brand colors instead of
// tone-on-tone currentColor. Monochrome is the default: it keeps the
// design system coherent and lets logos flip color inside the papaya
// hover sweep.
const COLOR_LOGOS = false;

// Registry. Three entry shapes are supported:
//   - simple-icons entry:            { path, hex }            (24×24)
//   - custom fills:  { viewBox, paths: [{ d, fill }] }
//   - custom node:   { render: (size) => JSX }
// To add a future company, add one line here; anything unlisted falls
// back to a monogram chip automatically.
const LOGOS = {
  Meta: siMeta,
  PlayStation: siPlaystation,
  Infosys: siInfosys,
  // Official Cohere "coral" mark (cohere.com, via svgl.app)
  Cohere: {
    viewBox: '0 0 75 75',
    paths: [
      {
        d: 'M24.3 44.7c2 0 6-.1 11.6-2.4 6.5-2.7 19.3-7.5 28.6-12.5 6.5-3.5 9.3-8.1 9.3-14.3C73.8 7 66.9 0 58.3 0h-36C10 0 0 10 0 22.3s9.4 22.4 24.3 22.4z',
        fill: '#39594d',
      },
      {
        d: 'M30.4 60c0-6 3.6-11.5 9.2-13.8l11.3-4.7C62.4 36.8 75 45.2 75 57.6 75 67.2 67.2 75 57.6 75H45.3c-8.2 0-14.9-6.7-14.9-15z',
        fill: '#d18ee2',
      },
      {
        d: 'M12.9 47.6C5.8 47.6 0 53.4 0 60.5v1.7C0 69.2 5.8 75 12.9 75c7.1 0 12.9-5.8 12.9-12.9v-1.7c-.1-7-5.8-12.8-12.9-12.8z',
        fill: '#ff7759',
      },
    ],
  },
  // Ripplr's circular ripple mark (ripplr.in), redrawn as strokes —
  // no vector version is published
  RIPPLR: {
    render: (size) => (
      <svg
        className="logo-mark"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <path d="M8.6 14.5a4.4 4.4 0 1 1 6.8 0" />
        <path d="M5.8 16.7a8 8 0 1 1 12.4 0" />
      </svg>
    ),
  },
};

function CompanyLogo({ name, size = 24 }) {
  const icon = LOGOS[name];
  if (!icon) {
    return (
      <span className="logo-chip" style={{ '--logo-size': `${size}px` }} aria-hidden="true">
        {name[0]}
      </span>
    );
  }
  if (icon.render) return icon.render(size);
  const viewBox = icon.viewBox || '0 0 24 24';
  const paths = icon.paths || [{ d: icon.path, fill: icon.hex ? `#${icon.hex}` : undefined }];
  return (
    <svg className="logo-mark" width={size} height={size} viewBox={viewBox} aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={COLOR_LOGOS && p.fill ? p.fill : 'currentColor'} />
      ))}
    </svg>
  );
}

export default CompanyLogo;
