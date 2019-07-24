import React, { useState } from 'react'
import { useGesture } from 'react-use-gesture'
import { animated, useSprings, interpolate } from 'react-spring'

import empty from '../../assets/empty.png';

const from = i => ({
    x: 0,
    y: 0,
    xscale: 0.8,
    yscale: 1,
    opacity: 0
  })

const to = i => ({
    /* Move cards left, right, up, and down. */
    x: i * -20,
    y: i * -9,
    /* Scales cards by width and height. */
    xscale: 0.8,
    yscale: 1,
    opacity: 1,
    delay: i * 100 })

const trans = (sx, sy) => `
    scaleX(${sx})
    scaleY(${sy})`

function Basecard({ deck }) {
    /* Create springs for each card in deck. */
    const [springs, set] = useSprings(deck.length, i => ({
            from: from(i), ...to(i)
    }))

    /* Track discards from gesture below. */
    const [gone] = useState(() => new Set())

    /* Swipe-to-Discard Gesture */
    const bind = useGesture(({
            args: [index], down, delta: [xDelta],
            distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 1
        const dir = xDir < 0 ? -1 : -1
        if (!down && trigger) gone.add(index)
        set(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
            /* Scale active cards by width and height. */
            const xscale = down ? 0.9 : 0.8
            const yscale = down ? 1.1 : 1  
            return {
                x,
                xscale,
                yscale,
                delay: undefined,
                config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        /* Resets deck after last one is swiped. */
        if (!down && gone.size === deck.length) setTimeout(() =>
                gone.clear() || set(i => to(i)), 600)

    })

    return(
        springs.map(({ x, y, xscale, yscale, opacity }, i) => (
          <animated.div class="basecard-container" key={i} style={{
              transform: interpolate([x, y], (x, y) =>
              `translate3d(${x}px, ${y}px, 0)`) }}>
            <animated.div class="basecard-main" {...bind(i)} style={{
                transform: interpolate(
                    [xscale, yscale], trans),
                    opacity }}>
              <div class="centered-data">
                <h1>
                  { deck[i].ctext }
                </h1>
              </div>
              <img class="tint-background" src={ empty }/>
              <img class={ deck[i].background } src={ empty }/>
              <div class="data-container">
                <div class="profile-container">
                  <img class={ deck[i].profile } src={ empty }/>
                </div>
                <h4 class="heading-01-data">
                  { deck[i].heading1 }
                </h4>
                <h5 class="content-01-data1">
                  { deck[i].content1 }
                </h5>
                <h5 class="content-01-data2">
                  { deck[i].content1add }
                </h5>
                <h1 class="heading-02-data">
                  { deck[i].heading2 }
                </h1>
                <h5 class="content-02-data">
                  { deck[i].content2 }
                </h5>
                <div class="bottom-row-container">
                  <h2 class="heading-03-data">
                    { deck[i].heading3 }
                  </h2>
                  <p class="content-03-data">
                    { deck[i].content3 }
                    <img class={ deck[i].image1 } src={ empty }/>
                  </p>
                  <h2 class="heading-04-data">
                    { deck[i].heading4 }
                  </h2>
                  <p class="content-04-data">
                    { deck[i].content4 }
                    <img class={ deck[i].image2 } src={ empty }/>
                  </p>
                  <h4 class="heading-05-data">
                    { deck[i].heading5 }
                  </h4>
                  <p class="content-05-data">
                    { deck[i].content5 }
                  </p>
                </div>
              </div>
            </animated.div>
          </animated.div>
        ))
    )
}

export default Basecard;