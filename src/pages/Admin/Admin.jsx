import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popconfirm, Space, Table, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { getListFilmsAction } from "../../redux/slices/QuanLyPhimSlice";
const data = [
    {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        name: "Joe Brown",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        name: "Jim Green",
        age: 35,
        address: "Sydney No. 1 Lake Park",
    },
    {
        name: "Jim Red",
        age: 36,
        address: "London No. 2 Lake Park",
    },
];
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
function Admin() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFilmsAction());
    }, []);
    const { listFilms } = useSelector((state) => state.QuanLyPhimSlice);

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    //==================================================
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState("");
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            console.log(row);
            setEditingKey("");
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };
    const cancel = () => {
        setEditingKey("");
    };
    const isEditing = (record) => {
        return `${record.maPhim}` === editingKey;
    };
    const edit = (record) => {
        form.setFieldsValue({
            maPhim: "",
            hinhAnh: "",
            tenPhim: "",
            moTa: "",

            ...record,
        });
        setEditingKey(`${record.maPhim}`);
    };
    const columns = [
        {
            title: "Mã phim",
            dataIndex: "maPhim",
            width: 125,
            ...getColumnSearchProps("maPhim"),
            sorter: (a, b) => a.moTa.length - b.moTa.length,
            sortDirections: ["descend", "ascend"],
            editable: true,
        },
        {
            title: "Hình ảnh",
            render: (text, record, index) => {
                // console.log(text, record, index);
                return (
                    <div className="w-20 h-20">
                        <img className="w-full h-full" src={text.hinhAnh} alt="" />
                    </div>
                );
            },
            editable: true,
        },
        {
            title: "Tên phim",
            dataIndex: "tenPhim",
            width: 125,
            ...getColumnSearchProps("tenPhim"),
            editable: true,
        },
        {
            title: "Mô tả",
            dataIndex: "moTa",
            ...getColumnSearchProps("moTa"),
            editable: true,
        },
        {
            title: "Action",
            width: 100,
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <div className="flex gap-2">
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            disabled={editingKey !== ""}
                            onClick={() => edit(record)}
                        />
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            disabled={editingKey !== ""}
                            onClick={() => {
                                console.log("xoá");
                            }}
                        />
                    </div>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                rowKey={"maPhim"}
                rowClassName="editable-row"
                theme={"dark"}
                columns={mergedColumns}
                dataSource={listFilms}
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    );
}
export default Admin;
