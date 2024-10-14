import type { TTool } from '@/api/routerApi.types'
import { ToolTypeEnum } from '@/api/routerApi.types'

const aggregators: TTool[] = [
  {
    id: null,
    name: 'Rango',
    description: 'A comprehensive liquidity aggregator tool.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/rango.svg',
  },
  {
    id: null,
    name: 'Symbiosis',
    description: 'An advanced cross-chain aggregator for DeFi.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/symbiosis.svg',
  },
  {
    id: null,
    name: 'deBridge',
    description: 'A secure cross-chain interoperability solution.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/debridge.svg',
  },
  {
    id: null,
    name: 'Li Finance',
    description: 'An aggregator focused on cross-chain swaps.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/lifi.svg',
  },
  {
    id: null,
    name: 'XY Finance',
    description: 'A DeFi aggregator with a focus on efficiency.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/xy.svg',
  },
  {
    id: null,
    name: 'Rubic',
    description: 'An aggregator for decentralized multi-chain swaps.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/rubic.svg',
  },
  {
    id: null,
    name: 'Chainswap',
    description: 'A reliable aggregator for cross-chain token swaps.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/chainswap.svg',
  },
  {
    id: null,
    name: 'o3swap',
    description: 'A multi-chain liquidity aggregator tool.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/o3swap.svg',
  },
  {
    id: null,
    name: 'iSwap',
    description: 'A decentralized aggregator for instant token swaps.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/iswap.svg',
  },
  {
    id: null,
    name: 'Socket',
    description: 'A robust aggregator for seamless asset transfers.',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/socket.svg',
  },
]

export { aggregators }
