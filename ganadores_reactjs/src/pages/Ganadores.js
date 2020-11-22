import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import API from '../utils/api';
import ListByWeeks from '../components/ListByWeeks';
import felicidades from '../images/felicidades.png';


class Ganadores extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    weeks:[],
    error:'', 
    error_winners:'', 
    isLoaded:true,
  };

  componentDidMount() {
    this.getweeks();
    this.getWinners(1);
  }

  getweeks = async ()=>{
    try {
      const weeks = await API.getweeks();
      if (weeks.length > 0) {
        this.setState({
          isLoaded: false,
          weeks: weeks
        });
      }else{
        this.setState({
          error: "Sin resultados"
        });
      }
    } catch (e) {
      alert('Error de conexión');
      console.log(e);
    }
  }
  
  getWinners = async (week_id)=>{
    try {
      const winners = await API.getWinnersByWeekId(week_id);
      if (winners.length > 0) {
        this.setState({
          winners: winners
        });
      }else{
        this.setState({
          error_winners: "Sin resultados",
          winners: winners
        });
      }
    } catch (e) {
      alert('Error de conexión');
      console.log(e);
    }
  }

  handlerWeek = (week_id)=>{
    this.getWinners(week_id);
  }
  
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { error, isLoaded, weeks, winners } = this.state;
    const columns = [
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Premio',
        dataIndex: 'prize',
        key: 'prize',
      },
    ];

    
    if (error) {
      return <div>Error: {error}</div>;
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          
          <ListByWeeks weeks={weeks} handlerWeek={this.handlerWeek}/>
          <Table columns={columns} dataSource={winners} />
          <img
              src={felicidades}
              alt="logos"
              className="logos"
            />
        </React.Fragment>
      );
    }
    
  }
}

export default Ganadores;

