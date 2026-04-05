import { PresetName } from './presets';

export const presetMap: Record<string, { style1: PresetName; style2: PresetName }> = {
  kapper:       { style1: 'editorial',  style2: 'brutalist' },
  restaurant:   { style1: 'artisan',    style2: 'soft' },
  fitness:      { style1: 'playful',    style2: 'brutalist' },
  advocaat:     { style1: 'corporate',  style2: 'editorial' },
  tandarts:     { style1: 'soft',       style2: 'corporate' },
  bouwbedrijf:  { style1: 'brutalist',  style2: 'corporate' },
  schoonheid:   { style1: 'soft',       style2: 'playful' },
  makelaar:     { style1: 'corporate',  style2: 'artisan' },
  fotograaf:    { style1: 'editorial',  style2: 'artisan' },
  accountant:   { style1: 'corporate',  style2: 'soft' },
  bloemist:     { style1: 'artisan',    style2: 'editorial' },
  autogarage:   { style1: 'brutalist',  style2: 'playful' },
  yoga:         { style1: 'soft',       style2: 'editorial' },
  bakkerij:     { style1: 'artisan',    style2: 'playful' },
  dierenarts:   { style1: 'playful',    style2: 'soft' },
  elektricien:  { style1: 'brutalist',  style2: 'corporate' },
  schilder:     { style1: 'artisan',    style2: 'editorial' },
  loodgieter:   { style1: 'corporate',  style2: 'playful' },
  tuinman:      { style1: 'editorial',  style2: 'artisan' },
  schoonmaak:   { style1: 'soft',       style2: 'brutalist' },
};
