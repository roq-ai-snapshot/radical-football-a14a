const mapping: Record<string, string> = {
  academies: 'academy',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
