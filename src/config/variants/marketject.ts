// MarketJect variant (CEO Intelligence) — marketject.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Finance-specific geo data (stock exchanges, financial centers, central banks)
export * from '../finance-geo';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// MarketJect FEEDS configuration
import type { Feed } from '@/types';
import { rssProxyUrl } from '@/utils';

const rss = rssProxyUrl;

export const FEEDS: Record<string, Feed[]> = {
  markets: [
    { name: 'CNBC', url: rss('https://www.cnbc.com/id/100003114/device/rss/rss.html') },
    { name: 'MarketWatch', url: rss('https://news.google.com/rss/search?q=site:marketwatch.com+markets+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Yahoo Finance', url: rss('https://finance.yahoo.com/rss/topstories') },
    { name: 'Seeking Alpha', url: rss('https://seekingalpha.com/market_currents.xml') },
    { name: 'Reuters Markets', url: rss('https://news.google.com/rss/search?q=site:reuters.com+markets+stocks+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Bloomberg Markets', url: rss('https://news.google.com/rss/search?q=site:bloomberg.com+markets+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NDTV Business', url: rss('https://news.google.com/rss/search?q=site:ndtv.com+business+markets+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Nikkei Asia', url: rss('https://news.google.com/rss/search?q=site:asia.nikkei.com+markets+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
  strategy: [
    { name: 'Harvard Business Review', url: rss('https://news.google.com/rss/search?q=site:hbr.org+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'McKinsey', url: rss('https://news.google.com/rss/search?q=site:mckinsey.com+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Fortune', url: rss('https://news.google.com/rss/search?q=site:fortune.com+CEO+OR+leadership+OR+strategy+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Forbes Leadership', url: rss('https://news.google.com/rss/search?q=site:forbes.com+CEO+OR+leadership+OR+"business+strategy"+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'WSJ Business', url: rss('https://news.google.com/rss/search?q=site:wsj.com+business+strategy+OR+CEO+OR+leadership+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Business Insider', url: rss('https://news.google.com/rss/search?q=site:businessinsider.com+CEO+OR+strategy+OR+leadership+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],
  macro: [
    { name: 'Central Bank Policy', url: rss('https://news.google.com/rss/search?q=("central+bank"+OR+"interest+rate"+OR+"rate+decision"+OR+"monetary+policy")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Federal Reserve', url: rss('https://news.google.com/rss/search?q=("Federal+Reserve"+OR+"Fed+rate"+OR+"FOMC"+OR+"Jerome+Powell")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'ECB & BoJ', url: rss('https://news.google.com/rss/search?q=(ECB+OR+"Bank+of+Japan"+OR+"European+Central+Bank"+OR+"Christine+Lagarde")+monetary+OR+rate+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Economic Data', url: rss('https://news.google.com/rss/search?q=(CPI+OR+GDP+OR+PMI+OR+"jobs+report"+OR+"inflation+data"+OR+"nonfarm+payroll")+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],
  regulation: [
    { name: 'SEC & FTC', url: rss('https://news.google.com/rss/search?q=(SEC+OR+FTC+OR+"antitrust"+OR+"regulatory+action")+tech+OR+finance+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Regulation', url: rss('https://news.google.com/rss/search?q=("AI+regulation"+OR+"AI+act"+OR+"AI+policy"+OR+"AI+executive+order"+OR+"AI+governance")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Trade Policy', url: rss('https://news.google.com/rss/search?q=("trade+war"+OR+tariff+OR+"trade+policy"+OR+"export+controls"+OR+sanctions)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Data Privacy', url: rss('https://news.google.com/rss/search?q=("data+privacy"+OR+GDPR+OR+"privacy+regulation"+OR+"data+protection")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
  tech: [
    { name: 'TechCrunch', url: rss('https://techcrunch.com/feed/') },
    { name: 'The Verge', url: rss('https://www.theverge.com/rss/index.xml') },
    { name: 'MIT Tech Review', url: rss('https://news.google.com/rss/search?q=site:technologyreview.com+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Ars Technica', url: rss('https://feeds.arstechnica.com/arstechnica/technology-lab') },
    { name: 'NDTV Tech', url: rss('https://news.google.com/rss/search?q=site:ndtv.com+gadgets+OR+tech+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'CNBC Tech', url: rss('https://news.google.com/rss/search?q=site:cnbc.com+technology+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],
  ai: [
    { name: 'AI Industry News', url: rss('https://news.google.com/rss/search?q=(OpenAI+OR+Anthropic+OR+"Google+DeepMind"+OR+Meta+AI)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'VentureBeat AI', url: rss('https://news.google.com/rss/search?q=site:venturebeat.com+AI+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Research', url: rss('https://news.google.com/rss/search?q=("large+language+model"+OR+"foundation+model"+OR+"generative+AI"+OR+"AI+benchmark")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI Business', url: rss('https://news.google.com/rss/search?q=("AI+startup"+OR+"AI+funding"+OR+"AI+enterprise"+OR+"AI+adoption")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
  security: [
    { name: 'Krebs on Security', url: rss('https://krebsonsecurity.com/feed/') },
    { name: 'The Hacker News', url: rss('https://feeds.feedburner.com/TheHackersNews') },
    { name: 'Dark Reading', url: rss('https://www.darkreading.com/rss.xml') },
    { name: 'CISA Alerts', url: rss('https://news.google.com/rss/search?q=site:cisa.gov+advisory+OR+alert+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Cyber Incidents', url: rss('https://news.google.com/rss/search?q=("data+breach"+OR+"ransomware+attack"+OR+"cyber+attack"+OR+"security+incident")+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],
  geopolitics: [
    { name: 'Al Jazeera', url: rss('https://www.aljazeera.com/xml/rss/all.xml') },
    { name: 'Geopolitical Risk', url: rss('https://news.google.com/rss/search?q=("geopolitical+risk"+OR+"geopolitical+tension"+OR+"international+conflict")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Sanctions & Trade War', url: rss('https://news.google.com/rss/search?q=(sanctions+OR+"trade+war"+OR+embargo+OR+"export+ban")+country+OR+nation+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Military & Defense', url: rss('https://news.google.com/rss/search?q=("military+conflict"+OR+"defense+spending"+OR+"NATO"+OR+"military+buildup")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Global Affairs', url: rss('https://news.google.com/rss/search?q=site:foreignaffairs.com+OR+site:foreignpolicy.com+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
  ipo: [
    { name: 'IPO News', url: rss('https://news.google.com/rss/search?q=(IPO+OR+"initial+public+offering"+OR+"going+public"+OR+SPAC)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Earnings Reports', url: rss('https://news.google.com/rss/search?q=("earnings+report"+OR+"quarterly+results"+OR+"beat+estimates"+OR+"revenue+growth")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'M&A News', url: rss('https://news.google.com/rss/search?q=("merger"+OR+"acquisition"+OR+"buyout"+OR+"deal+value"+OR+"takeover+bid")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
  analysis: [
    { name: 'Market Outlook', url: rss('https://news.google.com/rss/search?q=("market+outlook"+OR+"market+forecast"+OR+"bull+market"+OR+"bear+market"+OR+"market+correction")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Bank Research', url: rss('https://news.google.com/rss/search?q=("Goldman+Sachs"+OR+"Morgan+Stanley"+OR+"JP+Morgan"+OR+"Bank+of+America")+outlook+OR+forecast+OR+downgrade+OR+upgrade+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Risk & Volatility', url: rss('https://news.google.com/rss/search?q=(VIX+OR+"market+volatility"+OR+"risk+sentiment"+OR+"flight+to+safety")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for MarketJect (CEO Intelligence)
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'MarketJect Map', enabled: true, priority: 1 },
  'live-news': { name: 'CEO Briefing', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  markets: { name: 'Live Markets', enabled: true, priority: 1 },
  'macro-signals': { name: 'Macro Signals', enabled: true, priority: 1 },
  heatmap: { name: 'Sector Heatmap', enabled: true, priority: 1 },
  tech: { name: 'Tech Industry', enabled: true, priority: 1 },
  security: { name: 'Cybersecurity', enabled: true, priority: 1 },
  ai: { name: 'AI & ML', enabled: true, priority: 1 },
  geopolitics: { name: 'Geopolitics', enabled: true, priority: 1 },
  strategy: { name: 'Strategy & Leadership', enabled: true, priority: 1 },
  'stock-analysis': { name: 'Stock Analysis', enabled: true, priority: 2, premium: 'locked' },
  'daily-market-brief': { name: 'Daily Market Brief', enabled: true, priority: 2, premium: 'locked' },
  ipo: { name: 'IPOs, Earnings & M&A', enabled: true, priority: 2 },
  regulation: { name: 'Regulation & Policy', enabled: true, priority: 2 },
  macro: { name: 'Macro Economy', enabled: true, priority: 2 },
  analysis: { name: 'Market Analysis', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  economic: { name: 'Economic Data', enabled: true, priority: 2 },
  polymarket: { name: 'Predictions', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 2 },
};

// MarketJect map layers — blend of finance + geopolitical + cyber
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  satellites: false,

  conflicts: true,
  bases: true,
  cables: true,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: true,
  waterways: false,
  outages: true,
  cyberThreats: true,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: true,
  financialCenters: true,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
};

// Mobile defaults — minimal for performance
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  satellites: false,

  conflicts: true,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: true,
  weather: false,
  economic: false,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: true,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'marketject',
  description: 'CEO-level market, tech & geopolitical intelligence dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
