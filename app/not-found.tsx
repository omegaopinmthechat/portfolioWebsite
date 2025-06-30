import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem',
      background: 'transparent',
    }}>
      <div style={{
        maxWidth: '28rem',
        margin: '0 auto',
        padding: '2rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
        }}>404</h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          fontSize: '1.125rem',
          lineHeight: '1.5',
        }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '0.5rem',
            color: 'white',
            background: 'linear-gradient(to right, #7e22ce, #7c3aed)',
            textDecoration: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
          }}
          
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
