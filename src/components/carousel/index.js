import React from 'react';
import { animated, useSpring, useTrail } from 'react-spring'
import { Route, NavLink, HashRouter } from "react-router-dom"

import empty from '../../assets/empty.png';

function Carousel({ thumbnails }) {

    const trail = useTrail(thumbnails.length, {
        config: { duration: 700 },
        from: { width: 0 },
        to: { width: window.innerWidth }
    })

    return(
      <div class="carousel-container">
        { trail.map(({ ...rest }, index) => (
          <animated.div key={ thumbnails[index] } style={{ ...rest }}>
            <ul>
              <li>
                <NavLink exact to={ thumbnails[index].link }>
                  <div class="carousel-icon">
                    <svg
                        class={ thumbnails[index].svgstyle }
                        viewBox="0 0 512 512"
                        style={{ position: "absolute", opacity: 0.7 }}>
                      <path fill="rgba(227,228,230, 0.8)" d={ thumbnails[index].svgdraw }/>
                    </svg>
                    {/* Empty image used to override missing image icon from
                      * showing. Actual image imported through index.css. */}
                    <h4 class="icon-label">
                      { thumbnails[index].course }
                    </h4>
                    <img class={ thumbnails[index].icon } src={ empty }/>
                  </div>
                  <div class="icon-caption">
                    <b>{ thumbnails[index].heading1 }</b>
                    { thumbnails[index].content1 }<br/>
                    <b>{ thumbnails[index].heading2 }</b>
                    { thumbnails[index].content2 }<br/>
                    <b>{ thumbnails[index].heading3 }</b>
                    { thumbnails[index].content3 }
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