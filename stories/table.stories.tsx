import { Table } from '../src/table/table';

import { COLUMNS, TABLE_DATA } from '../src/table/table.constants';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    columns: {
      control: {
        type: 'object',
      },
    },
    dataSource: {
      control: {
        type: 'object',
      },
    },
  },
};

export const TableDefault = (args: any) => {
  return <Table columns={COLUMNS} dataSource={TABLE_DATA} />;
};
