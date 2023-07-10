interface CarbonDioxideAmount {
  grams: number;
  litres: number;
}

interface Statistics {
  adjustedBytes: number;
  energy: number;
  co2: CarbonDioxideAmount;
}

export interface Site {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: Statistics;
  timestamp: number;
}
