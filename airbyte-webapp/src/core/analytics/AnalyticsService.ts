interface SegmentAnalytics {
  page: (name?: string) => void;
  reset: () => void;
  alias: (newId: string) => void;
  track: (name: string, properties: any) => void;
  identify: (userId: string, traits: any) => void;
  group: (organisationId: string, traits: any) => void;
}

export class AnalyticsService {
  private static getAnalytics = (): SegmentAnalytics | undefined =>
    (window as any).analytics;

  static alias = (newId: string) =>
    AnalyticsService.getAnalytics()?.alias?.(newId);

  static page = (name: string) => AnalyticsService.getAnalytics()?.page?.(name);

  static reset = () => AnalyticsService.getAnalytics()?.reset?.();

  static track = (name: string, properties: any) =>
    AnalyticsService.getAnalytics()?.track?.(name, properties);

  static identify = (userId: string, traits: any = {}) =>
    AnalyticsService.getAnalytics()?.identify?.(userId, traits);

  static group = (organisationId: string, traits: any = {}) =>
    AnalyticsService.getAnalytics()?.group?.(organisationId, traits);
}