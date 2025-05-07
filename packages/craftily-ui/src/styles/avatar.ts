export default {
  '.avatar': {
    display: 'inline-block',
    'object-fit': 'cover',
    width: 'var(--avatar-size, 100%)',
    height: 'var(--avatar-size, 2.5rem)',
    padding: '10px 20px',
    'background-color': 'var(--avatar-bg)',
    color: 'var(--avatar-color)',
    border: 'var(--avatar-border)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    'border-radius': 'var(--avatar-border-radius, 50%)',
    'aspect-ratio': 1,
  },
  '.avatar-primary': {
    '--avatar-bg': 'var(--color-primary)',
    '--avatar-color': 'var(--color-primary-content)',
    '--avatar-border': '2px solid var(--color-primary)',
  },
  '.avatar-secondary': {
    '--avatar-bg': 'var(--color-secondary)',
    '--avatar-color': 'var(--color-secondary-content)',
    '--avatar-border': '2px solid var(--color-secondary)',
  },
  '.avatar-danger': {
    '--avatar-bg': 'var(--color-danger)',
    '--avatar-color': 'var(--color-danger-content)',
    '--avatar-border': '2px solid var(--color-danger)',
  },
  '.avatar-square': {
    '--avatar-border-radius': '2rem',
  },
  '.avatar-circle': {
    '--avatar-border-radius': '100%',
  },
};
