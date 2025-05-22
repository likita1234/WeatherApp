export interface Location {
  id: number;
  country: string;
  name: string;
}

export interface LocationListProps {
  locations: Location[];
  handleLocation: (location: Location) => void;
}
