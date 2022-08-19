import { AddIcon, DeleteIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  IconButton,
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

function ReportAdminListPage() {
  const data = getData(true, false);

  const columns = Object.keys(data[0]);

  return (
    <Box>
      <Heading>Admin - Reports</Heading>

      <Box mt={5}>
        <Link to={'/admin/create_report'}>
          <Button leftIcon={<AddIcon />} colorScheme="blue">
            New Report
          </Button>
        </Link>
      </Box>

      <Box mt={5} border="1px" borderRadius={10} borderColor="gray" padding={2}>
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
                    {columns.map((column, idx) => {
                      return <Td key={`${column}-${row.id}-${idx}`}>{renderColumn(row[column])}</Td>;
                    })}
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
                      <Tooltip label="Delete report">
                        <IconButton
                          colorScheme="red"
                          variant="ghost"
                          aria-label="Delete"
                          ml={2}
                          icon={<DeleteIcon />}
                          size="xs"
                        />
                      </Tooltip>
                      <Tooltip label="Edit report">
                        <IconButton
                          colorScheme="blue"
                          aria-label="Edit"
                          icon={<EditIcon />}
                          size="xs"
                          ml={2}
                          variant="ghost"
                        />
                      </Tooltip>
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

export default ReportAdminListPage;
