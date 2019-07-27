import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring'
import { Route, NavLink, HashRouter } from "react-router-dom"

import empty from '../../assets/empty.png';

function Carousel({ items }) {

    const trail = useTrail(items.length, {
        config: { duration: 700 },
        from: { width: 0 },
        to: { width: window.innerWidth }
    })

    return(
      <div class="carousel-container">
        { trail.map(({ ...rest }, index) => (
          <animated.div key={ items[index] } style={{ ...rest }}>
            <ul>
              <li>
                <NavLink exact to={ items[index].link }>
                  <div class="carousel-icon">
                    <svg
                        class={ items[index].svgstyle }
                        viewBox="0 0 512 512"
                        style={{ position: "absolute", opacity: 0.7 }}>
                      <path fill="rgba(227,228,230, 0.8)" d={ items[index].svgdraw }/>
                    </svg>
                    {/* Empty image used to override missing image icon from
                      * showing. Actual image imported through index.css. */}
                    <h4 class="icon-label">
                      { items[index].course }
                    </h4>
                    <img class={ items[index].icon } src={ empty }/>
                  </div>
                  <div class="icon-caption">
                    <b>{ items[index].heading1 }</b>
                    { items[index].content1 }<br/>
                    <b>{ items[index].heading2 }</b>
                    { items[index].content2 }<br/>
                    <b>{ items[index].heading3 }</b>
                    { items[index].content3 }
                  </div>
                </NavLink>
              </li>
            </ul>
          </animated.div>
        ))}
      </div>
    )
}

export default Carousel;