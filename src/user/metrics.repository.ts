import { MetricsController } from './metrics.controller';

export class MetricsRepository {
  leakUpward(): number {
    return new MetricsController().getMetric();
  }
}
