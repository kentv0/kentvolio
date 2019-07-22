import React, { Component } from "react"
import { HashRouter, Route } from "react-router-dom"

import Title    from "../title"
import Basecard from "../basecard"
import Carousel from "../carousel"

const Contact_01 = () => ( <Basecard deck={ data_forContact_01 } /> )

class Contact extends Component {
    render() {
        return (
          <HashRouter basename="/contact">
            <div class="app-container">
              <Title strings={ data_forTitle } />
{/*
              <Carousel thumbnails={ data_forCarousel } />
*/}
              <Route path="/" exact component={ Contact_01 } />
              <Route path="/contact-01" exact component={ Contact_01 } />
            </div>
          </HashRouter>
        );
    }
}

const data_forTitle = [ 'C','O','N','T','A','C','T' ]

{/*
const data_forCarousel = [
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' },
    { name: '', date: '', location: '', svg: 'M 9.539489 9.12441 L 500.655114 481.839623 M -63.500568 16.439416 L -64.50142 17.43809 M 8.642045 490.580778 L 508.499432 12.437353 M 844.50142 110.436321 L 844.50142 108.438974 M 826.500852 114.438384 L 833.499432 114.438384 M 867.498864 107.436616 L 866.501705 107.436616 M 2.500284 13.937205 C 2.500284 20.290389 8.095455 25.438532 15.001705 25.438532 C 21.904261 25.438532 27.499432 20.290389 27.499432 13.937205 C 27.499432 7.587706 21.904261 2.439564 15.001705 2.439564 C 8.095455 2.439564 2.500284 7.587706 2.500284 13.937205 M 492.500568 13.937205 C 492.500568 20.290389 498.095739 25.438532 504.998295 25.438532 C 511.904545 25.438532 517.499716 20.290389 517.499716 13.937205 C 517.499716 7.587706 511.904545 2.439564 504.998295 2.439564 C 498.095739 2.439564 492.500568 7.587706 492.500568 13.937205 M 2.500284 486.081221 C 2.500284 492.430719 8.095455 497.578862 15.001705 497.578862 C 21.904261 497.578862 27.499432 492.430719 27.499432 486.081221 C 27.499432 479.728037 21.904261 474.579894 15.001705 474.579894 C 8.095455 474.579894 2.500284 479.728037 2.500284 486.081221 M 492.500568 486.081221 C 492.500568 492.430719 498.095739 497.578862 504.998295 497.578862 C 511.904545 497.578862 517.499716 492.430719 517.499716 486.081221 C 517.499716 479.728037 511.904545 474.579894 504.998295 474.579894 C 498.095739 474.579894 492.500568 479.728037 492.500568 486.081221' }
]
*/}

const data_forContact_01 = [
    {
        id: 1,
        background: `contact-intro-background`,
        profile: `contact-profile`,
        heading1: 'STATUS:',
        content1: `PHONE: 1-619-549-1961${'\n'}EMAIL:  K3NT0154@GMAIL.COM`,
        heading2: `KENT VO`,
        content2: `SAN DIEGO, UNITED STATES`,
        heading3: `Social Media:`,
        content3: `Coming Soon...`
    }
]

export default Contact;