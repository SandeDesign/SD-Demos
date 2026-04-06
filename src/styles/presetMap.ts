import { PresetName } from './presets';

export const presetMap: Record<string, { style1: PresetName; style2: PresetName }> = {
  kapper:       { style1: 'editorial',  style2: 'brutalist' },
  restaurant:   { style1: 'artisan',    style2: 'retro' },
  fitness:      { style1: 'bold',       style2: 'tech' },
  advocaat:     { style1: 'corporate',  style2: 'luxe' },
  tandarts:     { style1: 'soft',       style2: 'organic' },
  bouwbedrijf:  { style1: 'brutalist',  style2: 'bold' },
  schoonheid:   { style1: 'luxe',       style2: 'soft' },
  makelaar:     { style1: 'magazine',   style2: 'corporate' },
  fotograaf:    { style1: 'editorial',  style2: 'magazine' },
  accountant:   { style1: 'corporate',  style2: 'tech' },
  bloemist:     { style1: 'organic',    style2: 'artisan' },
  autogarage:   { style1: 'bold',       style2: 'brutalist' },
  yoga:         { style1: 'soft',       style2: 'editorial' },
  bakkerij:     { style1: 'retro',      style2: 'playful' },
  dierenarts:   { style1: 'playful',    style2: 'organic' },
  elektricien:  { style1: 'tech',       style2: 'magazine' },
  schilder:     { style1: 'artisan',    style2: 'retro' },
  loodgieter:   { style1: 'magazine',   style2: 'playful' },
  tuinman:      { style1: 'organic',    style2: 'artisan' },
  schoonmaak:   { style1: 'retro',      style2: 'luxe' },
};
