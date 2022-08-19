import { CheckIcon, ViewOffIcon } from '@chakra-ui/icons';

export function renderColumn(value: any) {
  switch (typeof value) {
    case 'boolean':
      return renderBooleanColumn(value);
    case 'object':
      if (Array.isArray(value)) {
        return value.join(', ');
      }
    default:
      return value;
  }
}

export function renderBooleanColumn(value: boolean) {
  return value ? <CheckIcon /> : <ViewOffIcon />;
}

export function omit(keys: any, obj: Record<string, unknown>): any {
  if (!keys.length) return obj;
  const { [keys.pop()]: omitted, ...rest } = obj;
  return omit(keys, rest);
}
