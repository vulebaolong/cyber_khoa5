import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popconfirm, Space, Table, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { getListFilmsMID } from "../../../redux/slices/QuanLyPhimSlice";
import { history } from "./../../../App";

function ListFilm() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFilmsMID());
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
                        <img
                            className="w-full h-full object-contain"
                            src={text.hinhAnh}
                            alt=""
                        />
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
                return (
                    <div className="flex gap-2">
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => {
                                history.navigate(`/admin/film/editfilm/${record.maPhim}`);
                            }}
                        />
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                                console.log("xoá");
                            }}
                        />
                    </div>
                );
            },
        },
    ];

    return (
        <Form>
            <Table
                rowKey={"maPhim"}
                rowClassName="editable-row"
                theme={"dark"}
                columns={columns}
                dataSource={listFilms}
            />
        </Form>
    );
}
export default ListFilm;
