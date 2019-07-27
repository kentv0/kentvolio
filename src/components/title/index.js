import React from 'react';
import { animated, useTrail, useSpring } from 'react-spring'

function Title({ items }) {

    const spring = useSpring({
        config: { duration: 600 },
        from: { opacity: 0 },
        to: { backgroundColor: "rgba(44, 53, 57, 0.15)", opacity: 1 }
    })

    const trail = useTrail(items.length, {
        config: { mass: 10, tension: 2000, friction: 200 },
        from: { opacity: 0 },
        to: { opacity: 1 }
    })
    
    return(
      <animated.div class="title-container" style={ spring }>
        <div class="title-main">
          {trail.map(({ ...rest }, indexTrail) => (
                <animated.div key={ items[indexTrail] } style={{ ...rest }}>
                  <ul>
                    <li>
                      { items[indexTrail] }
                    </li>
                  </ul>
                </animated.div>
          ))}
        </div>
      </animated.div>
    )
}

export default Title;