import * as React from 'react';
import { Routes,Route,Outlet,Link} from 'react-router-dom';
import Home from '../src/home/home.jsx';
import About from '../src/about/about.jsx';
import Dashboard from '../src/dashboard/dashboard.jsx';
import NoMatch from '../src/nothing_here/nomatch.jsx';
/******************************************************************* */
export default function App(){
    return(
        <div>
            <div className="mainHeading">
                <h2>BASIC ROUTING</h2>
            </div>

            <div className="description">
                <p>this site focuses on displaying the core fundamentals of react-router</p>
            </div>

            <Routes>
                <Route path="/" element={<Layout />}>  //nesting route paths 
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="*" element={<NoMatch />}/>
                </Route>
            </Routes>
        </div>
    );
    } 

/******************************************************************** */
function Layout(){
         return(
                    <div>
                        <nav>
                        <ul>
                            <li> 
                                <Link to="/">HOME</Link> 
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">DASHBOARD</Link>
                            </li>
                            <li>
                                <Link to="nothing-here">NOTHING HERE!</Link>
                            </li>
                        </ul>
                        </nav>
                        <hr />
                        <Outlet />
                    </div>
            );
}

/**************************** */