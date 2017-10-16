import * as React from 'react'
// 头部导航 react-router Link 
// vue-router
import { Link } from 'react-router'

// 泛型 js 像C# C++
export const Header: React.StatelessComponent<{}> = () => {
    return (
        // className? jsx js html语句 class js 关键字 //label for html for
        <div className="row">
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/members">Members</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}