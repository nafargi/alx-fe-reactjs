
import { NavLink } from "react-router-dom";


function Services() {
    return (
        <>
              <nav >
                <ul style={{
                    display: 'flex',
                    color: 'green',
                    justifyContent: 'space-between'
                }}>
                <li>
                  <NavLink to="/" style={{ marginRight: '10px', color : 'green'}}> Home</NavLink>

                </li>
                <li>
                  <NavLink to="/about" style={{ marginRight: '10px' , color : 'green'}}>About</NavLink>

                </li>
                <li>
                <NavLink to="/contact" style={{ marginRight: '10px' , color : 'green'}}> Contact</NavLink>

                </li>
                </ul>
              
                 
             </nav>
            <div style={{ padding: '20px' }}>
        <h1>Our Services</h1>
        <ul>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
     
      </div>
        </>
      
    );
  }

  export default Services;