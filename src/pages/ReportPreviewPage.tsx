import { DownloadIcon, Search2Icon, SettingsIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReportFilter from '../components/ReportFilter';
import { getReport } from '../utils/data';
import { renderColumn } from '../utils/utils';

function ReportPreviewPage() {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [report, setReport] = useState<Record<string, any>>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<Record<string, any>[]>([]);
  const [totalOptionalFilters, setTotalOptionalFilters] = useState(1);
  const [showData, setShowData] = useState(false);
  const { id } = useParams();
  const toast = useToast();

  useEffect(() => {
    if (id) {
      setReport(() => getReport(id));
    }
  }, []);

  useEffect(() => {
    setData(report.data);
    if (report.data && report.data.length > 0) {
      setColumns(Object.keys(report?.data?.[0]) || []);
    } else {
      setColumns([]);
    }
  }, [report]);

  useEffect(() => {
    if (columns) {
      setVisibleColumns(
        columns.map((c) => {
          return {
            column: c,
            visible: true,
          };
        })
      );
    }
  }, [columns]);

  const toggleVisibleColumn = (column: string) => {
    setVisibleColumns(
      visibleColumns.map((vc) => {
        return {
          ...vc,
          visible: vc.column == column ? !vc.visible : vc.visible,
        };
      })
    );
  };

  const exportData = (format: string) => {
    toast({
      title: `${format} Export started.`,
      description: 'The export process has been started. The file will be available in a moment.',
      status: 'success',
      duration: 10000,
      position: 'top-right',
      variant: 'left-accent',
      isClosable: true,
    });
  };

  const hasData = data?.length > 0;

  return (
    <Box mt={5} height="200vh">
      <Heading>{report.name}</Heading>
      <Text size="xs" color="gray.500" mt={3}>
        {report.description}
      </Text>

      <Box bgColor="gray.50" padding={5}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight={500}>
                  Required filters
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {report.requiredFilters &&
                report.requiredFilters.map((reqFilter: string) => {
                  const label = reqFilter.replace('_', ' ').toUpperCase();
                  return (
                    <FormControl key={reqFilter} isRequired>
                      <FormLabel>{label}</FormLabel>
                      <Input placeholder={label} backgroundColor="white" />
                    </FormControl>
                  );
                })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight={500}>
                  Aditional filters
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {new Array(totalOptionalFilters).fill('').map((_, key) => {
                return (
                  <ReportFilter
                    key={key}
                    columns={['', ...columns]}
                    onAddClick={() => setTotalOptionalFilters((v) => v + 1)}
                  />
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box textAlign="right" mt={5}>
          <Button leftIcon={<Search2Icon />} colorScheme="blue" onClick={() => setShowData(true)}>
            Show Preview
          </Button>
        </Box>
      </Box>

      {showData && (
        <Box mt={5}>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="orange" variant="outline" leftIcon={<SettingsIcon />}>
              Configure columns
            </MenuButton>
            <MenuList>
              {columns.map((column, idx) => {
                return (
                  <MenuItem key={idx} onClick={() => toggleVisibleColumn(column)}>
                    <Checkbox mr={2} isChecked={visibleColumns?.find((vc) => vc.column == column)?.visible} />
                    {column.toUpperCase()}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={IconButton} colorScheme="orange" icon={<DownloadIcon />} ml={2}>
              Export
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => exportData('Excel')}>Excel (.xlsx)</MenuItem>
              <MenuItem onClick={() => exportData('CSV')}>CSV</MenuItem>
              <MenuItem onClick={() => exportData('PDF')}>PDF</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
      {showData && (
        <Box mt={10} border="1px" borderRadius={10} borderColor="gray" padding={2}>
          <TableContainer>
            <Table variant="striped" colorScheme="facebook" size="sm">
              <Thead>
                <Tr>
                  {visibleColumns
                    .filter((vc) => vc.visible)
                    .map((vcolumn, idx) => (
                      <Th key={`${vcolumn.column}-${idx}`}>{vcolumn.column}</Th>
                    ))}
                </Tr>
              </Thead>
              <Tbody>
                {!hasData && (
                  <Tr>
                    <Td textAlign="center">No records found</Td>
                  </Tr>
                )}
                {data?.map((row: Record<string, any>, idx) => {
                  return (
                    <Tr key={row.id || idx}>
                      {visibleColumns
                        .filter((vc) => vc.visible)
                        .map((vcolumn, idx) => (
                          <Td key={`${vcolumn.column}-${row.id}-${idx}`}>{renderColumn(row[vcolumn.column])}</Td>
                        ))}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}

export default ReportPreviewPage;
