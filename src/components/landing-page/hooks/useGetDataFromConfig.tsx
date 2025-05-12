import type { LeadfunnelConfig } from '../../../utils/types';

export default function useGetDataFromConfig(config: LeadfunnelConfig) {
  return {
    showPriceModalInsuranceCondition: config?.showPriceModalInsuranceCondition || {},
    logoShow: config?.certificateLogos || ['tuv', 'tls'],
    enableStickyMobileHead: config?.header?.enableStickyMobileHead || false,
  };
}
