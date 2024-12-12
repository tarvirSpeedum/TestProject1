import React from 'react';

const FirstPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.brand}>MyWebsite</h1>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Welcome to MyWebsite</h1>
        <p style={styles.heroSubtext}>
          Discover the power of our platform to transform your workflow. Start your journey with us today!
        </p>
        <button style={styles.heroButton} onClick={() => alert('Get Started Clicked!')}>
          Get Started
        </button>
      </section>

      
    </div>
  );
};

const styles = {
  container: {
    fontFamily: `'Arial', sans-serif`,
    color: '#333',
    margin: 0,
    padding: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
  navLinkHover: {
    textDecoration: 'underline',
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '2rem',
  },
  heroHeading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  heroSubtext: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
  heroButton: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  heroButtonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
};

export default FirstPage;
