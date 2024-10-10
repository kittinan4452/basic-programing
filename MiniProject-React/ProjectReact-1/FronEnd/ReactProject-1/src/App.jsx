import { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import axios
import DataTable from 'react-data-table-component';
import './App.css';

const columns = [
  {
		name: "Id",
		selector: row => row.id,
    sortable: true,
    width: '100px'
	},
	{
		name: "Name",
		selector: row => row.name,
    sortable: true,
    width: '150px'
    
	},
  {
		name: 'Coverimage',
		selector: row => row.coverimage,
		sortable: true,
    cell: row => <img src={row.coverimage} alt={row.name} width={100}/>,
    width: '150px'
	},
	{
		name: 'Detail',
		selector: row => row.detail,
		sortable: true,
	},
	
  {
		name: 'Latitude',
		selector: row => row.latitude,
		sortable: true,
    width: '150px'
	},
  {
		name: 'Longitude',
		selector: row => row.longitude,
		sortable: true,
    width: '150px'
	},
];

function App() {
  const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);
  const [page,setPage] = useState(1);
  const [sortColumn,setSortColumn] =useState('');
  const [sortColumndir,setSortColumnDir] =useState('');
  const [search ,setSearch] = useState('');
  let url = `http://localhost:5000/api/attractions?page=${page}&per_page=${perPage}&delay=1`;
  
  if (sortColumn){
    url += `&sort_column=${sortColumn}&sort_direction=${sortColumndir}`
  }
  if (search){
    url += `&search=${search}`
  }
	const fetchData = async () => {
		setLoading(true);

		const response = await axios.get(url);

		setData(response.data.data);
		setTotalRows(response.data.total);
		setLoading(false);
	};

	const handlePageChange = page => {
		setPage(page); 
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		
		setPerPage(newPerPage);
		
	};
  const handleSort = (column, sortDirection) => {
    setSortColumn(column.name);
    setSortColumnDir(sortDirection);
  };

  const handleSearch = (event)=>{
      setSearch(event.target.value);
      
  }
  const handleSummit = (event)=>{
    event.preventDefault();
    fetchData()
    
}

	useEffect(() => {
		fetchData(); // fetch page 1 of DatafetchData
		
	}, [page,perPage]);
  return (
    <>
    <form onSubmit={handleSummit}>
  <label>
    Name:
    <input type="text" name="search" onChange={handleSearch}/>
  </label>
  <input type="submit" value="Submit" />
</form>
      <div><DataTable
			title="Attractions"
			columns={columns}
			data={data}
			progressPending={loading}
			pagination
			paginationServer
			paginationTotalRows={totalRows}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
      onSort={handleSort}
		/></div>
    </>
  );
}

export default App;
