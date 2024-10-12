import { useMemo } from 'react';
import { useTokenPrice } from '@/hooks/queries/useTokenPrice';
import type { TRouteWithMeta, TRangingRoute } from '@/views/IndexPage/Demo/components/Routes';
import { calculateRouteTime, EVM_BASE_TOKEN_ADDRESS, getRouteByMinProperty, getTokenWorth, getUsdAmount } from './utils';

function useRangedRoutes(routes: TRouteWithMeta[]) {
  const { data: toTokenPrice } = useTokenPrice({ address: EVM_BASE_TOKEN_ADDRESS, chainId: 1 } || {});

  const bestItemID = routes.length === 0 ? -1 : 0;
  const bestTimeItemID = useMemo(
    () => getRouteByMinProperty(routes, route => calculateRouteTime(route.calculatedSteps)),
    [routes]
  );

  const routesIDList = useMemo(
    () =>
      [
        bestItemID,
        ...[bestTimeItemID]
      ]
        .concat(Array.from(routes.keys()))
        .filter(v => v >= 0)
        .filter((v, i, a) => a.indexOf(v) === i),
    [bestItemID, bestTimeItemID, routes]
  );

  const formatterRouterList = useMemo(() => routesIDList.map(ID => routes[ID]), [routesIDList, routes]);

  const rangedRoutes: TRangingRoute[] = useMemo(() => {
    if (!formatterRouterList.length) {
      return [];
    }

    const bestItem = routes[bestItemID];
    const bestWorth = getTokenWorth(bestItem.toTokenAmount, bestItem.calculatedSteps);
    const bestUSDPrice = toTokenPrice ? getUsdAmount(bestWorth, toTokenPrice) : null;

    return formatterRouterList.map((route) => {
      const tokenWorth = getTokenWorth(route.toTokenAmount, route.calculatedSteps).toString();
      const priceUSD = toTokenPrice ? getUsdAmount(tokenWorth, toTokenPrice).toString() : null;
      const loss = bestUSDPrice && priceUSD ? (Number(bestUSDPrice) - Number(priceUSD)) / (Number(bestUSDPrice) / 100) : null;
      const estimateTime = calculateRouteTime(route.calculatedSteps);

      return {
        ...route,
        meta: {
          ...route.meta,
          isBest: route === bestItem,
          isBestTime: route === routes[bestTimeItemID],
          estimateTime,
          price: {
            tokenWorth,
            priceUSD,
            loss
          }
        }
      } as TRangingRoute;
    });
  }, [formatterRouterList, bestTimeItemID, bestItemID, toTokenPrice]);

  return rangedRoutes;
}

export { useRangedRoutes };
