import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Job ID', width: 70 },
  { field: 'categoryName', headerName: 'Category', width: 100 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'description', headerName: 'Description', width: 230 },
  { field: 'joblocation', headerName: 'Location', width: 80 },
  { field: 'tags', headerName: 'Tags', width: 100 },
];

const rows = [
  { id: 1, categoryName: 'Web Developer', title: 'Web Developer', description: 'looking for react developer..',joblocation: 'Kuril',tags: 'react,laravel' },
  { id: 2, categoryName: 'Software Developer', title: 'Software Developer', description: 'looking for php developer..',joblocation: 'Nikunja',tags: 'php,laravel' },
  { id: 3, categoryName: 'Web Developer', title: 'Laravel Developer', description: 'looking for laravel developer..',joblocation: 'Uttara',tags: 'laravel' },
  { id: 4, categoryName: 'Web Developer', title: 'Java Developer', description: 'looking for Web developer..',joblocation: 'Kuril',tags: 'react,laravel' },
  { id: 5, categoryName: 'Web Developer', title: 'Node Developer', description: 'looking for Java developer..',joblocation: 'Banani',tags: 'java' },
  { id: 6, categoryName: 'Web Developer', title: 'php Developer', description: 'looking for Software developer..',joblocation: 'Gulsan',tags: 'react' },
  { id: 7, categoryName: 'Web Developer', title: 'Web Developer', description: 'looking for Laravel developer..',joblocation: 'Kuril',tags: 'rlaravel' },
];

function JobsList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
}

export default JobsList;