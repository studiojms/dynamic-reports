import { DownloadIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getData } from '../utils/data';
import { renderColumn } from '../utils/utils';

function ReportListPage() {
  const data = getData(false, false);

  const columns = Object.keys(data[0]);

  return (
    <Box>
      <Heading>Reports</Heading>

      <Box mt={10} border="1px" borderRadius={10} borderColor="gray" padding={2}>
        <TableContainer>
          <Table variant="striped" colorScheme="facebook" size="sm">
            <Thead>
              <Tr>
                {columns.map((column, idx) => (
                  <Th key={`${column}-${idx}`}>{column}</Th>
                ))}
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row: Record<string, any>) => {
                return (
                  <Tr key={row.id}>
                    {columns.map((column, idx) => (
                      <Td key={`${column}-${row.id}-${idx}`}>{renderColumn(row[column])}</Td>
                    ))}
                    <Td isNumeric>
                      <Link to={`/report/${row.id}`}>
                        <Tooltip label="Preview">
                          <IconButton
                            colorScheme="orange"
                            variant="outline"
                            aria-label="Preview"
                            icon={<SearchIcon />}
                            size="xs"
                          />
                        </Tooltip>
                      </Link>
                      <Menu>
                        <Tooltip label="Export">
                          <MenuButton as={IconButton} icon={<DownloadIcon />} size="xs" ml={2} colorScheme="orange" />
                        </Tooltip>
                        <MenuList>
                          <MenuItem>Excel (.xlsx)</MenuItem>
                          <MenuItem>CSV</MenuItem>
                          <MenuItem>PDF</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ReportListPage;
