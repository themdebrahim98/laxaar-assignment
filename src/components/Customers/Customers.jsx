import React, { useState } from "react";
import "./Customers.scss";
import { Input, Space, Table, Tag, Tooltip } from "antd";
import moment from "moment";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MailOutlined,
  PrinterOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "CUSTOMER NAME",
    dataIndex: "name",
  },
  {
    title: "DATE",
    dataIndex: "date",
  },
  {
    title: "JOB NUMBER",
    dataIndex: "jobNumber",
  },
  {
    title: "MOBILE NUMBER",
    dataIndex: "mobileNumber",
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
  },
];

const actionsLists = [
  {
    title: "Edit",
    icon: EditOutlined,
    handleClick: () => {
      console.log("Edit");
    },
  },
  {
    title: "View",
    icon: EyeOutlined,
    handleClick: () => {
      console.log("View");
    },
  },
  {
    title: "Delete",
    icon: DeleteOutlined,
    handleClick: () => {
      console.log("Delete");
    },
  },
  {
    title: "Mail",
    icon: MailOutlined,
    handleClick: () => {
      console.log("Mail");
    },
  },
  {
    title: "Print Out",
    icon: PrinterOutlined,
    handleClick: () => {
      console.log("Print out");
    },
  },
];

const actionsContent = (
  <Space>
    {actionsLists.map((elm, idx) => (
      <Tooltip title={elm.title} color="#F87060" key={idx}>
        <elm.icon
          style={{ color: "#F87060", cursor: "pointer" }}
          onClick={elm.handleClick}
        />
      </Tooltip>
    ))}
  </Space>
);

const getStatusBaseTag = (status) => {
  if (status === "completed") {
    return <Tag color="#3BB900">{status}</Tag>;
  } else if (status === "processing") {
    return <Tag color="#FFA319">{status}</Tag>;
  } else {
    return <Tag color="#FF1943">{status}</Tag>;
  }
};

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    date: moment().toDate().toLocaleDateString(),
    jobNumber: `ABC0006`,
    mobileNumber: `${Math.round(Math.random() * 10000000000 + 1)}`,
    status:
      i / 2 == 0
        ? getStatusBaseTag("completed")
        : getStatusBaseTag("processing"),
    actions: actionsContent,
  });
}

export default function Customers() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    type: "checkbox",
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="customerWrapper">
      <div className="filterInputBoxWrapper">
        <Input
          className="filterInputBox"
          placeholder="Search..."
          prefix={<SearchOutlined className="filterInputBoxSearchIcon" />}
        />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        virtual
        pagination={{
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
}
