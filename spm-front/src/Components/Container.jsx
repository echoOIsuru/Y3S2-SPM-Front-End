import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import TopNavigation from './TopNavigation'

function Container({ data }) {
    return (
        <body id="page-top">
            <div id="wrapper">
                <NavigationBar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <TopNavigation />
                        {/* Content Route */}
                        {data}
                        {/* End */}
                        <Footer />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Container