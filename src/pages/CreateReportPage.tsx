import { CheckIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import ReactSelect from 'react-select';

function CreateReportPage() {
  const navigate = useNavigate();

  const dbs = [
    {
      label: 'Prod Snowflake',
      value: 'Prod Snowflake',
    },
    {
      label: 'Cobalt Aurora',
      value: 'Cobalt Aurora',
    },
    {
      label: 'Cobalt Memberships',
      value: 'Cobalt Memberships',
    },
    {
      label: 'Cobalt Dynamodb',
      value: 'Cobalt Dynamodb',
    },
    {
      label: 'Orange Memberships',
      value: 'Orange Memberships',
    },
    {
      label: 'Orange Dynamodb',
      value: 'Orange Dynamodb',
    },
  ];

  const tables = [
    {
      tablename: 'data_sharing_segment',
    },
    {
      tablename: 'data_sharing_segment_asin',
    },
    {
      tablename: 'product_day',
    },
    {
      tablename: 'segment_brand_day',
    },
    {
      tablename: 'segment_day',
    },
    {
      tablename: 'segment_product',
    },
    {
      tablename: 'segment_product_day',
    },
    {
      tablename: 'segment_product_diff',
    },
    {
      tablename: 'segment_product_rollups',
    },
    {
      tablename: 'segment_product_snapshot',
    },
    {
      tablename: 'seller',
    },
  ];

  const fields = [
    { label: 'segment_id', value: 'segment_id' },
    { label: 'day', value: 'day' },
    { label: 'id', value: 'id' },
    { label: 'asin', value: 'asin' },
    { label: 'country', value: 'country' },
    { label: 'brand', value: 'brand' },
    { label: 'variant_count', value: 'variant_count' },
    { label: 'seller_id', value: 'seller_id' },
    { label: 'seller_type', value: 'seller_type' },
    { label: 'is_shared_bsr', value: 'is_shared_bsr' },
    { label: 'parent_asin', value: 'parent_asin' },
    { label: 'review_count', value: 'review_count' },
    { label: 'ratings', value: 'ratings' },
    { label: 'sales', value: 'sales' },
    { label: 'sales_1p', value: 'sales_1p' },
    { label: 'sales_3p', value: 'sales_3p' },
    { label: 'revenue', value: 'revenue' },
    { label: 'revenue_1p', value: 'revenue_1p' },
    { label: 'revenue_3p', value: 'revenue_3p' },
    { label: 'price', value: 'price' },
    { label: 'is_available', value: 'is_available' },
    { label: 'category', value: 'category' },
    { label: 'sub_category', value: 'sub_category' },
    { label: 'category_rank', value: 'category_rank' },
    { label: 'subcategory_rank', value: 'subcategory_rank' },
    { label: 'new_offer_count', value: 'new_offer_count' },
    { label: 'used_offer_count', value: 'used_offer_count' },
    { label: 'subcategories', value: 'subcategories' },
    { label: 'has_revenue', value: 'has_revenue' },
    { label: 'reference_product_id', value: 'reference_product_id' },
    { label: 'created_at', value: 'created_at' },
    { label: 'updated_at', value: 'updated_at' },
    { label: 'is_parent', value: 'is_parent' },
    { label: 'is_sales_imputed', value: 'is_sales_imputed' },
    { label: 'seller_type_1p', value: 'seller_type_1p' },
    { label: 'seller_id_1p', value: 'seller_id_1p' },
    { label: 'seller_type_3p', value: 'seller_type_3p' },
    { label: 'seller_id_3p', value: 'seller_id_3p' },
    { label: 'version', value: 'version' },
  ];

  return (
    <Box>
      <Heading>Admin - Create Report</Heading>

      <Box bgColor="gray.50" padding={5}>
        <Flex gap={2} mt={5}>
          <Box flex={3}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input backgroundColor="white" />
            </FormControl>
          </Box>
          <Box flex={1}>
            <FormControl isRequired>
              <FormLabel>Database</FormLabel>
              <ReactSelect options={dbs} placeholder="Select Database" />
            </FormControl>
          </Box>
        </Flex>
        <Flex gap={2} mt={5}>
          <Box flex={1}>
            <FormControl isRequired>
              <FormLabel>Database Object</FormLabel>
              <ReactSelect
                options={tables}
                placeholder="Select a table"
                getOptionLabel={(option) => option.tablename}
                getOptionValue={(option) => option.tablename}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex gap={2} mt={5}>
          <Box flex={15}>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input backgroundColor="white" />
            </FormControl>
          </Box>
          <Box flex={1}>
            <FormControl>
              <FormLabel>Public?</FormLabel>
              <Checkbox backgroundColor="white" />
            </FormControl>
          </Box>
        </Flex>
        <Flex gap={2} mt={5} flexDirection="column">
          <Box textAlign="right">
            <Button colorScheme="blue" variant="outline" leftIcon={<RepeatIcon />}>
              Test Connection
            </Button>
          </Box>
        </Flex>
        <Flex gap={2} mt={5}>
          <Box flex={1}>
            <FormControl>
              <FormLabel>Required Filters</FormLabel>
              <ReactSelect
                isMulti
                name="filters"
                options={fields}
                placeholder="Select required filters..."
                closeMenuOnSelect={false}
              />
            </FormControl>
          </Box>
        </Flex>
      </Box>
      <Flex gap={2} mt={5} flexDirection="column">
        <Box textAlign="right">
          <Button
            colorScheme="red"
            variant="ghost"
            onClick={() => {
              navigate('/admin');
            }}
          >
            Cancel
          </Button>
          <Button colorScheme="blue" leftIcon={<CheckIcon />} ml={2}>
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default CreateReportPage;
