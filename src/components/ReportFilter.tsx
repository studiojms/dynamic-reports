import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, FormControl, FormLabel, IconButton, Input, Select } from '@chakra-ui/react';
import ReactSelect from 'react-select';

function ReportFilter({ columns, onAddClick }: { columns: string[]; onAddClick: () => void }) {
  const operators = [
    {
      label: 'is equal to',
      value: '=',
    },
    {
      label: 'is not equal to',
      value: '<>',
    },
    {
      label: 'is greater than',
      value: '>',
    },
    {
      label: 'is greater than or equal to',
      value: '>=',
    },
    {
      label: 'is less than',
      value: '<',
    },
    {
      label: 'is less than or equal to',
      value: '<=',
    },
    {
      label: 'starts with',
      value: 'like%',
    },
    {
      label: 'ends with',
      value: '%like',
    },
    {
      label: 'contains',
      value: '%like%',
    },
  ];

  return (
    <Flex gap={2} mt={5}>
      <Box flex={1}>
        <FormControl>
          <FormLabel>Field</FormLabel>
          <Select backgroundColor="white">
            {columns.map((column, idx) => {
              return (
                <option key={column} value={column}>
                  {column.toUpperCase()}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Operator</FormLabel>
          <Select backgroundColor="white">
            {operators.map((operator) => {
              return (
                <option key={operator.value} value={operator.value}>
                  {operator.label}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box flex={1}>
        <FormControl>
          <FormLabel>Value</FormLabel>
          <Input backgroundColor="white" />
        </FormControl>
      </Box>
      <Box mt={8}>
        <IconButton
          colorScheme="blue"
          variant="outline"
          aria-label="Add"
          icon={<AddIcon />}
          ml={4}
          onClick={onAddClick}
        />
      </Box>
    </Flex>
  );
}

export default ReportFilter;
