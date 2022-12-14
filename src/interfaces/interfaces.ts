export interface Location {
  id: string;
  country: string;
  city: string;
}

export interface Temperature {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
  location?: string;
  temperature: Temperature;
}
