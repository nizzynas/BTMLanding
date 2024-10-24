import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import SmartSortingIcon from 'public/images/features/smart-sorting.svg'
import MultiAccountingIcon from 'public/images/features/multi-accounting.svg'
import SlippageIcon from 'public/images/features/slippage.svg'
import DurationIcon from 'public/images/features/duration.svg'
import GasEstimationIcon from 'public/images/features/gas-estimation.svg'
import RecipientAddressIcon from 'public/images/features/recipient-address.svg'
import RouteRescuerIcon from 'public/images/features/route-rescuer.svg'
import MultilingualIcon from 'public/images/features/multilingual.svg'

function Features() {
  return (
    <Section>
      <>
        <Tile.Group>
          <Tile
            icon={<SmartSortingIcon/>}
            title="Optimized Transaction Routing"
            description="Automatically select the most efficient path for crypto transactions based on fees and speed, ensuring optimal performance."
          />
          <Tile
            icon={<MultiAccountingIcon/>}
            title="Unified Wallet Management"
            description="Seamlessly manage multiple wallets across different blockchain networks for easier access to funds."
          />
          <Tile
            icon={<MultilingualIcon/>}
            title="Multilingual translation"
            description="Immersive experience by offering multi-language support for users worldwide."
          />
          <Tile
            slots={2}
            icon={<SlippageIcon/>}
            title="Slippage Protection"
            description="Control slippage levels during crypto transactions to prevent unexpected losses, ensuring reliable performance for users."
          />
          <Tile
            icon={<DurationIcon/>}
            title="Transaction Time Estimate"
            description="Get accurate estimates of transaction times, allowing users to plan their interactions with confidence."
          />
          <Tile
            icon={<GasEstimationIcon/>}
            title="Transaction Fee Estimator"
            description="Estimate transaction fees based on current blockchain conditions, ensuring cost-effective crypto transactions."
          />
          <Tile
            icon={<RecipientAddressIcon/>}
            title="Recipient Address Management"
            description="Send and receive crypto funds quickly by entering or selecting a recipient address."
          />
          <Tile
            icon={<RouteRescuerIcon/>}
            title="Route Failure Protection"
            description="Automatically adjust transaction routes if insufficient gas is detected, ensuring smooth operation transactions."
          />

{/*
          <Tile
            icon={<MultilingualIcon/>}
            title="Multilingual translation"
            description="Use the interface in your native language"
          />
          <Tile
            slots={2}
            icon={<RoutePreviewIcon/>}
            title="Route's preview"
            description="Quickly preview the best route with all its attributes"
          />

*/}
        </Tile.Group>
      </>
    </Section>
  )
}

export { Features }
