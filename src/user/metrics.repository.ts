import { MetricsController } from './metrics.controller';

export class MetricsRepository {
  leakUpward(): number {
    return new MetricsController().getMetric();
  }
}
// retrigger 1785582704
