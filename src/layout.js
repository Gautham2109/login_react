import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <h1>Single page</h1>
          <ul class="nav">
              <li class="nav-item">
                  <Link to="./animal">Animal</Link>
              </li>
              <li class="nav-item">
                  <Link to="./cities">Cities</Link>
              </li>
              <li class="nav-item">
                  <Link to="./nature">Nature</Link>
              </li>
              <li class="nav-item">
                  <Link to="./snakes">Snake</Link>
              </li>
          </ul>
        <Outlet/>
    </div>
  )
}
