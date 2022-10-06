import React, { FC } from 'react';
import { Table as AntdTable } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export type TableProps = {
  columns: ColumnsType<any>;
  dataSource: any[];
};

export const Table: FC<TableProps> = ({ columns, dataSource }) => {
  return <AntdTable columns={columns} dataSource={dataSource} />;
};
