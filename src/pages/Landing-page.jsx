import React from 'react'
import Hero from '../components/landing-page-components/Hero.jsx'
import DiscoverSection from '../components/landing-page-components/Discover.jsx'
import NewArrive from '../components/landing-page-components/New-arrive.jsx'
import Offers from '../components/landing-page-components/Offers.jsx'

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <DiscoverSection />
            <NewArrive />
            <Offers />
        </div>
    )
}
