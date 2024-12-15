import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const Layout = ({ children }) => (
    <div>
        <header style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
            <nav>
                <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
                <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
                <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            </nav>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
            <p>© 2024 My Website</p>
        </footer>
    </div>
);

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
