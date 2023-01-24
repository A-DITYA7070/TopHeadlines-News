// import PropTypes from 'prop-types'
import React, {
    Component
} from 'react'

import { Link} from "react-router-dom";
export class NavBar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <Link className="navbar-brand" to="/" > News-Master </Link>
                     <button className="navbar-toggler"type="button"data-toggle = "collapse"data-target = "#navbarSupportedContent"aria-controls = "navbarSupportedContent"aria-expanded = "false"aria-label = "Toggle navigation" >
                    <span className="navbar-toggler-icon" > </span> 
                    </button>
                        <div className="collapse navbar-collapse"
                            id="navbarSupportedContent" >
                            <ul className="navbar-nav mr-auto" >
                                 <i className="nav-item active" />
                              <Link className="nav-link"to="/" > Home < span className="sr-only" > (current) </span></Link>
                           <li className="nav-item" ><Link className="nav-link" to="/About" > About </Link> </li> 
                           <li className="nav-item"><Link to="/bussiness" className="nav-link">Business</Link></li>
                           <li className="nav-item"> <Link to="/science" className='nav-link'>Science</Link> </li>
                           <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
                           <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
                           <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
                           <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                        </ul> 
                    </div> 
                </nav> 
          </div>
        )
    }
}
export default NavBar