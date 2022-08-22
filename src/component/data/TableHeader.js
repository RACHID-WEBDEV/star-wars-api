const columns = [
  {
    id: 1,
    name: " Name",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Skin Color",
    selector: (row) => row.skin_color,
    sortable: true,
    reorder: true,
  },
  {
    id: 4,
    name: "Hair Color",
    selector: (row) => row.hair_color,
    sortable: true,
    reorder: true,
  },
  {
    id: 5,
    name: "Height",
    selector: (row) => row.height,
    sortable: true,
    reorder: true,
  },
];

export default columns;
