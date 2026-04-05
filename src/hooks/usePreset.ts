import { useDemo } from '../context/DemoContext';
import { presetMap } from '../styles/presetMap';
import { presets, Preset } from '../styles/presets';

export function usePreset(): Preset {
  const { demo, styleId } = useDemo();
  const mapping = presetMap[demo.id];
  const presetName = mapping
    ? (styleId === 'style-1' ? mapping.style1 : mapping.style2)
    : 'corporate';
  return presets[presetName];
}
