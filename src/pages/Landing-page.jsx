import React from 'react'
import Hero from '../components/landing-page-components/Hero.jsx'
import DiscoverSection from '../components/landing-page-components/Discover.jsx'
import NewArrive from '../components/landing-page-components/New-arrive.jsx'
import Offers from '../components/landing-page-components/Offers.jsx'
import GoLearn from '../components/landing-page-components/GoLearn.jsx'
import KnowSellers from '../components/landing-page-components/San3a-seller.jsx'

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <DiscoverSection />
            <NewArrive />
            <Offers />
            <GoLearn />
            <KnowSellers />
        </div>
    )
}
