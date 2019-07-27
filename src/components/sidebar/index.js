import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring'
import { Route, NavLink, HashRouter } from "react-router-dom"

function SideBar({ items }) {

    const trail = useTrail(items.length, {
        config: { duration: 700 },
        from: { opacity: 0 },
        to: { opacity: 1 }
    })

    return(
      <div class="sidebar-container">
        { trail.map(({ ...rest }, index) => (
          <animated.div key={ items[index] } style={{ ...rest }}>
            <ul>
              <li>
                <NavLink exact to={ items[index].link }>
                  <div class="sidebar-icon">
                    <svg
                        class={ items[index].svgstyle }
                        viewBox="0 0 512 512"
                        style={{ position: "absolute", opacity: 0.8 }}>
                      <path fill="rgba(227,228,230, 0.8)" d={ items[index].svgdraw }/>
                    </svg>
                    <h6 class="sidebar-name">
                      { items[index].name }
                    </h6>
                  </div>
                </NavLink>
              </li>
            </ul>
          </animated.div>
        ))}
      </div>
    )
}

export default SideBar;